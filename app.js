// ==========================================
// 1. PAGE TEMPLATES (The Content)
// ==========================================
const pages = {
    // --- DASHBOARD VIEW ---
    dashboard: `
        <header class="hero-banner">
            <div class="hero-text">
                <p class="course-code">EDU 222 — FINAL PERFORMANCE INNOVATIVE TASK</p>
                <h1>Interactive Assessment & Feedback Hub</h1>
                <p class="description">Authentic assessment, ICT competency tracking, parent communication, and reflective teaching practice — consolidated in one place.</p>
            </div>
        </header>
        
        <section class="charts-section mt-30">
            <div class="grid-2-col">
                <div class="card">
                    <div class="card-header">
                        <h3>Grade Distribution</h3>
                        <span class="badge">CURRENT PERIOD</span>
                    </div>
                    <div class="chart-placeholder" style="height:250px;">
                        <canvas id="gradeChart"></canvas>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3>ICT Competency Radar</h3>
                        <span class="badge">CLASS AVERAGE</span>
                    </div>
                    <div class="chart-placeholder" style="height:250px;">
                        <canvas id="competencyRadar"></canvas>
                    </div>
                </div>
            </div>
        </section>
    `,

    // --- PORTFOLIO VIEW ---
    portfolio: `
        <section class="portfolio-section mt-30">
            <header style="margin-bottom: 30px;">
                <h2>Authentic Assessment Portfolio</h2>
                <p class="subtitle-text">Documented evidence of ICT competencies, laboratory activities, and reflective learning.</p>
            </header>

            <div class="card" style="border-left: 4px solid #0fa958; margin-bottom: 30px; padding: 20px; background: #f9fbf9;">
                <h3 style="color: #074602; margin-bottom: 10px; font-size: 1.1rem;">Portfolio Design: Showcase & Growth</h3>
                <p style="font-size: 0.95rem; color: #444; line-height: 1.6; margin: 0;">
                    <strong>Rationale:</strong> This portfolio serves a dual purpose. It acts as a <em>Showcase</em> by presenting the learner's most successful technical implementations in the laboratory. However, it also incorporates <em>Growth</em> elements by requiring students to reflect on their problem-solving process—documenting not just the final success, but the troubleshooting challenges they overcame along the way.
                </p>
            </div>

            <h3 style="margin-bottom: 15px; color: #333; font-size: 1.2rem;">Competency Artifacts</h3>
            <div class="portfolio-grid">
                
                <div class="portfolio-card">
                    <div class="card-image bg-orange" style="height: 120px; font-size: 3rem;">📺</div>
                    <div class="card-content">
                        <div class="tags"><span class="tag">HARDWARE</span></div>
                        <h4 style="margin-bottom: 15px;">Projector Display Issue</h4>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 10px;"><strong>The Scenario:</strong> A classroom projector failed to display the lesson presentation.</p>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 20px;"><strong>The Action:</strong> Diagnosed a faulty HDMI cable and successfully configured a VGA adapter as a backup solution.</p>
                        <div class="card-footer">
                            <span class="status success" style="color: #074602; background: #e8f5e9; font-size: 0.75rem;">Competency Achieved</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-card">
                    <div class="card-image bg-green" style="height: 120px; font-size: 3rem;">📦</div>
                    <div class="card-content">
                        <div class="tags"><span class="tag">SOFTWARE</span></div>
                        <h4 style="margin-bottom: 15px;">Software Installation Lab</h4>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 10px;"><strong>The Scenario:</strong> New laboratory computers required standard productivity suites.</p>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 20px;"><strong>The Action:</strong> Led the class-wide installation of MS Office and antivirus tools, ensuring proper licensing verification.</p>
                        <div class="card-footer">
                            <span class="status success" style="color: #074602; background: #e8f5e9; font-size: 0.75rem;">Competency Achieved</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-card">
                    <div class="card-image" style="height: 120px; font-size: 3rem; background: #9b51e0; color: white; display: flex; align-items: center; justify-content: center;">🔒</div>
                    <div class="card-content">
                        <div class="tags"><span class="tag">SECURITY</span></div>
                        <h4 style="margin-bottom: 15px;">Account Recovery Protocol</h4>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 10px;"><strong>The Scenario:</strong> Multiple students lost access to their educational accounts.</p>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 20px;"><strong>The Action:</strong> Guided peers through formal recovery steps, enabled 2FA, and taught a mini-lesson on password hygiene.</p>
                        <div class="card-footer">
                            <span class="status success" style="color: #074602; background: #e8f5e9; font-size: 0.75rem;">Competency Achieved</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mt-30" style="padding: 25px;">
                <h3 style="color: #074602; margin-bottom: 15px; border-bottom: 2px solid #e8f5e9; padding-bottom: 10px;">Learner Reflection Framework</h3>
                <p style="font-size: 0.95rem; color: #555; margin-bottom: 25px;">To ensure continuous growth, students must complete this 5-step reflection for every portfolio artifact submitted.</p>
                
                <div class="reflection-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
                    
                    <div style="border: 1px solid #eee; border-top: 4px solid #1a73e8; padding: 15px; border-radius: 6px; background: #fff;">
                        <div style="color: #1a73e8; font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">01</div>
                        <h4 style="margin: 0 0 5px 0; font-size: 1rem;">Learn</h4>
                        <p style="font-size: 0.8rem; color: #666; margin: 0;">What specific ICT skill did I gain from this activity?</p>
                    </div>
                    
                    <div style="border: 1px solid #eee; border-top: 4px solid #eb5757; padding: 15px; border-radius: 6px; background: #fff;">
                        <div style="color: #eb5757; font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">02</div>
                        <h4 style="margin: 0 0 5px 0; font-size: 1rem;">Challenge</h4>
                        <p style="font-size: 0.8rem; color: #666; margin: 0;">What technical problems did I encounter?</p>
                    </div>
                    
                    <div style="border: 1px solid #eee; border-top: 4px solid #f39c12; padding: 15px; border-radius: 6px; background: #fff;">
                        <div style="color: #f39c12; font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">03</div>
                        <h4 style="margin: 0 0 5px 0; font-size: 1rem;">Solve</h4>
                        <p style="font-size: 0.8rem; color: #666; margin: 0;">How did I troubleshoot and resolve the issue?</p>
                    </div>
                    
                    <div style="border: 1px solid #eee; border-top: 4px solid #0fa958; padding: 15px; border-radius: 6px; background: #fff;">
                        <div style="color: #0fa958; font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">04</div>
                        <h4 style="margin: 0 0 5px 0; font-size: 1rem;">Grow</h4>
                        <p style="font-size: 0.8rem; color: #666; margin: 0;">How does this prepare me for real-world scenarios?</p>
                    </div>
                    
                    <div style="border: 1px solid #eee; border-top: 4px solid #9b51e0; padding: 15px; border-radius: 6px; background: #fff;">
                        <div style="color: #9b51e0; font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">05</div>
                        <h4 style="margin: 0 0 5px 0; font-size: 1rem;">Improve</h4>
                        <p style="font-size: 0.8rem; color: #666; margin: 0;">What will I do differently next time?</p>
                    </div>

                </div>
            </div>
        </section>
    `,
    // --- STUDENTS VIEW ---
    students: `
        <section class="mt-30">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <h2>Student Roster</h2>
                <button class="btn" style="background: #074602; color: white; padding: 10px 20px; border-radius: 6px; border: none; cursor: pointer; font-weight: bold;">+ Add Student</button>
            </div>
            <p class="subtitle-text">Manage enrolled students, view individual performance, and track competency progress.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; margin-top: 30px;">
                
                <div class="card portfolio-card" style="padding: 25px 20px; text-align: center; border-top: 5px solid #0fa958;">
                    <div style="width: 70px; height: 70px; background: #e8f5e9; color: #074602; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 15px;">🧑‍💻</div>
                    <h4 style="margin: 0 0 5px; color: #333; font-size: 1.1rem;">Juan Dela Cruz</h4>
                    <p style="margin: 0 0 20px; font-size: 0.8rem; color: #777;">ID: 2024-0012 • BTLED-2A</p>
                    <div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 15px;">
                        <div style="text-align: left;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Overall Grade</span>
                            <span style="font-weight: bold; color: #074602; font-size: 1.1rem;">1.25</span>
                        </div>
                        <div style="text-align: right;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Status</span>
                            <span style="font-weight: bold; color: #0fa958; font-size: 0.9rem;">Excellent</span>
                        </div>
                    </div>
                </div>
                
                <div class="card portfolio-card" style="padding: 25px 20px; text-align: center; border-top: 5px solid #f39c12;">
                    <div style="width: 70px; height: 70px; background: #fff3e0; color: #f39c12; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 15px;">👩‍💻</div>
                    <h4 style="margin: 0 0 5px; color: #333; font-size: 1.1rem;">Maria Santos</h4>
                    <p style="margin: 0 0 20px; font-size: 0.8rem; color: #777;">ID: 2024-0045 • BTLED-2A</p>
                    <div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 15px;">
                        <div style="text-align: left;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Overall Grade</span>
                            <span style="font-weight: bold; color: #333; font-size: 1.1rem;">2.00</span>
                        </div>
                        <div style="text-align: right;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Status</span>
                            <span style="font-weight: bold; color: #f39c12; font-size: 0.9rem;">Average</span>
                        </div>
                    </div>
                </div>

                <div class="card portfolio-card" style="padding: 25px 20px; text-align: center; border-top: 5px solid #eb5757;">
                    <div style="width: 70px; height: 70px; background: #ffebee; color: #eb5757; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 15px;">👨‍🔧</div>
                    <h4 style="margin: 0 0 5px; color: #333; font-size: 1.1rem;">Carlos Mendoza</h4>
                    <p style="margin: 0 0 20px; font-size: 0.8rem; color: #777;">ID: 2024-0088 • BTLED-2A</p>
                    <div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 15px;">
                        <div style="text-align: left;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Overall Grade</span>
                            <span style="font-weight: bold; color: #333; font-size: 1.1rem;">3.00</span>
                        </div>
                        <div style="text-align: right;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Status</span>
                            <span style="font-weight: bold; color: #eb5757; font-size: 0.9rem;">Needs Work</span>
                        </div>
                    </div>
                </div>
                
                 <div class="card portfolio-card" style="padding: 25px 20px; text-align: center; border-top: 5px solid #0fa958;">
                    <div style="width: 70px; height: 70px; background: #e8f5e9; color: #074602; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 15px;">👩‍🎓</div>
                    <h4 style="margin: 0 0 5px; color: #333; font-size: 1.1rem;">Ana Reyes</h4>
                    <p style="margin: 0 0 20px; font-size: 0.8rem; color: #777;">ID: 2024-0102 • BTLED-2A</p>
                    <div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 15px;">
                        <div style="text-align: left;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Overall Grade</span>
                            <span style="font-weight: bold; color: #074602; font-size: 1.1rem;">1.50</span>
                        </div>
                        <div style="text-align: right;">
                            <span style="display: block; font-size: 0.7rem; color: #888; font-weight: bold; text-transform: uppercase;">Status</span>
                            <span style="font-weight: bold; color: #0fa958; font-size: 0.9rem;">Very Good</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `,
    // --- GRADEBOOK VIEW ---
    gradebook: `
        <section class="mt-30">
            <h2>Multi-Method Gradebook</h2>
            <p class="subtitle-text">USTP grading system — numerical grades, verbal descriptors, and percentage equivalents.</p>
            <div class="card">
                <table class="grade-table">
                    <thead>
                        <tr>
                            <th>% EQUIVALENT</th>
                            <th>NUMERICAL</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>97 – 100</td><td><span class="grade-pill val-high">1.00</span></td><td>Excellent</td></tr>
                        <tr><td>91 – 93</td><td><span class="grade-pill val-good">1.50</span></td><td>Very Good</td></tr>
                        <tr><td>85 – 87</td><td><span class="grade-pill val-mid">2.00</span></td><td>Above Average</td></tr>
                        <tr><td>75 – 78</td><td><span class="grade-pill val-low">3.00</span></td><td>Passing</td></tr>
                        <tr><td>Below 75</td><td><span class="grade-pill val-fail">5.00</span></td><td>Failed</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    `,

    // --- REFLECTION VIEW ---
    reflection: `
        <section class="mt-30">
            <h2>Reflective Practice Dashboard</h2>
            <div class="card mt-20">
                <div class="card-header">
                    <h3>Teaching Adjustment Plan</h3>
                    <span class="badge">ACTION REQUIRED</span>
                </div>
                <div class="adjustment-content" style="padding: 20px;">
                    <h4>Data Analysis Observation</h4>
                    <p>Students excel in Software Installation (91%) but show lower proficiency in Cisco Networking (75%).</p>
                    <h4 class="mt-20">Strategy Changes</h4>
                    <ul class="styled-list">
                        <li><strong>Increased Lab Time:</strong> Shift 15% of lecture to Packet Tracer simulations.</li>
                        <li><strong>Peer Programming:</strong> Pair high-scoring students with those needing improvement.</li>
                    </ul>
                </div>
            </div>
        </section>
    `,

    // --- TOOLKIT VIEW ---
    toolkit: `
        <section class="mt-30">
            <h2>Parent Communication Toolkit</h2>
            <p class="subtitle-text">Generate personalized narrative reports and structured meeting agendas.</p>
            
            <div class="grid-2-col mt-20">
                <div class="card" style="padding: 25px;">
                    <h3 style="color: #074602; margin-bottom: 20px;">Student Data Entry</h3>
                    
                    <div class="form-group">
                        <label>Student Name</label>
                        <input type="text" id="studentName" class="form-control" placeholder="e.g. Juan Dela Cruz">
                    </div>
                    
                    <div class="form-group">
                        <label>Current Performance Level</label>
                        <select id="performanceLevel" class="form-control">
                            <option value="Excellent">Excellent (1.00 - 1.75)</option>
                            <option value="Satisfactory">Satisfactory (2.00 - 2.75)</option>
                            <option value="Needs Improvement">Needs Improvement (3.00+)</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Key Strength (ICT Skill)</label>
                        <input type="text" id="keyStrength" class="form-control" placeholder="e.g. Software Installation">
                    </div>
                    
                    <div class="form-group">
                        <label>Area for Growth</label>
                        <input type="text" id="areaGrowth" class="form-control" placeholder="e.g. Cisco Networking">
                    </div>
                    
                    <button id="generateBtn" class="btn mt-20" style="background: #074602; color: white; width: 100%; padding: 12px; font-size: 1rem;">Generate Documents</button>
                </div>

                <div class="card" style="padding: 25px; display: flex; flex-direction: column;">
                    <div id="placeholderArea" style="text-align: center; color: #aaa; margin: auto;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">📝</div>
                        <p>Fill out the form to generate the customized toolkit documents.</p>
                    </div>

                    <div id="outputArea" style="display: none;">
                        <h4 style="color: #074602; border-bottom: 2px solid #e8f5e9; padding-bottom: 5px;">Narrative Report</h4>
                        <p id="narrativeOutput" style="font-size: 0.9rem; color: #444; line-height: 1.6; background: #f9fbf9; padding: 15px; border-radius: 8px; border-left: 4px solid #0fa958; white-space: pre-line;"></p>
                        
                        <h4 style="color: #074602; border-bottom: 2px solid #e8f5e9; padding-bottom: 5px; margin-top: 25px;">Conference Agenda</h4>
                        <ul id="agendaOutput" class="styled-list" style="font-size: 0.9rem;">
                            </ul>
                        
                        <button onclick="window.print()" class="btn btn-outline-dark mt-20" style="width: 100%;">🖨️ Print Documents</button>
                    </div>
                </div>
            </div>
        </section>
        `
};

// ==========================================
// 2. ROUTER & LOGIC (The Engine)
// ==========================================
// Function to handle the Toolkit Form generation
function initToolkit() {
    const generateBtn = document.getElementById('generateBtn');
    if (!generateBtn) return; // Exit if the button doesn't exist on this page
    
    generateBtn.addEventListener('click', () => {
        // 1. Grab values from the form
        const name = document.getElementById('studentName').value || '[Student Name]';
        const level = document.getElementById('performanceLevel').value;
        const strength = document.getElementById('keyStrength').value || '[Key Strength]';
        const growth = document.getElementById('areaGrowth').value || '[Area for Growth]';
        
        // 2. Draft the Narrative Report
        let narrative = `Dear Parent/Guardian,\n\n`;
        narrative += `It is a pleasure having ${name} in my ICT class this semester. Overall, ${name}'s academic performance is currently rated as ${level}. `;
        narrative += `During our laboratory activities, ${name} showed impressive talent and engagement, particularly in ${strength}.\n\n`;
        narrative += `To help ${name} reach their full potential and ensure they are ready for advanced modules, our instructional focus will now shift toward improving their practical skills in ${growth}. `;
        narrative += `With continued practice, I am confident ${name} will excel in all core competencies.\n\n`;
        narrative += `Sincerely,\nJolie Mhare M. Loy-a\nBTLED ICT Instructor`;
        
        document.getElementById('narrativeOutput').innerText = narrative;
        
        // 3. Draft the Conference Agenda
        const agendaHTML = `
            <li><strong>1. Welcome & Introduction:</strong> Review ${name}'s overall well-being and participation in class.</li>
            <li><strong>2. Academic Review:</strong> Discuss the current grade status (${level}) and grading metrics.</li>
            <li><strong>3. Portfolio Showcase:</strong> Highlight success and show documented evidence of ${strength}.</li>
            <li><strong>4. Action Plan:</strong> Coordinate strategies to support ${growth} at home and in the laboratory.</li>
            <li><strong>5. Open Q&A:</strong> Address any specific parent concerns or questions.</li>
        `;
        document.getElementById('agendaOutput').innerHTML = agendaHTML;
        
        // 4. Hide the placeholder and show the generated results
        document.getElementById('placeholderArea').style.display = 'none';
        document.getElementById('outputArea').style.display = 'block';
    });
}
// Function to render the charts ONLY when the dashboard is open
function renderCharts() {
    Chart.defaults.color = '#666';
    
    // Doughnut Chart
    new Chart(document.getElementById('gradeChart'), {
        type: 'doughnut',
        data: {
            labels: ['Outstanding', 'Satisfactory', 'Needs Improvement'],
            datasets: [{
                data: [45, 35, 20],
                backgroundColor: ['#074602', '#0fa958', '#e8f5e9'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, cutout: '65%' }
    });

    // Radar Chart
    new Chart(document.getElementById('competencyRadar'), {
        type: 'radar',
        data: {
            labels: ['PHP', 'CSS', 'Database', 'Cisco', 'Git'],
            datasets: [{
                label: 'Skill Level',
                data: [85, 90, 88, 75, 80],
                backgroundColor: 'rgba(15, 169, 88, 0.2)',
                borderColor: '#0fa958',
                pointBackgroundColor: '#074602'
            }]
        },
        options: { 
            responsive: true, maintainAspectRatio: false,
            scales: { r: { ticks: { display: false, min: 0, max: 100 } } }
        }
    });
}

// Function to switch pages
function navigateTo(pageId) {
    // 1. Update the main content area with the HTML string from the 'pages' object
    document.getElementById('app-content').innerHTML = pages[pageId];

    // 2. Update the sidebar to highlight the active link
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === pageId) {
            link.classList.add('active');
        }
        // 3. If we opened the dashboard, we need to draw the charts
    if (pageId === 'dashboard') {
        renderCharts();
    } else if (pageId === 'toolkit') {
        initToolkit();
    }
    });

    // 3. If we opened the dashboard, we need to draw the charts
    if (pageId === 'dashboard') {
        renderCharts();
    }
}

// ==========================================
// 3. INITIALIZATION
// ==========================================

// Wait for the HTML to finish loading, then attach our event listeners
document.addEventListener('DOMContentLoaded', () => {
    
    // Listen for clicks on the sidebar menu
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the link from jumping to the top of the page
            const targetPage = link.getAttribute('data-target');
            navigateTo(targetPage);
        });
    });

    // Load the dashboard by default when the site first opens
    navigateTo('dashboard');
});