const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'courses.html');
const stylePath = path.join(__dirname, 'temp_style.txt');

let content = fs.readFileSync(filePath, 'utf8');
const originalStyle = fs.readFileSync(stylePath, 'utf8');

const linkStr = '    <link rel="stylesheet" href="css/elite_courses.css">\n';
const linkIndex = content.indexOf(linkStr);

if (linkIndex !== -1) {
    // We also appended a <style> block right after in step 383
    let endIndex = content.indexOf('    </style>', linkIndex);
    if (endIndex !== -1) {
        endIndex += '    </style>\n'.length;
        content = content.substring(0, linkIndex) + originalStyle + '\n' + content.substring(endIndex);
    } else {
        content = content.replace(linkStr, originalStyle + '\n');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully reverted to original CSS block.');
} else {
    console.log('Link tag not found.');
}
