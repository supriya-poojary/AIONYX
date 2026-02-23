const fs = require('fs');

const dataFile = 'newLessonData.json';
let lessonData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const expectedOutputs = {
    "1.1": "Welcome to C++! Learning the fundamentals.",
    "1.2": "Supriya\\nCoding",
    "1.3": "Points: 500\\nMultiplier: 1.5",
    "1.4": "My favorite thing is a Crimson Dragon",
    "1.5": "The remainder is: 4", // 25 % 7 is 4
    "1.6": "I live in Tokyo!",
    "2.1": "Is a > b? 1",
    "2.2": "It's hot outside!",
    "2.3": "Grade C",
    "3.1": "5...\\n4...\\n3...\\n2...\\n1...\\nBlastoff!",
    "3.2": "2 4 6 8 10 ",
    "3.3": "Total Sum: 150",
    "3.4": "Length: 6\\nFirst: A",
    "4.1": "Hello, Student!",
    "4.2": "Product: 42",
    "4.3": "Original Score is now: 20",
    "4.4": "The secret is: 999",
    "5.1": "Area is: 50",
    "5.2": "Nom nom\\nI am flying!",
    "5.3": "Drawing a 4-sided square"
};

for (const key in lessonData) {
    if (expectedOutputs[key]) {
        // Format the output specifically as requested
        const outputBlock = `\n<br><strong>Expected Output:</strong>\n<div class="code-block" style="background: #1e1e2e; color: #a6accd; padding: 10px; margin-top: 5px; border-left: 3px solid #fbbf24;">${expectedOutputs[key].replace(/\\n/g, '<br>')}</div>\n`;

        // Append to content if not already added
        if (!lessonData[key].content.includes("Expected Output:")) {
            lessonData[key].content += outputBlock;
        }
    }
}

fs.writeFileSync(dataFile, JSON.stringify(lessonData, null, 4));
console.log("Appended expected outputs to newLessonData.json");

// Now rewrite apply_cpp_data.js to include the cross mark
const applyScript = `const fs = require('fs');

const newData = JSON.parse(fs.readFileSync('newLessonData.json', 'utf8'));
const htmlFile = 'public/cpp-lesson.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// 1. Replace the entire lessonData block
const regex = /const lessonData = \\{[\\s\\S]*?\\n\\s+\\};\\n/;
const replacementStr = 'const lessonData = ' + JSON.stringify(newData, null, 12) + ';\\n';

if (content.match(regex)) {
    content = content.replace(regex, replacementStr);
} else {
    const fallbackRegex = /const lessonData = \\{[\\s\\S]*?\\n\\s+\\};/;
    if (content.match(fallbackRegex)) {
        content = content.replace(fallbackRegex, replacementStr);
    }
}

// 2. Inject HTML for the solution button if it doesn't already exist
const htmlToInject = \`
        <!-- Content -->
        <div class="content-panel">
            <div style="padding: 15px 30px 10px 30px; display:flex; justify-content: flex-end;">
                 <button id="btnShowSolution" class="btn-nav" style="padding: 6px 12px; font-size: 0.85rem; color: #fbbf24; border-color: rgba(251, 191, 36, 0.3);"><i class="fas fa-lightbulb"></i> View Solution</button>
            </div>
            
            <div id="solutionBox" style="display: none; padding: 20px 30px; background: rgba(251, 191, 36, 0.05); border-bottom: 1px solid var(--border);">
                 <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                     <h4 style="margin:0; color: #fbbf24; font-size: 1rem;"><i class="fas fa-check-circle"></i> Solution Code</h4>
                     <button onclick="document.getElementById('solutionBox').style.display = 'none'; document.getElementById('btnShowSolution').innerHTML = '<i class=\\'fas fa-lightbulb\\'></i> View Solution';" class="btn-nav" style="padding: 6px 10px; font-size: 1.1rem; border:none; background: transparent; color: #fbbf24; cursor: pointer;" title="Close Solution"><i class="fas fa-times"></i></button>
                 </div>
                 <pre id="solutionCodeDisplay" style="white-space: pre-wrap; font-family: 'Fira Code', monospace; font-size: 0.85rem; color: #d4d4d8; background: #000; padding: 15px; border-radius: 6px; border: 1px solid var(--border); overflow-x: auto; margin:0;"></pre>
                 <div style="margin-top: 10px; font-size:0.8rem; color: var(--text-muted);"><i class="fas fa-info-circle"></i> Note: Compare your code with the solution above. Typing the solution yourself is the best way to learn!</div>
            </div>
            
            <div class="content-scroll" id="lessonContent">\`;

// Note: Re-inject the correct HTML block with the cross-mark (fa-times)
const panelRegexToReplace = /<div class="content-panel">[\\s\\S]*?<div class="content-scroll" id="lessonContent">/;
if (content.match(panelRegexToReplace)) {
    content = content.replace(panelRegexToReplace, htmlToInject);
    console.log("Updated Solution HTML block with cross mark.");
}

fs.writeFileSync(htmlFile, content);
console.log('Complete. cpp-lesson.html has been successfully updated with outputs and cross mark!');
`;

fs.writeFileSync('apply_cpp_data.js', applyScript);
console.log("Modified apply_cpp_data.js to include cross mark logic.");
