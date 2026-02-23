const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'courses.html');
let content = fs.readFileSync(filePath, 'utf8');

// Find the first <style> block and replace it
const startIndex = content.indexOf('    <style>');
const endIndex = content.indexOf('    </style>', startIndex) + 12; // length of '    </style>'

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    const linkTag = '    <link rel="stylesheet" href="css/elite_courses.css">\n';

    fs.writeFileSync(filePath, before + linkTag + after, 'utf8');
    console.log('Successfully replaced old CSS block with new premium stylesheet link.');
} else {
    console.log('Could not find the <style> block.');
}
