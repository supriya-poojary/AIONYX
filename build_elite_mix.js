const fs = require('fs');

const org = fs.readFileSync('original_courses_utf8.html', 'utf8');
const elite = fs.readFileSync('temp_style.txt', 'utf8');

const orgRoadmapEnd = org.indexOf('</section>', org.indexOf('id="roadmap"')) + 10;
const orgPricingStart = org.indexOf('<section id="pricing"');

let eliteCppStart = elite.indexOf('<!-- ════════════════════════════════════════════════\n         C++ MASTERY COURSE SECTION');
if (eliteCppStart === -1) {
    eliteCppStart = elite.indexOf('<!-- ════════════════════════════════════════════════\r\n         C++ MASTERY COURSE SECTION');
}

let elitePricingStart = elite.indexOf('<section id="pricing"');

let eliteHtmlBlock = elite.substring(eliteCppStart, elitePricingStart);

let styleStart = elite.indexOf('<style>');
let styleEnd = elite.indexOf('</style>', styleStart) + 8;
let eliteStyleBlock = elite.substring(styleStart, styleEnd);

eliteStyleBlock = eliteStyleBlock.replace(/\.courses-marquee-strip/g, '.elite-marquee-strip');
eliteStyleBlock = eliteStyleBlock.replace(/\.courses-marquee-inner/g, '.elite-marquee-inner');
eliteStyleBlock = eliteStyleBlock.replace(/\.courses-marquee-tag/g, '.elite-marquee-tag');
eliteStyleBlock = eliteStyleBlock.replace(/\.courses-mdot/g, '.elite-mdot');

eliteHtmlBlock = eliteHtmlBlock.replace(/courses-marquee-strip/g, 'elite-marquee-strip');
eliteHtmlBlock = eliteHtmlBlock.replace(/courses-marquee-inner/g, 'elite-marquee-inner');
eliteHtmlBlock = eliteHtmlBlock.replace(/courses-marquee-tag/g, 'elite-marquee-tag');
eliteHtmlBlock = eliteHtmlBlock.replace(/courses-mdot/g, 'elite-mdot');

eliteHtmlBlock = eliteHtmlBlock.replace(/href="#roadmap"/g, 'href="student-login"');
eliteHtmlBlock = eliteHtmlBlock.replace(/href="#cpp-course"/g, 'href="student-login"');
eliteHtmlBlock = eliteHtmlBlock.replace(/href="#python-course"/g, 'href="student-login"');

let headEnd = org.indexOf('</head>');

let finalStr = org.substring(0, headEnd) +
    '\n    <!-- Elite Styles for C++ and Python Sections -->\n    ' +
    eliteStyleBlock + '\n' +
    org.substring(headEnd, orgRoadmapEnd) +
    '\n\n' + eliteHtmlBlock + '\n\n' +
    org.substring(orgPricingStart);

finalStr = finalStr.replace(/<button class="btn-enroll">ENROLL IN COURSE<\/button>/g, '<a href="student-login" class="btn btn-primary btn-lg" style="margin-top: 20px; width: 100%; text-align: center; display: inline-block;">ENROLL IN COURSE</a>');

fs.writeFileSync('public/courses.html', finalStr, 'utf8');
console.log('Successfully rebuilt courses.html with elite C++ and Python sections.');
