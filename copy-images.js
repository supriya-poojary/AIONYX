const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const teamDir = path.join(publicDir, 'images', 'team');

if (!fs.existsSync(teamDir)) {
    fs.mkdirSync(teamDir, { recursive: true });
}

const sources = [
    'C:/Users/DELL/.gemini/antigravity/brain/0e8e7412-b87f-43a7-90c7-930f346f0d1f/uploaded_media_0_1770204875336.jpg',
    'C:/Users/DELL/.gemini/antigravity/brain/0e8e7412-b87f-43a7-90c7-930f346f0d1f/uploaded_media_1_1770204875336.jpg',
    'C:/Users/DELL/.gemini/antigravity/brain/0e8e7412-b87f-43a7-90c7-930f346f0d1f/uploaded_media_2_1770204875336.jpg',
    'C:/Users/DELL/.gemini/antigravity/brain/0e8e7412-b87f-43a7-90c7-930f346f0d1f/uploaded_media_3_1770204875336.jpg'
];

const dests = [
    path.join(teamDir, 'akanksha.jpg'),
    path.join(teamDir, 'supriya.jpg'),
    path.join(teamDir, 'akhila.jpg'),
    path.join(teamDir, 'shrushti.jpg')
];

for (let i = 0; i < sources.length; i++) {
    try {
        fs.copyFileSync(sources[i], dests[i]);
        console.log(`Copied ${sources[i]} to ${dests[i]}`);
    } catch (err) {
        console.error(`Error copying ${sources[i]}: ${err.message}`);
    }
}
