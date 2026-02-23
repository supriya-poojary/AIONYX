const fs = require('fs');
const path = require('path');

const originalHtmlStr = fs.readFileSync('original_courses_utf8.html', 'utf8');

const cppSection = `
    <!-- ════════════════════════════════════════════════
         C++ MASTERY COURSE SECTION
    ════════════════════════════════════════════════ -->
    <div class="course-glow-divider" style="margin:0;"></div>

    <header class="courses-hero" id="cpp-course" style="position: relative; overflow: hidden;">
        <div class="hero-slider">
            <img src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=2070" class="slider-img" alt="">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" class="slider-img" alt="">
        </div>
        <div class="dsa-card-bg" style="background: url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=2070') center/cover no-repeat;"></div>
        <div class="container section-reveal active">
            <span class="hero-badge reveal-up active" style="position: relative; background: rgba(96,165,250,0.1); color: #60a5fa; border-color: rgba(96,165,250,0.25);">C++ MASTERY PROGRAM</span>
            <h1 class="reveal-up active" style="font-weight: 900; margin-bottom: 20px; position: relative;">
                Master <span class="text-gradient">C++ Programming</span><br>From Zero to Advanced
            </h1>
            <p class="reveal-up active" style="max-width: 800px; margin: 0 auto 40px; color: var(--text-secondary); position: relative;">
                Build a rock-solid foundation in systems programming. From memory management and pointers to STL, OOP, and competitive programming — this course takes you from beginner to industry-ready.
            </p>
            <div class="reveal-up active" style="position: relative;">
                <a href="student-login" class="btn btn-primary btn-lg">Begin C++ Journey</a>
            </div>
        </div>
    </header>

    <div class="slider-container">
        <div class="infinite-slider">
            <div class="slide-item"><i class="fas fa-code"></i> Syntax & Basics</div>
            <div class="slide-item"><i class="fas fa-memory"></i> Pointers</div>
            <div class="slide-item"><i class="fas fa-cubes"></i> Classes & OOP</div>
            <div class="slide-item"><i class="fas fa-toolbox"></i> STL</div>
            <div class="slide-item"><i class="fas fa-file-code"></i> Templates</div>
            <div class="slide-item"><i class="fas fa-bolt"></i> Move Semantics</div>
            <div class="slide-item"><i class="fas fa-shield-alt"></i> Exception Handling</div>
            
            <div class="slide-item"><i class="fas fa-code"></i> Syntax & Basics</div>
            <div class="slide-item"><i class="fas fa-memory"></i> Pointers</div>
            <div class="slide-item"><i class="fas fa-cubes"></i> Classes & OOP</div>
            <div class="slide-item"><i class="fas fa-toolbox"></i> STL</div>
            <div class="slide-item"><i class="fas fa-file-code"></i> Templates</div>
            <div class="slide-item"><i class="fas fa-bolt"></i> Move Semantics</div>
            <div class="slide-item"><i class="fas fa-shield-alt"></i> Exception Handling</div>
        </div>
    </div>

    <section class="roadmap-section">
        <div class="container">
            <h2 class="text-center section-reveal active" style="font-size: 3rem; margin-bottom: 60px;">C++ Learning <span class="text-gradient">Roadmap</span></h2>
            <div class="roadmap-container">
                <div class="roadmap-line"></div>

                <!-- Phase 01 -->
                <div class="roadmap-item section-reveal active">
                    <div class="roadmap-content reveal-left active">
                        <h3 style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">Phase 01: Foundations</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7;">Variables, types, control flow, functions, and input/output. Write your first programs with confidence.</p>
                    </div>
                    <div class="roadmap-dot"></div>
                    <div class="roadmap-image reveal-right active">
                        <img src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800" alt="Foundations">
                    </div>
                </div>

                <!-- Phase 02 -->
                <div class="roadmap-item section-reveal active">
                    <div class="roadmap-content reveal-right active">
                        <h3 style="color: var(--secondary); font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">Phase 02: Pointers & Memory</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7;">Raw pointers, dynamic allocation, stack/heap, references, and memory safety with smart pointers.</p>
                    </div>
                    <div class="roadmap-dot"></div>
                    <div class="roadmap-image reveal-left active">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Pointers & Memory">
                    </div>
                </div>

                 <!-- Phase 03 -->
                <div class="roadmap-item section-reveal active">
                    <div class="roadmap-content reveal-left active">
                        <h3 style="color: var(--accent); font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">Phase 03: OOP & Design</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7;">Classes, constructors, destructors, operator overloading, and design patterns for real-world apps.</p>
                    </div>
                    <div class="roadmap-dot"></div>
                    <div class="roadmap-image reveal-right active">
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" alt="OOP & Design">
                    </div>
                </div>
                
                 <!-- Phase 04 -->
                <div class="roadmap-item section-reveal active">
                    <div class="roadmap-content reveal-right active">
                        <h3 style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">Phase 04: STL Mastery</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7;">Vectors, maps, sets, priority queues, and algorithms. The STL is your biggest productivity multiplier.</p>
                    </div>
                    <div class="roadmap-dot"></div>
                    <div class="roadmap-image reveal-left active">
                        <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800" alt="STL Mastery">
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const pythonSection = `
    <!-- ════════════════════════════════════════════════
         PYTHON MASTERY COURSE SECTION
    ════════════════════════════════════════════════ -->
    <div class="course-glow-divider" style="margin:0;"></div>

    <header class="courses-hero" id="python-course" style="position: relative; overflow: hidden;">
        <div class="hero-slider">
            <img src="https://images.unsplash.com/photo-1555949962-f93971239ed8?auto=format&fit=crop&q=80&w=2070" class="slider-img" alt="">
            <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2070" class="slider-img" alt="">
        </div>
        <div class="dsa-card-bg" style="background: url('https://images.unsplash.com/photo-1555949962-f93971239ed8?auto=format&fit=crop&q=80&w=2070') center/cover no-repeat;"></div>
        <div class="container section-reveal active">
            <span class="hero-badge reveal-up active" style="position: relative; background: rgba(74,222,128,0.1); color: #4ade80; border-color: rgba(74,222,128,0.25);">PYTHON PROGRAM</span>
            <h1 class="reveal-up active" style="font-weight: 900; margin-bottom: 20px; position: relative;">
                Learn <span class="text-gradient">Python</span> The Right Way
            </h1>
            <p class="reveal-up active" style="max-width: 800px; margin: 0 auto 40px; color: var(--text-secondary); position: relative;">
                From scripting basics to data structures, automation, and API development — Python is the most versatile language today. Our structured approach makes it fast and practical.
            </p>
            <div class="reveal-up active" style="position: relative;">
                <a href="student-login" class="btn btn-primary btn-lg">Begin Python Journey</a>
            </div>
        </div>
    </header>

    <div class="slider-container">
        <div class="infinite-slider">
            <div class="slide-item"><i class="fas fa-terminal"></i> Python Basics</div>
            <div class="slide-item"><i class="fas fa-list"></i> Lists & Tuples</div>
            <div class="slide-item"><i class="fas fa-book"></i> Dictionaries</div>
            <div class="slide-item"><i class="fas fa-object-group"></i> OOP in Python</div>
            <div class="slide-item"><i class="fas fa-file-import"></i> File I/O</div>
            <div class="slide-item"><i class="fas fa-robot"></i> Automation</div>
            <div class="slide-item"><i class="fas fa-plug"></i> REST APIs</div>
            
            <div class="slide-item"><i class="fas fa-terminal"></i> Python Basics</div>
            <div class="slide-item"><i class="fas fa-list"></i> Lists & Tuples</div>
            <div class="slide-item"><i class="fas fa-book"></i> Dictionaries</div>
            <div class="slide-item"><i class="fas fa-object-group"></i> OOP in Python</div>
            <div class="slide-item"><i class="fas fa-file-import"></i> File I/O</div>
            <div class="slide-item"><i class="fas fa-robot"></i> Automation</div>
            <div class="slide-item"><i class="fas fa-plug"></i> REST APIs</div>
        </div>
    </div>

    <section class="roadmap-section">
        <div class="container">
            <h2 class="text-center section-reveal active" style="font-size: 3rem; margin-bottom: 60px;">Python Learning <span class="text-gradient">Roadmap</span></h2>
            <div class="roadmap-container">
                <div class="roadmap-line"></div>

                <!-- Phase 01 -->
                <div class="roadmap-item section-reveal active">
                    <div class="roadmap-content reveal-left active">
                        <h3 style="color: var(--primary); font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">Phase 01: Core Python</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7;">Variables, datatypes, iterations, and functions. Learn how to write readable and idiomatic Python code.</p>
                    </div>
                    <div class="roadmap-dot"></div>
                    <div class="roadmap-image reveal-right active">
                        <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" alt="Core Python">
                    </div>
                </div>

                <!-- Phase 02 -->
                <div class="roadmap-item section-reveal active">
                    <div class="roadmap-content reveal-right active">
                        <h3 style="color: var(--secondary); font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">Phase 02: Data Structures</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7;">Lists, Dictionaries, Sets, and Tuples. Learn filtering, list comprehensions, and data transformations.</p>
                    </div>
                    <div class="roadmap-dot"></div>
                    <div class="roadmap-image reveal-left active">
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" alt="Data Structures">
                    </div>
                </div>
                
                 <!-- Phase 03 -->
                <div class="roadmap-item section-reveal active">
                    <div class="roadmap-content reveal-left active">
                        <h3 style="color: var(--accent); font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">Phase 03: Automation & APIs</h3>
                        <p style="font-size: 1.1rem; line-height: 1.7;">Use requests, beautifulsoup, and manage files to build your own real-time data automation scripts.</p>
                    </div>
                    <div class="roadmap-dot"></div>
                    <div class="roadmap-image reveal-right active">
                        <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800" alt="Automation & APIs">
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

let targetIdx = originalHtmlStr.indexOf('<section id="pricing"');
if (targetIdx !== -1) {
    // Add the student-login buttons to the existing pricing section as well
    let finalStr = originalHtmlStr.substring(0, targetIdx) +
        cppSection +
        pythonSection +
        originalHtmlStr.substring(targetIdx);

    // Update all standalone 'student-login' routing
    finalStr = finalStr.replace(/<button class="btn-enroll">ENROLL IN COURSE<\/button>/g, '<a href="student-login" class="btn btn-primary btn-lg" style="margin-top: 20px; width: 100%; text-align: center; display: inline-block;">ENROLL IN COURSE</a>');
    finalStr = finalStr.replace(/<a href="student-login" class="btn-enroll magnetic-btn"[\s\S]*?<\/a>/g, '<a href="student-login" class="btn btn-primary btn-lg" style="margin-top: 20px; width: 100%; text-align: center; display: inline-block;">ENROLL IN COURSE</a>');

    fs.writeFileSync('public/courses.html', finalStr, 'utf8');
    console.log("Successfully rebuilt courses.html cleanly.");
} else {
    console.log("Could not find pricing section.");
}
