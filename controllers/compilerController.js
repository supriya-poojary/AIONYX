const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

exports.runCpp = (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    // Create a unique temporary file
    const fileId = crypto.randomBytes(4).toString('hex');
    const fileName = `temp_${fileId}.cpp`;
    const exeName = `temp_${fileId}.exe`; // .exe for Windows
    const filePath = path.join(__dirname, '..', 'temp', fileName);
    const exePath = path.join(__dirname, '..', 'temp', exeName);

    // Ensure temp directory exists
    const tempDir = path.join(__dirname, '..', 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    // Write code to file
    fs.writeFile(filePath, code, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({ error: 'Failed to write code to file' });
        }

        // Compile
        exec(`g++ "${filePath}" -o "${exePath}"`, (compileErr, stdout, stderr) => {
            if (compileErr) {
                // Cleanup source file
                fs.unlink(filePath, () => { });

                return res.json({
                    run: {
                        stdout: '',
                        stderr: stderr || compileErr.message,
                        code: 1
                    }
                });
            }

            // Execute
            exec(`"${exePath}"`, { timeout: 5000 }, (runErr, runStdout, runStderr) => {
                // Cleanup files
                fs.unlink(filePath, () => { });
                fs.unlink(exePath, () => { });

                if (runErr) {
                    // Check for timeout
                    if (runErr.killed) {
                        return res.json({
                            run: {
                                stdout: runStdout,
                                stderr: 'Execution timed out.',
                                code: 124
                            }
                        });
                    }

                    return res.json({
                        run: {
                            stdout: runStdout,
                            stderr: runStderr || runErr.message,
                            code: runErr.code
                        }
                    });
                }

                res.json({
                    run: {
                        stdout: runStdout,
                        stderr: runStderr,
                        code: 0
                    }
                });
            });
        });
    });
};
