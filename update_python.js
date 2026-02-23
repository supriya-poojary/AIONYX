const fs = require('fs');
const { execSync } = require('child_process');

try {
    let raw = fs.readFileSync('python_data.json', 'utf8');
    let data = JSON.parse(raw);
    let count = 0;

    for (let key in data) {
        let lesson = data[key];

        // Skip if already processed
        if (lesson.solutionCode) continue;

        let code = lesson.code || "";
        let expectedOutput = "Output matches the exercise logic.";

        if (code.includes('input(')) {
            expectedOutput = "Interactive Output (Depends on user input)";
        } else {
            try {
                fs.writeFileSync('temp_run.py', code, 'utf8');
                let out = execSync('python temp_run.py', { encoding: 'utf8', timeout: 3000 });
                if (out) {
                    expectedOutput = out.trim().replace(/\n/g, '<br>');
                    if (expectedOutput === "") expectedOutput = "No visible output";
                }
            } catch (e) {
                // Ignore errors
            }
        }

        // Setup new format
        lesson.solutionCode = lesson.code;
        lesson.code = "# Write your Python code here\n";

        // Add expected output to content
        if (!lesson.content.includes('Expected Output:')) {
            let style = "background: #1e1e2e; color: #a6accd; padding: 10px; margin-top: 5px; border-left: 3px solid #10b981; font-family: 'Fira Code', monospace; font-size: 0.9em;";
            lesson.content += `\n<br><strong>Expected Output:</strong>\n<div class="code-block" style="${style}">${expectedOutput}</div>\n`;
        }

        count++;
    }

    // Write back to js file
    let jsStr = "const pythonLessons = " + JSON.stringify(data, null, 4) + ";\n";
    fs.writeFileSync('public/js/python-data.js', jsStr, 'utf8');
    console.log(`Updated python-data.js! Processed ${count} lessons.`);

} catch (e) {
    console.error(e);
}
