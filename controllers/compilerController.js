const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

// -----------------------------------------------
// C++ Runner — tries local g++, falls back to Piston API
// -----------------------------------------------
exports.runCpp = (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    const fileId = crypto.randomBytes(4).toString('hex');
    const fileName = `temp_${fileId}.cpp`;
    const exeName = `temp_${fileId}.exe`;
    const filePath = path.join(__dirname, '..', 'temp', fileName);
    const exePath = path.join(__dirname, '..', 'temp', exeName);

    const tempDir = path.join(__dirname, '..', 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    fs.writeFile(filePath, code, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Failed to write code to file' });
        }

        // Try local g++ first
        const compileProcess = exec(`g++ "${filePath}" -o "${exePath}"`, (compileErr, stdout, stderr) => {
            if (compileErr) {
                fs.unlink(filePath, () => { });

                // g++ not found — fall back to Piston
                const isNotFound = compileErr.code === 127 ||
                    (compileErr.message && compileErr.message.includes('ENOENT')) ||
                    (stderr && stderr.includes('is not recognized')) ||
                    (compileErr.message && compileErr.message.includes('is not recognized'));

                if (isNotFound) {
                    console.log('[Compiler] g++ not found locally, using Piston API...');
                    return runViaPiston(code, res);
                }

                // Real compilation error — show it in terminal
                return res.json({
                    run: { stdout: '', stderr: stderr || compileErr.message, code: 1 }
                });
            }

            // Run the compiled exe
            exec(`"${exePath}"`, { timeout: 5000 }, (runErr, runStdout, runStderr) => {
                fs.unlink(filePath, () => { });
                fs.unlink(exePath, () => { });

                if (runErr) {
                    if (runErr.killed) {
                        return res.json({ run: { stdout: runStdout, stderr: 'Execution timed out.', code: 124 } });
                    }
                    return res.json({ run: { stdout: runStdout, stderr: runStderr || runErr.message, code: runErr.code } });
                }

                res.json({ run: { stdout: runStdout, stderr: runStderr, code: 0 } });
            });
        });

        // Spawn-level failure (g++ not in PATH)
        compileProcess.on('error', (spawnErr) => {
            fs.unlink(filePath, () => { });
            if (!res.headersSent) {
                console.log('[Compiler] g++ spawn failed, using Piston API...');
                runViaPiston(code, res);
            }
        });
    });
};

// -----------------------------------------------
// Piston API — free online C++ compiler, no API key required
// -----------------------------------------------
function runViaPiston(code, res) {
    const payload = JSON.stringify({
        language: 'c++',
        version: '*',
        files: [{ name: 'main.cpp', content: code }]
    });

    const options = {
        hostname: 'emkc.org',
        path: '/api/v2/piston/execute',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
        }
    };

    const apiReq = https.request(options, (apiRes) => {
        let body = '';
        apiRes.on('data', (chunk) => { body += chunk; });
        apiRes.on('end', () => {
            try {
                const data = JSON.parse(body);
                const run = data.run || {};
                const compile = data.compile || {};

                // Piston compile error
                if (compile.code !== undefined && compile.code !== 0) {
                    return res.json({
                        run: {
                            stdout: '',
                            stderr: compile.stderr || compile.output || 'Compilation failed.',
                            code: compile.code
                        }
                    });
                }

                // Success or runtime error
                return res.json({
                    run: {
                        stdout: run.stdout || '',
                        stderr: run.stderr || '',
                        code: run.code !== undefined ? run.code : 0
                    }
                });
            } catch (e) {
                console.error('[Compiler] Piston parse error:', e.message);
                res.json({ run: { stdout: '', stderr: 'Online compiler returned an invalid response.', code: 1 } });
            }
        });
    });

    apiReq.on('error', (e) => {
        console.error('[Compiler] Piston API request error:', e.message);
        if (!res.headersSent) {
            res.json({
                run: {
                    stdout: '',
                    stderr: 'Could not connect to the online compiler. Please check your internet connection.',
                    code: 1
                }
            });
        }
    });

    apiReq.write(payload);
    apiReq.end();
}

// -----------------------------------------------
// Python Runner
// -----------------------------------------------
exports.runPython = (req, res) => {
    const { code, input } = req.body;
    console.log('[Compiler] runPython called');

    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    const { spawn } = require('child_process');
    const fileId = crypto.randomBytes(4).toString('hex');
    const fileName = `temp_${fileId}.py`;
    const filePath = path.join(__dirname, '..', 'temp', fileName);
    console.log('[Compiler] Temp file path:', filePath);

    const tempDir = path.join(__dirname, '..', 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    fs.writeFile(filePath, code, (err) => {
        if (err) {
            console.error('[Compiler] Error writing file:', err);
            return res.status(500).json({ error: 'Failed to write code to file' });
        }

        const pythonProcess = spawn('python', ['-u', filePath]);

        let stdoutData = '';
        let stderrData = '';

        let timer = setTimeout(() => {
            pythonProcess.kill();
            cleanup();
            res.json({ run: { stdout: stdoutData, stderr: 'Execution timed out > 5s.', code: 124 } });
        }, 5000);

        if (input) {
            pythonProcess.stdin.write(input);
            pythonProcess.stdin.end();
        }

        pythonProcess.stdout.on('data', (data) => { stdoutData += data.toString(); });
        pythonProcess.stderr.on('data', (data) => { stderrData += data.toString(); });

        pythonProcess.on('close', (code) => {
            clearTimeout(timer);
            cleanup();
            if (!res.headersSent) {
                res.json({ run: { stdout: stdoutData, stderr: stderrData, code: code } });
            }
        });

        pythonProcess.on('error', (err) => {
            clearTimeout(timer);
            console.error('[Compiler] Spawn error:', err);
            cleanup();
            if (!res.headersSent) {
                res.status(500).json({ error: 'Failed to start python process' });
            }
        });

        function cleanup() {
            fs.unlink(filePath, (err) => {
                if (err) console.error('[Compiler] Cleanup error:', err);
            });
        }
    });
};
