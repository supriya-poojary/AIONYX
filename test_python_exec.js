const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const code = `x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))`;

const fileName = 'test_1_3.py';
const filePath = path.join(__dirname, 'temp', fileName);
const tempDir = path.join(__dirname, 'temp');

if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

fs.writeFile(filePath, code, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written:', filePath);

    exec(`python "${filePath}"`, { timeout: 5000 }, (runErr, runStdout, runStderr) => {
        fs.unlink(filePath, () => { });
        if (runErr) {
            console.error('Run Error:', runErr);
            console.error('Stderr:', runStderr);
        } else {
            console.log('Stdout:', runStdout);
            console.log('Stderr:', runStderr);
        }
    });
});
