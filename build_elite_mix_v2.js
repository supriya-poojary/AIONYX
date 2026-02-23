const fs = require('fs');
const { execSync } = require('child_process');

try {
    execSync('git checkout HEAD public/courses.html');
    const org = fs.readFileSync('public/courses.html', 'utf8');

    execSync('git apply --ignore-whitespace courses_diff_utf8.patch');
    const elite = fs.readFileSync('public/courses.html', 'utf8');

    const orgRoadmapEnd = org.indexOf('</section>', org.indexOf('id="roadmap"')) + 10;
    const orgPricingStart = org.indexOf('<section id="pricing"');

    let eliteCppStart = elite.indexOf('<!-- ════════════════════════════════════════════════\n         C++ MASTERY COURSE SECTION');
    if (eliteCppStart === -1) {
        eliteCppStart = elite.indexOf('<!-- ════════════════════════════════════════════════\r\n         C++ MASTERY COURSE SECTION');
    }
    if (eliteCppStart === -1) {
        eliteCppStart = elite.indexOf('C++ MASTERY COURSE SECTION');
        eliteCppStart = elite.lastIndexOf('<!--', eliteCppStart);
    }

    let elitePricingStart = elite.indexOf('<section id="pricing"');
    if (elitePricingStart === -1) {
        console.error("Could not find pricing section in elite file.");
        process.exit(1);
    }

    let eliteHtmlBlock = elite.substring(eliteCppStart, elitePricingStart);

    const eliteCssFile = fs.readFileSync('temp_style.txt', 'utf8');
    let styleStart = eliteCssFile.indexOf('<style>');
    let styleEnd = eliteCssFile.indexOf('</style>', styleStart) + 8;
    let eliteStyleBlock = eliteCssFile.substring(styleStart, styleEnd);

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

    // Also, the user previously wanted ALL enroll buttons in original to point to student-login
    // We can do a global replace for all instances in eliteHtmlBlock
    eliteHtmlBlock = eliteHtmlBlock.replace(/<a href="[^"]+" class="extra-course-cta-btn"[^>]*>Begin C\+\+ Journey<\/a>/, '<a href="student-login" class="extra-course-cta-btn">Begin C++ Journey</a>');
    eliteHtmlBlock = eliteHtmlBlock.replace(/<a href="[^"]+" class="strip-btn"[^>]*>Enroll in C\+\+ Course<\/a>/, '<a href="student-login" class="strip-btn" style="background:linear-gradient(135deg,#3b82f6,#06b6d4);">Enroll in C++ Course</a>');
    eliteHtmlBlock = eliteHtmlBlock.replace(/<a href="[^"]+" class="extra-course-cta-btn"[^>]*>Begin Python Journey<\/a>/, '<a href="student-login" class="extra-course-cta-btn" style="background:linear-gradient(135deg,#4ade80,#06b6d4);color:#0a0f0a;">Begin Python Journey</a>');

    let headEnd = org.indexOf('</head>');

    let finalStr = org.substring(0, headEnd) +
        '\n    <!-- Elite Styles for C++ and Python Sections -->\n    ' +
        eliteStyleBlock + '\n' +
        org.substring(headEnd, orgRoadmapEnd) +
        '\n\n' + eliteHtmlBlock + '\n\n' +
        org.substring(orgPricingStart);

    finalStr = finalStr.replace(/<button class="btn-enroll">ENROLL IN COURSE<\/button>/g, '<a href="student-login" class="btn btn-primary btn-lg" style="margin-top: 20px; width: 100%; text-align: center; display: inline-block;">ENROLL IN COURSE</a>');

    fs.writeFileSync('public/courses.html', finalStr, 'utf8');
    console.log('Successfully rebuilt courses.html with real elite C++ and Python sections.');
} catch (error) {
    console.error("Error during build:", error);
}
