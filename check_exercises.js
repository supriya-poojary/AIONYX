const fs = require('fs');
let raw = fs.readFileSync('python_data.json', 'utf8');
let data = JSON.parse(raw);
let output = '';

for (let key in data) {
    let lesson = data[key];
    let content = lesson.content;
    let exerciseStart = content.indexOf('<h2 id="exercise">');
    if (exerciseStart > -1) {
        let exerciseEnd = content.indexOf('<br><strong>Expected Output:</strong>', exerciseStart);
        if (exerciseEnd === -1) exerciseEnd = content.length;

        let exerciseHtml = content.substring(exerciseStart, exerciseEnd);
        let exerciseText = exerciseHtml.replace(/<[^>]+>/g, '').trim();

        output += `LESSON ${key}: ${lesson.title}\nEXERCISE:\n${exerciseText}\n\nSOLUTION:\n${lesson.solutionCode || lesson.code}\n-----------------------------------\n\n`;
    }
}

fs.writeFileSync('exercises_check.txt', output, 'utf8');
console.log('Done!');
