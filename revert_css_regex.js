const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'courses.html');
const stylePath = path.join(__dirname, 'temp_style.txt');

let content = fs.readFileSync(filePath, 'utf8');
const originalStyle = fs.readFileSync(stylePath, 'utf8');

// Use regex to locate the style link
const linkRegex = /<link rel="stylesheet" href="css\/elite_courses\.css">/;
const match = content.match(linkRegex);

if (match) {
    const linkIndex = match.index;

    // Check if there's a subsequent <style> block right after (which we added in step 383)
    // The link is usually followed by newlines and spaces, then <style>
    const afterLink = content.substring(linkIndex + match[0].length);
    const styleStartIndex = afterLink.indexOf('<style>');

    if (styleStartIndex !== -1 && styleStartIndex < 50) { // close proximity
        const styleEndIndex = afterLink.indexOf('</style>', styleStartIndex);
        if (styleEndIndex !== -1) {
            // Replace the link and the entire <style> block with originalStyle
            const toReplace = content.substring(linkIndex, linkIndex + match[0].length + styleEndIndex + '</style>'.length);
            content = content.replace(toReplace, originalStyle);
        } else {
            content = content.replace(linkRegex, originalStyle);
        }
    } else {
        content = content.replace(linkRegex, originalStyle);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully reverted to original CSS block using regex.');
} else {
    console.log('Link tag not found using regex.');
}
