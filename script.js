const PHASES_DATA = [
    {
        id: 'phase-1',
        name: 'Phase 1: Fundamentals',
        colorClass: 'phase-1',
        unlockReq: { type: 'none' }, // Always open
        projects: [
            {
                id: 'p3',
                title: 'Build a Professional Portfolio Website',
                desc: 'Create a website or app that showcases your work and skills professionally, preparing you to apply for jobs or freelance projects.',
                diff: 'Easy',
                xp: 100,
                why: 'Because your Portfolio is the most important thing that determines your acceptance in jobs or projects — without it, your skills won\'t be presented professionally.',
                benefits: ['Build a site that reflects your identity as a developer or designer',
                    'Prepare yourself to apply for jobs or clients',
                    'Apply professional responsive UI/UX design'],
                phases: [
                    {
                        name: 'Structure & Design',
                        tasks: [
                            'Define website sections (About Me, Skills, Projects, Contact)',
                            'Design a clear and easy-to-navigate layout (Desktop + Mobile)',
                            'Add a professional Navbar with smooth section navigation'
                        ]
                    },
                    {
                        name: 'Showcasing Projects',
                        tasks: [
                            'Create a Projects section displaying your work as cards',
                            'Add details for each project (description + technologies + link)',
                            'Enhance display with Hover Effects or Animations'
                        ]
                    },
                    {
                        name: 'Interaction & Improvement',
                        tasks: [
                            'Add a Contact Form',
                            'Make the site fully Responsive across all devices',
                            'Improve performance and user experience (speed + clarity)'
                        ]
                    }
                ]
            },
            {
                id: 'p12',
                title: 'E-commerce Store',
                desc: 'Build the core structure of a professional, scalable e-commerce store.',
                diff: 'Easy',
                xp: 100,
                why: 'Because e-commerce stores are among the most in-demand projects in the market, and this project gives you a strong foundation for any business project.',
                benefits: [
                    'Understand the structure of e-commerce stores',
                    'Build interconnected pages professionally',
                    'Prepare yourself for real projects or freelance work'
                ],
                phases: [
                    {
                        name: 'Planning & Page Structure',
                        tasks: [
                            'Define store pages (Home – Products – Product Details – Cart)',
                            'Sketch a simple layout for each page',
                            'Define the user flow within the store'
                        ]
                    },
                    {
                        name: 'Building the Core UI',
                        tasks: [
                            'Build a Navbar containing (Logo – Links – Cart)',
                            'Design the homepage (Hero + Featured Products)',
                            'Create a Footer with store information'
                        ]
                    },
                    {
                        name: 'Displaying Products',
                        tasks: [
                            'Create product cards (image – name – price)',
                            'Build a product details page',
                            'Add an "Add to Cart" button'
                        ]
                    },
                    {
                        name: 'Cart & Interaction',
                        tasks: [
                            'Build the Cart page',
                            'Add products to the cart using LocalStorage',
                            'Update quantity and remove products from the cart'
                        ]
                    }
                ]
            },
            {
                id: 'p10',
                title: 'Dashboard (Admin Panel)',
                desc: 'Build a professional dashboard to display data and statistics clearly and interactively.',
                diff: 'Medium',
                xp: 100,
                why: 'Because dashboards are the backbone of most company systems, and they teach you how to display data in a useful and easy way.',
                benefits: [
                    'Display data in an organized and clear way',
                    'Work with Charts and Tables',
                    'Build interfaces used in real systems'
                ],
                phases: [
                    {
                        name: 'Dashboard Planning & Structure',
                        tasks: [
                            'Define dashboard sections (Sidebar – Topbar – Content)',
                            'Design the overall page layout',
                            'Prepare a place to display statistics'
                        ]
                    },
                    {
                        name: 'Building the Core UI',
                        tasks: [
                            'Create a Sidebar with navigation links',
                            'Build a Topbar with title and notifications',
                            'Design Cards to display numbers (total users – sales)'
                        ]
                    },
                    {
                        name: 'Displaying Data',
                        tasks: [
                            'Add a data table (Table)',
                            'Display a list of data (e.g. users or orders)',
                            'Format data clearly'
                        ]
                    },
                    {
                        name: 'Interaction & Improvement',
                        tasks: [
                            'Add Charts (Line or Bar)',
                            'Improve Responsive layout for the dashboard',
                            'Improve user experience (Spacing – colors – clarity)'
                        ]
                    }
                ]
            },
            {
                id: 'p10',
                title: 'AI Goal Organizer',
                desc: 'A smart system that turns the user\'s goals into a clear, actionable task plan.',
                diff: 'Medium',
                xp: 100,
                why: 'Because people often get lost without a clear plan, and this project teaches you how to build a product that turns a goal into practical steps using AI.',
                benefits: [
                    'Automatically convert goals into organized tasks',
                    'Handle and analyze user input',
                    'Build a smart experience that genuinely helps the user'
                ],
                phases: [
                    {
                        name: 'Goal Input & Analysis',
                        tasks: [
                            'Build an input field where the user writes their goal',
                            'Process and analyze the text (break it into an actionable idea)',
                            'Identify the type of goal (learning – project – business)'
                        ]
                    },
                    {
                        name: 'Generating the Plan',
                        tasks: [
                            'Convert the goal into a task list (Tasks)',
                            'Break tasks into phases (Basics – Execution – Mastery)',
                            'Display the plan clearly to the user'
                        ]
                    },
                    {
                        name: 'Task Management',
                        tasks: [
                            'Add a ToDo List for the user',
                            'Mark tasks as complete or incomplete',
                            'Save progress using LocalStorage'
                        ]
                    },
                    {
                        name: 'Smart Experience',
                        tasks: [
                            'Suggest additional tasks based on the goal',
                            'Show the user\'s progress (Progress)',
                            'Improve user experience (ease – clarity – interaction)'
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'phase-2',
        name: 'Phase 2: Intermediate Projects',
        colorClass: 'phase-2',
        unlockReq: { type: 'none' },
        projects: [
            {
                id: 'p2',
                title: 'Expense Tracker',
                desc: 'Build a system that helps users log and analyze their expenses clearly.',
                diff: 'Medium',
                xp: 100,
                why: 'Because expense management is one of the most common daily problems, and this project teaches you how to build a genuinely useful tool for the user.',
                benefits: [
                    'Handle user input and store it',
                    'Build a CRUD system (add – delete – edit)',
                    'Display data in a simple and clear way'
                ],
                phases: [
                    {
                        name: 'Data Input',
                        tasks: [
                            'Build an input form (amount – category – date)',
                            'Add a button to save the expense',
                            'Validate data before saving'
                        ]
                    },
                    {
                        name: 'Saving & Managing Data',
                        tasks: [
                            'Store data using LocalStorage',
                            'Display the list of expenses to the user',
                            'Add the ability to delete an expense'
                        ]
                    },
                    {
                        name: 'Display & Analysis',
                        tasks: [
                            'Show total expenses',
                            'Categorize expenses by type',
                            'Show a simple summary (how much spent today or this month)'
                        ]
                    },
                    {
                        name: 'Improving the Experience',
                        tasks: [
                            'Improve the UI design',
                            'Make the app Responsive',
                            'Improve user experience (ease of use)'
                        ]
                    }
                ]
            },
            {
                id: 'p6',
                title: 'Appointment Booking App',
                desc: 'A system that allows users to book and manage appointments easily and in an organized way.',
                diff: 'Medium',
                xp: 100,
                why: 'Because booking systems are used in clinics, salons, and companies — this project gives you experience building a system that serves real clients.',
                benefits: [
                    'Manage time and appointments in an organized way',
                    'Handle user input and dates',
                    'Build a practical system used in real life'
                ],
                phases: [
                    {
                        name: 'Data Input',
                        tasks: [
                            'Build an input form (name – date – time)',
                            'Add a button to book the appointment',
                            'Validate data before saving'
                        ]
                    },
                    {
                        name: 'Managing Appointments',
                        tasks: [
                            'Display the list of booked appointments',
                            'Store data using LocalStorage',
                            'Add the ability to cancel an appointment'
                        ]
                    },
                    {
                        name: 'Time Organization',
                        tasks: [
                            'Prevent duplicate appointments (Validation)',
                            'Sort appointments by date',
                            'Show only upcoming appointments'
                        ]
                    },
                    {
                        name: 'Improving the Experience',
                        tasks: [
                            'Improve the UI design',
                            'Make the app Responsive',
                            'Improve user experience (ease of booking)'
                        ]
                    }
                ]
            },

        ]
    },
    {
        id: 'phase-3',
        name: 'Phase 3: Advanced Projects',
        colorClass: 'phase-3',
        unlockReq: { type: 'none' },
        projects: [
            {
                id: 'p4',
                title: 'Real-Time Chat App',
                desc: 'An app that lets users send and receive messages instantly (in real time), like WhatsApp.',
                diff: 'Hard',
                xp: 200,
                why: 'Because chat systems are used in most modern applications, and this project teaches you how to handle live data updates without reloading the page.',
                benefits: [
                    'Understand real-time communication (Realtime)',
                    'Manage messages directly within the UI',
                    'Build a user experience similar to social apps'
                ],
                phases: [
                    {
                        name: 'Building the Chat UI',
                        tasks: [
                            'Design the chat screen (messages – input field – send button)',
                            'Display messages in order (right / left)',
                            'Add auto-scroll to the latest message'
                        ]
                    },
                    {
                        name: 'Sending & Receiving Messages',
                        tasks: [
                            'Connect the UI to WebSocket or any API',
                            'Send a message and display it immediately',
                            'Receive messages from another user without refreshing the page'
                        ]
                    },
                    {
                        name: 'Organizing the Conversation',
                        tasks: [
                            'Add the username to each message',
                            'Show the message send time',
                            'Organize messages inside a Bubble UI'
                        ]
                    },
                    {
                        name: 'Improving the Experience',
                        tasks: [
                            'Improve the UI design',
                            'Make the app Responsive for mobile',
                            'Improve user experience (ease and speed)'
                        ]
                    }
                ]
            }

        ]
    },
    {
        id: 'phase-4',
        name: 'Phase 4: Job-Ready',
        colorClass: 'phase-4',
        unlockReq: { type: 'none' },
        projects: [
            {
                id: 'p20',
                title: 'Delivery App',
                desc: 'Build a delivery app that lets users order products and track their order in real time.',
                diff: 'Advanced',
                xp: 150,
                why: 'Because delivery apps are among the most used products in the market, and this project proves your ability to build a complete system that serves real clients.',
                benefits: [
                    'Build a complete system (customer + order + status)',
                    'Manage and track orders',
                    'Simulate real market applications'
                ],
                phases: [
                    {
                        name: 'Customer App UI',
                        tasks: [
                            'Build the homepage (restaurants or stores)',
                            'Display a list of products inside the store',
                            'Build a product details page with an order button'
                        ]
                    },
                    {
                        name: 'Order Management',
                        tasks: [
                            'Add products to the cart',
                            'Build the Cart page',
                            'Confirm the order (Checkout Simulation)'
                        ]
                    },
                    {
                        name: 'Order Tracking',
                        tasks: [
                            'Show order status (Preparing – On the way – Delivered)',
                            'Update status dynamically',
                            'Display order details to the user'
                        ]
                    },
                    {
                        name: 'Admin Panel',
                        tasks: [
                            'Display all orders in a dashboard',
                            'Change order status from the admin panel',
                            'Add / Delete products from the store'
                        ]
                    }
                ]
            }
        ]
    }
];

let state = {
    xp: 0,
    level: 1,
    completedTasks: [],
    completedProjects: [],
    dailyMissionDone: false,
    dailyMissionDate: null,
    currentMissionId: null
};

// Daily Mission logic
const DAILY_MISSIONS = [
    { id: 'dm1', title: 'Build a complete login/register page with Validation and connect it to a real API' },

    { id: 'dm2', title: 'Develop a product page for an e-commerce store with filtering (price / category) + Pagination' },

    { id: 'dm3', title: 'Build a Dashboard displaying statistics (sales / users) using Charts and API integration' },

    { id: 'dm4', title: 'Implement a full shopping cart system (add / delete / update quantity) with LocalStorage or Backend' },

    { id: 'dm5', title: 'Build a user Profile page with data editing and profile picture upload' },

    { id: 'dm6', title: 'Develop a Product Details page with images + reviews + related products' },

    { id: 'dm7', title: 'Build a Notifications UI system that shows real-time updates to the user' },

    { id: 'dm8', title: 'Analyze a real Dataset (CSV) and display results in an interactive Dashboard' },

    { id: 'dm9', title: 'Build a Landing Page for a SaaS product focused on Conversion with a clear CTA' },

    { id: 'dm10', title: 'Implement a Roles system that differentiates between Admin and User in the UI' }
];

let currentDailyMission = null;
let timerInterval = null;
let changeInterval = null;
let timeLeft = 60;

function init() {
    const saved = localStorage.getItem('skill_journey_state');
    if (saved) state = JSON.parse(saved);

    pickRandomMission();
    startTimer();

    // 🔥 Change mission every minute
    changeInterval = setInterval(() => {
        pickRandomMission();
        startTimer();
    }, 60000);

    calcLevel();
    updateUI();
    renderRoadmap();
}

// Pick a random mission
function pickRandomMission() {
    const randomMission = DAILY_MISSIONS[Math.floor(Math.random() * DAILY_MISSIONS.length)];

    state.currentMissionId = randomMission.id;
    state.dailyMissionDone = false;

    currentDailyMission = randomMission;

    updateUI();
    localStorage.setItem('skill_journey_state', JSON.stringify(state));
}

// Countdown timer
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;

    updateTimerUI();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Update timer in the UI
function updateTimerUI() {
    const el = document.getElementById('dm-timer');
    if (el) {
        el.innerText = `Changes in ${timeLeft}s`;
    }
}

// 👇 Pick a random mission
function pickRandomMission() {
    const randomMission = DAILY_MISSIONS[Math.floor(Math.random() * DAILY_MISSIONS.length)];

    state.currentMissionId = randomMission.id;
    state.dailyMissionDone = false;

    currentDailyMission = randomMission;

    updateUI();
    localStorage.setItem('skill_journey_state', JSON.stringify(state));
}

function calcLevel() {
    state.level = Math.floor(state.xp / 300) + 1;
}

function updateUI() {
    document.getElementById('ui-lvl').innerText = state.level;

    const xpInCurrentLevel = state.xp % 300;
    document.getElementById('ui-xp').innerText = `${xpInCurrentLevel} / 300`;

    // Total projects
    const totalProjects = PHASES_DATA.reduce((acc, ph) => acc + ph.projects.length, 0);
    const completedCount = state.completedProjects.length;

    document.getElementById('proj-progress-text').innerText = `Completed ${completedCount} / ${totalProjects} projects`;
    document.getElementById('overall-prog-bar').style.width = `${(completedCount / totalProjects) * 100}%`;

    // Next unlock hint (removed as all phases are unlocked)
    document.getElementById('unlock-progress-text').innerText = 'All phases are now unlocked 🚀';

    // Daily mission UI
    const dmXp = getDailyMissionXp();
    document.getElementById('dm-text').innerText = currentDailyMission.title;
    document.querySelector('.dm-xp').innerText = `+${dmXp} XP`;
    const dmBtn = document.getElementById('btn-dm-start');
    if (state.dailyMissionDone) {
        dmBtn.innerText = 'Mission Completed ✅';
        dmBtn.style.background = 'var(--accent)';
        dmBtn.disabled = true;
    } else {
        dmBtn.innerText = 'Start Mission Now';
        dmBtn.style.background = '#f59e0b';
        dmBtn.disabled = false;
    }

    // Update Next Step and Recommendation
    updateSmartGuidance();

    localStorage.setItem('skill_journey_state', JSON.stringify(state));
}

function getDailyMissionXp() {
    if (state.level >= 5) return 200;
    if (state.level >= 3) return 150;
    return 100;
}

function updateSmartGuidance() {
    // Next Step logic
    const nextStepEl = document.getElementById('next-step-text');
    if (nextStepEl) {
        let stepText = 'You\'re amazing! You\'ve unlocked all work tracks. Keep executing the available projects.';
        if (state.completedProjects.length < 3) stepText = `Only ${3 - state.completedProjects.length} more project(s) to unlock Phase 2 (Beginner Projects). Keep going!`;
        else if (state.xp < 800) stepText = `Earn ${800 - state.xp} more XP through daily tasks to unlock Phase 3 projects.`;
        else if (state.level < 5) stepText = `Reach Level 5 to unlock advanced projects (Job-Ready phase).`;
        nextStepEl.innerText = stepText;
    }

    // Recommendation logic
    const recEl = document.getElementById('rec-text');
    const recBtn = document.getElementById('btn-rec-start');

    if (recEl && recBtn) {
        let recommendedProject = null;
        for (let phase of PHASES_DATA) {
            if (isPhaseUnlocked(phase.unlockReq)) {
                let avail = phase.projects.find(p => !state.completedProjects.includes(p.id));
                if (avail) {
                    recommendedProject = avail;
                    break;
                }
            }
        }

        if (recommendedProject) {
            recEl.innerText = `We recommend starting with (${recommendedProject.title}) as it perfectly matches your current level and experience.`;
            recBtn.style.display = 'block';
            recBtn.onclick = () => {
                // Focus on the recommendation
                const card = document.querySelector(`.project-card h3`); // just trigger openProject on it
                openProject(recommendedProject, false);
            };
        } else {
            recEl.innerText = 'You\'ve completed all available projects in the current track! You\'re a legend 🔥.';
            recBtn.style.display = 'none';
        }
    }
}

function isPhaseUnlocked(req) {
    if (req.type === 'none') return true;
    if (req.type === 'projects') return state.completedProjects.length >= req.count;
    if (req.type === 'xp') return state.xp >= req.count;
    if (req.type === 'level') return state.level >= req.count;
    return false;
}

function isProjectCompleted(projectId, totalTasks) {
    const completedTasks = state.completedTasks?.[projectId] || [];
    return completedTasks.length === totalTasks;
}

function renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    container.innerHTML = '';

    PHASES_DATA.forEach(phase => {
        const unlocked = isPhaseUnlocked(phase.unlockReq);

        const phaseDiv = document.createElement('div');
        phaseDiv.className = 'roadmap-phase';

        phaseDiv.innerHTML = `
            <h2 class="phase-title ${phase.colorClass}">
                <div class="dot"></div>
                ${phase.name} ${!unlocked ? '🔒' : ''}
            </h2>
            <div class="project-grid" id="grid-${phase.id}"></div>
        `;
        container.appendChild(phaseDiv);

        const grid = document.getElementById(`grid-${phase.id}`);

        phase.projects.forEach(p => {

            // ✅ Count the number of tasks inside the project
            const totalTasks = p.phases.reduce((acc, ph) => acc + ph.tasks.length, 0);

            // ✅ Is the project complete?
            const isDone = isProjectCompleted(p.id, totalTasks);

            const card = document.createElement('div');
            card.className = `project-card ${!unlocked ? 'locked' : ''}`;

            if (unlocked) {
                card.onclick = () => openProject(p, isDone, phase);
            }

            card.innerHTML = `
                ${!unlocked ? `
                    <div class="lock-overlay">
                        <span>🔒</span>
                        ${phase.unlockReq.text}
                    </div>
                ` : ''}

                <h3>${p.title}</h3>
                <p style="margin-bottom: 15px;">${p.desc}</p>
                
                <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-weight: 800; color: var(--accent); margin-bottom: 5px; font-size: 0.95rem;">
                        🧠 Why Build This Project?
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 12px;">
                        ${p.why}
                    </p>
                    
                    <div style="font-weight: 800; color: var(--primary); margin-bottom: 5px; font-size: 0.95rem;">
                        🎯 What Will You Gain?
                    </div>
                    <ul style="list-style-type: disc; margin-right: 20px; font-size: 0.85rem; color: var(--text-dim);">
                        ${p.benefits.map(b => `<li style="margin-bottom: 3px;">${b}</li>`).join('')}
                    </ul>
                </div>

                <div class="card-footer">
                    <span class="difficulty">${p.diff}</span>
                    
                    <span class="xp-val">
                        ${isDone
                    ? 'Completed ✅'
                    : `${(state.completedTasks?.[p.id]?.length || 0)} / ${totalTasks}`
                }
                    </span>
                </div>
            `;

            grid.appendChild(card);
        });
    });
}
let activeProject = null;

function openProject(project, isDone, phase) {
    activeProject = project;
    document.getElementById('drawer-title').innerText = project.title;

    let modeText = '';
    if (phase.id === 'phase-1') modeText = '💡 Guided Mode: Start with me step by step';
    else if (phase.id === 'phase-2') modeText = '⚔️ Challenge Mode: You have a project… execute it your way';
    else if (phase.id === 'phase-3') modeText = '🏢 Work Environment: Tasks (To Do / Done)';
    else if (phase.id === 'phase-4') modeText = '💼 Client Request: A message from the client';

    document.querySelector('#side-drawer .drawer-top p').innerText = modeText;

    const content = document.getElementById('drawer-content');
    content.innerHTML = '';

    const progContainer = document.createElement('div');
    progContainer.className = 'prog-container';
    progContainer.innerHTML = `<div class="prog-bar" id="drawer-prog-bar"></div>`;
    content.appendChild(progContainer);

    if (phase.id === 'phase-4') {
        const clientMsg = document.createElement('div');
        clientMsg.style.cssText = 'background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid var(--accent);';
        clientMsg.innerHTML = `<h4 style="color: var(--accent); margin-bottom: 10px;">📩 New message from the client:</h4>
        <p style="color: var(--text-dim); font-size: 1.1rem; line-height: 1.8;">"Hello, we need you to build and develop (${project.title}). The requirements are clear but execution depends on your expertise. We expect to receive a complete, polished deliverable. Details are below."</p>`;
        content.appendChild(clientMsg);
    }

    let allTasks = [];
    project.phases.forEach((ph, pIdx) => {
        ph.tasks.forEach((task, tIdx) => {
            allTasks.push({
                phName: ph.name,
                task: task,
                taskId: `${project.id}-${pIdx}-${tIdx}`,
                isDone: state.completedTasks.includes(`${project.id}-${pIdx}-${tIdx}`)
            });
        });
    });

    let hasFoundUnfinished = false;

    if (phase.id === 'phase-3') {
        const todoSection = document.createElement('div');
        const doneSection = document.createElement('div');
        todoSection.innerHTML = `<div class="phase-header" style="color: #f59e0b;">📋 To Do (Required Tasks)</div>`;
        doneSection.innerHTML = `<div class="phase-header" style="color: var(--accent);">✅ Done (Completed Tasks)</div>`;
        doneSection.style.marginTop = '40px';

        allTasks.forEach(item => {
            const el = createTaskElement(item.task, item.taskId, item.isDone, project.id, phase.id, isDone);
            if (item.isDone) doneSection.appendChild(el);
            else todoSection.appendChild(el);
        });

        content.appendChild(todoSection);
        if (doneSection.children.length > 1) content.appendChild(doneSection);

    } else if (phase.id === 'phase-2') {
        const section = document.createElement('div');
        section.className = 'phase-section';
        allTasks.forEach(item => {
            const el = createTaskElement(item.task, item.taskId, item.isDone, project.id, phase.id, isDone);
            section.appendChild(el);
        });
        content.appendChild(section);

    } else {
        project.phases.forEach((ph, pIdx) => {
            const section = document.createElement('div');
            section.className = 'phase-section';
            section.innerHTML = `<div class="phase-header">🟣 ${ph.name}</div>`;

            ph.tasks.forEach((task, tIdx) => {
                const taskId = `${project.id}-${pIdx}-${tIdx}`;
                const taskDone = state.completedTasks.includes(taskId);

                if (phase.id === 'phase-1' && !isDone) {
                    if (!taskDone && hasFoundUnfinished) return;
                    if (!taskDone) hasFoundUnfinished = true;
                }

                const el = createTaskElement(task, taskId, taskDone, project.id, phase.id, isDone);
                section.appendChild(el);
            });

            if (section.querySelectorAll('.task-item').length > 0) {
                content.appendChild(section);
            }
        });
    }

    if (!isDone) {
        const btn = document.createElement('button');
        btn.className = 'btn-finish';
        btn.id = 'btn-finish-proj';
        btn.innerText = '🔥 You\'ve finished the phase';
        btn.disabled = true;
        btn.onclick = () => finishProject(project);
        content.appendChild(btn);
    } else {
        const tweetText = encodeURIComponent(`I completed the project "${project.title}" 🔥 and I improve myself daily 🚀 #hash_plus`);
        const twitterBtn = document.createElement('button');
        twitterBtn.className = 'btn-twitter';
        twitterBtn.innerHTML = `🚀 Share Your Achievement`;
        twitterBtn.onclick = () => window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
        content.appendChild(twitterBtn);
    }

    updateDrawerProgress(project.id);

    document.getElementById('side-drawer').classList.add('active');
    document.getElementById('drawer-overlay').classList.add('active');
}

function createTaskElement(taskText, taskId, taskDone, projId, phaseId, isProjDone) {
    const savedNote = state.taskNotes && state.taskNotes[taskId] ? state.taskNotes[taskId] : '';
    const item = document.createElement('div');
    item.className = `task-item ${taskDone ? 'checked' : ''}`;
    item.style.flexDirection = 'column';
    item.style.alignItems = 'stretch';
    item.style.cursor = 'default';

    let taskHTML = `
        <div style="display: flex; align-items: center; gap: 20px; cursor: pointer;" onclick="toggleTaskOnly('${taskId}', '${projId}', '${phaseId}')">
            <div class="check-circle"></div>
            <div class="task-text">${taskText}</div>
        </div>
    `;

    if (!taskDone && !isProjDone) {
        taskHTML += `
            <div class="task-interactive-area" style="margin-top: 15px; margin-right: 48px;">
                <textarea id="input-${taskId}" placeholder="Write how you will implement this task..." style="width: 100%; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.3); border: 1px solid var(--border); color: white; resize: vertical; min-height: 80px; font-family: Cairo; font-size: 0.95rem;">${savedNote}</textarea>
                <button onclick="saveTaskInteractive('${taskId}', '${projId}', '${phaseId}')" class="btn-dm" style="margin-top: 10px; padding: 8px 20px;">Save</button>
            </div>
        `;
    } else if (savedNote) {
        taskHTML += `
            <div style="margin-top: 10px; margin-right: 48px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; font-size: 0.9rem; color: var(--text-dim); cursor: pointer;" onclick="toggleTaskOnly('${taskId}', '${projId}', '${phaseId}')">
                📝 Your note: ${savedNote}
            </div>
        `;
    }

    item.innerHTML = taskHTML;
    return item;
}

function toggleTaskOnly(taskId, projId, phaseId) {
    if (state.completedTasks.includes(taskId)) {
        state.completedTasks = state.completedTasks.filter(id => id !== taskId);
        state.xp = Math.max(0, state.xp - 100);
    } else {
        state.completedTasks.push(taskId);
        state.xp += 100;
        checkXpLevelUp();
    }

    calcLevel();
    updateUI();
    const proj = PHASES_DATA.flatMap(p => p.projects).find(p => p.id === projId);
    const phase = PHASES_DATA.find(ph => ph.id === phaseId);
    updateDrawerProgress(projId);
    openProject(proj, false, phase);
}

function saveTaskInteractive(taskId, projId, phaseId) {
    const inputEl = document.getElementById(`input-${taskId}`);
    const note = inputEl ? inputEl.value : '';

    if (!state.taskNotes) state.taskNotes = {};
    state.taskNotes[taskId] = note;

    if (!state.completedTasks.includes(taskId)) {
        state.completedTasks.push(taskId);
        state.xp += 100;
        checkXpLevelUp();
    }

    calcLevel();
    updateUI(); // Explicitly save to LocalStorage
    const proj = PHASES_DATA.flatMap(p => p.projects).find(p => p.id === projId);
    const phase = PHASES_DATA.find(ph => ph.id === phaseId);

    updateDrawerProgress(projId);
    openProject(proj, false, phase); // Re-render logic

    if (note.trim().length > 0) {
        const msg = document.createElement('div');
        msg.innerText = '👍 Great, saved successfully';
        msg.style.cssText = 'position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: var(--accent); color: white; padding: 12px 25px; border-radius: 20px; z-index: 9999; font-weight: 800; animation: floatUp 2.5s ease-out forwards;';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 2500);
    }
}

function updateDrawerProgress(projId) {
    const proj = PHASES_DATA.flatMap(p => p.projects).find(p => p.id === projId);
    let total = 0, done = 0;

    proj.phases.forEach((ph, pIdx) => {
        ph.tasks.forEach((_, tIdx) => {
            total++;
            if (state.completedTasks.includes(`${projId}-${pIdx}-${tIdx}`)) done++;
        });
    });

    const bar = document.getElementById('drawer-prog-bar');
    if (bar) bar.style.width = `${(done / total) * 100}%`;

    const btn = document.getElementById('btn-finish-proj');
    if (btn) btn.disabled = (done !== total);
}

function checkXpLevelUp() {
    if (state.xp > 0 && state.xp % 300 === 0) {
        const nextLevel = Math.floor(state.xp / 300) + 1;
        triggerMomentOfSuccess(300, nextLevel, '🔥 Congratulations! You completed the phase!');
    }
}

function finishProject(project) {
    state.completedProjects.push(project.id);

    const oldLevel = state.level;
    state.xp += project.xp;
    calcLevel();

    updateUI();
    renderRoadmap();
    closeDrawer();

    triggerMomentOfSuccess(project.xp, state.level > oldLevel ? state.level : null);
}

function startDailyMission() {
    if (state.dailyMissionDone) return;

    state.dailyMissionDone = true;
    const oldLevel = state.level;
    const dmXp = getDailyMissionXp();
    state.xp += dmXp;
    calcLevel();

    updateUI();
    renderRoadmap();
    triggerMomentOfSuccess(dmXp, state.level > oldLevel ? state.level : null, 'Daily Mission Completed!');
}

function closeDrawer() {
    document.getElementById('side-drawer').classList.remove('active');
    document.getElementById('drawer-overlay').classList.remove('active');
}

document.getElementById('drawer-overlay').onclick = closeDrawer;

// Gamification Moment of Success
function triggerMomentOfSuccess(gainedXp, newLevel = null, customTitle = null) {
    const overlay = document.getElementById('popup-overlay');
    const titleEl = document.getElementById('popup-title');
    const descEl = document.getElementById('popup-desc');

    titleEl.innerText = customTitle ? customTitle : `+${gainedXp} XP`;

    if (newLevel) {
        descEl.innerText = `You reached Level ${newLevel}! 🔥`;
        fireConfetti();
    } else {
        descEl.innerText = 'Great job keeping going! 🚀';
        fireConfetti(true); // small confetti
    }

    overlay.classList.add('active');
}

function closePopup() {
    document.getElementById('popup-overlay').classList.remove('active');
}

function fireConfetti(small = false) {
    const duration = small ? 1000 : 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: small ? 3 : 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#8b5cf6', '#3b82f6', '#22c55e', '#f59e0b']
        });
        confetti({
            particleCount: small ? 3 : 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#8b5cf6', '#3b82f6', '#22c55e', '#f59e0b']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}


function resetXP() {
    if (confirm("Are you sure you want to reset all points and XP completely?")) {
        state.xp = 0;
        calcLevel();
        updateUI();
        renderRoadmap();
    }
}

init();

// Welcome Overlay Logic
document.addEventListener('DOMContentLoaded', () => {
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const startJourneyBtn = document.getElementById('btn-start-journey');

    if (welcomeOverlay && startJourneyBtn) {

        const hasVisited = localStorage.getItem('has_visited_journey') === 'true';

        // 1. Initial State Setup
        if (history.state && history.state.page === 'main') {
            // Reloaded on main page
            welcomeOverlay.style.display = 'none';
            welcomeOverlay.classList.add('hidden');
        } else if (history.state && history.state.page === 'welcome') {
            // Reloaded on welcome page
            welcomeOverlay.style.display = 'flex';
            welcomeOverlay.classList.remove('hidden');
        } else if (hasVisited) {
            // New tab, but visited before -> set history to allow going back to welcome
            welcomeOverlay.style.display = 'none';
            welcomeOverlay.classList.add('hidden');

            history.replaceState({ page: 'welcome' }, '');
            history.pushState({ page: 'main' }, '');
        } else {
            // First time ever
            welcomeOverlay.style.display = 'flex';
            welcomeOverlay.classList.remove('hidden');

            history.replaceState({ page: 'welcome' }, '');
        }

        // 2. Button Click (Go to Main)
        startJourneyBtn.addEventListener('click', () => {
            localStorage.setItem('has_visited_journey', 'true');

            welcomeOverlay.classList.add('hidden');
            setTimeout(() => {
                welcomeOverlay.style.display = 'none';
            }, 600);

            // Add 'main' to history so Back goes to 'welcome'
            history.pushState({ page: 'main' }, '');
        });

        // 3. Browser Back/Forward Buttons
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page === 'welcome') {
                welcomeOverlay.style.display = 'flex';
                setTimeout(() => welcomeOverlay.classList.remove('hidden'), 10);
            } else {
                welcomeOverlay.classList.add('hidden');
                setTimeout(() => welcomeOverlay.style.display = 'none', 600);
            }
        });
    }
});

// =========================================
// 🚀 New Feature 1 & 2: Career Paths + Portfolio Modal
// =========================================

const PATHS_DEF = [
    { id: 'frontend', name: 'Frontend Path', icon: '🎨', color: 'var(--primary)' },
    { id: 'backend', name: 'Backend Path', icon: '⚙️', color: 'var(--secondary)' },
    { id: 'data', name: 'Data Path', icon: '📊', color: 'var(--accent)' }
];

let selectedPathFilter = localStorage.getItem('selected_path') || null;

function getProjectPath(project) {
    const title = project.title || '';
    if (title.includes('Portfolio') || title.includes('E-commerce') || title.includes('Chat')) return 'frontend';
    if (title.includes('Dashboard') || title.includes('Expense') || title.includes('Data')) return 'data';
    return 'backend';
}

function getPathProgress(pathId) {
    let pathProjects = 0;
    let completedInPath = 0;
    let pathXp = 0;

    PHASES_DATA.forEach(phase => {
        phase.projects.forEach(p => {
            if (getProjectPath(p) === pathId) {
                pathProjects++;
                if (state.completedProjects.includes(p.id) || isProjectFullyDone(p)) {
                    completedInPath++;
                    pathXp += p.xp || 100;
                } else {
                    const doneTasks = state.completedTasks?.filter(tid => tid.startsWith(`${p.id}-`)).length || 0;
                    pathXp += (doneTasks * 100);
                }
            }
        });
    });

    const level = Math.floor(pathXp / 300) + 1;
    const progress = pathProjects === 0 ? 0 : (completedInPath / pathProjects) * 100;

    return { level, pathXp, completedInPath, pathProjects, progress };
}

function isProjectFullyDone(p) {
    const totalTasks = p.phases.reduce((acc, ph) => acc + ph.tasks.length, 0);
    const completedTasks = state.completedTasks?.filter(id => id.startsWith(`${p.id}-`)) || [];
    return completedTasks.length === totalTasks && totalTasks > 0;
}

function renderPaths() {
    const grid = document.getElementById('paths-grid');
    if (!grid) return;
    grid.innerHTML = '';

    PATHS_DEF.forEach(path => {
        const prog = getPathProgress(path.id);

        const card = document.createElement('div');
        card.className = `path-card ${selectedPathFilter === path.id ? 'active-path' : ''}`;
        card.onclick = () => {
            selectedPathFilter = path.id;
            localStorage.setItem('selected_path', path.id);
            updateViewFlow();
        };

        card.innerHTML = `
            <div class="path-icon">${path.icon}</div>
            <div class="path-name">${path.name}</div>
            <div class="path-stats">
                <span class="path-level">Level ${prog.level} 🔥</span>
                <span>${prog.completedInPath} / ${prog.pathProjects} projects</span>
            </div>
            <div class="prog-container" style="height: 6px; background: rgba(255,255,255,0.1);">
                <div class="prog-bar" style="width: ${prog.progress}%; background: ${path.color};"></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateViewFlow() {
    const pathsSec = document.getElementById('career-paths-section');
    const contentLay = document.querySelector('.content-layout');
    let backContainer = document.getElementById('back-to-paths-container');

    // Create back button if it doesn't exist
    if (!backContainer && contentLay) {
        backContainer = document.createElement('div');
        backContainer.id = 'back-to-paths-container';
        backContainer.style.marginBottom = '30px';
        backContainer.style.display = 'none';

        const backBtn = document.createElement('button');
        backBtn.className = 'btn-start-journey';
        backBtn.style.padding = '10px 20px';
        backBtn.style.fontSize = '1.1rem';
        backBtn.style.background = 'rgba(255,255,255,0.1)';
        backBtn.style.boxShadow = 'none';
        backBtn.style.border = '1px solid var(--border)';
        backBtn.innerHTML = '🔙 Back to Paths';
        backBtn.onclick = () => {
            selectedPathFilter = null;
            localStorage.removeItem('selected_path');
            updateViewFlow();
        };

        backContainer.appendChild(backBtn);
        contentLay.parentNode.insertBefore(backContainer, contentLay);
    }

    if (selectedPathFilter) {
        // Show Projects, Hide Paths
        if (pathsSec) pathsSec.style.display = 'none';
        if (contentLay) contentLay.style.display = '';
        if (backContainer) backContainer.style.display = 'block';

        renderRoadmap();
    } else {
        // Show Paths, Hide Projects
        if (pathsSec) pathsSec.style.display = 'block';
        if (contentLay) contentLay.style.display = 'none';
        if (backContainer) backContainer.style.display = 'none';

        renderPaths();
    }
}

// Intercept renderRoadmap
const originalRenderRoadmap = renderRoadmap;
renderRoadmap = function () {
    originalRenderRoadmap(); // Render normally

    // Apply filters
    if (selectedPathFilter) {
        PHASES_DATA.forEach(phase => {
            const grid = document.getElementById(`grid-${phase.id}`);
            if (!grid) return;

            let anyVisible = false;
            Array.from(grid.children).forEach((cardEl, idx) => {
                const proj = phase.projects[idx];
                if (getProjectPath(proj) !== selectedPathFilter) {
                    cardEl.style.display = 'none';
                } else {
                    cardEl.style.display = 'flex';
                    anyVisible = true;
                }
            });

            const phaseEl = grid.closest('.roadmap-phase');
            if (phaseEl) phaseEl.style.display = anyVisible ? 'block' : 'none';
        });
    } else {
        PHASES_DATA.forEach(phase => {
            const phaseEl = document.getElementById(`grid-${phase.id}`)?.closest('.roadmap-phase');
            if (phaseEl) phaseEl.style.display = 'block';

            const grid = document.getElementById(`grid-${phase.id}`);
            if (grid) Array.from(grid.children).forEach(cardEl => cardEl.style.display = 'flex');
        });
    }
};

// Intercept openProject
const originalOpenProject = openProject;
openProject = function (project, isDone, phase) {
    originalOpenProject(project, isDone, phase);

    const content = document.getElementById('drawer-content');
    if (!content) return;

    // Feature 2: "Start with me" (Starter Template)
    const topSection = document.querySelector('.drawer-top');
    if (topSection && !document.getElementById('btn-starter-template')) {
        const starterBtn = document.createElement('button');
        starterBtn.id = 'btn-starter-template';
        starterBtn.className = 'btn-starter';
        starterBtn.innerHTML = '🚀 Start with me (Starter Template)';
        starterBtn.onclick = () => openStarterModal(project);
        topSection.appendChild(starterBtn);
    }

    const tasks = content.querySelectorAll('.task-item');
    tasks.forEach((taskEl, index) => {
        const helpBtn = document.createElement('button');
        helpBtn.className = 'btn-help beginner-only';
        helpBtn.innerHTML = '💡 Stuck? Help me';
        helpBtn.onclick = (e) => {
            e.stopPropagation();
            openHelpModal(project, index, taskEl.querySelector('.task-text').innerText);
        };
        taskEl.appendChild(helpBtn);
    });

    // Feature 3: Feedback and Portfolio if done
    if (isDone || isProjectFullyDone(project)) {
        // Feedback Button
        const btnFeed = document.createElement('button');
        btnFeed.className = 'btn-feedback';
        btnFeed.innerHTML = '📊 Rate My Work';
        btnFeed.onclick = () => openFeedbackModal(project);
        content.appendChild(btnFeed);

        // Portfolio Button
        const btnPort = document.createElement('button');
        btnPort.className = 'btn-finish';
        btnPort.style.background = 'linear-gradient(to right, #10b981, #059669)';
        btnPort.style.marginTop = '15px';
        btnPort.innerHTML = '💼 Export to Portfolio / CV';
        btnPort.onclick = () => openPortfolioModal(project);

        content.appendChild(btnPort);
    }
};

function openPortfolioModal(project) {
    let modal = document.getElementById('portfolio-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'portfolio-modal';
        modal.className = 'portfolio-modal';
        document.body.appendChild(modal);
    }

    const path = getProjectPath(project);
    const tech = path === 'frontend' ? 'HTML, CSS, JavaScript, LocalStorage' :
        path === 'backend' ? 'Node.js, Express, JavaScript, Database, API' :
            'Data Analysis, Chart.js, APIs, JSON';

    const descText = `I built a (${project.title}) application that allows users to ${project.desc} This project was developed with a focus on user experience (UX) and building a scalable system that meets job market requirements.`;

    const readmeText = `# ${project.title}\n\n## Description\n${project.desc}\n\n## Features\n${project.benefits.map(b => '- ' + b).join('\n')}\n\n## Tech Stack\n${tech}`;

    const cvText = `- Built and deployed a real-world "${project.title}" using ${tech}, improving user experience by implementing interactive workflows and responsive design.`;

    modal.innerHTML = `
        <div class="portfolio-content">
            <button class="close-portfolio" onclick="document.getElementById('portfolio-modal').classList.remove('active')">✖</button>
            <h2 style="margin-bottom: 25px; color: var(--primary);">💼 Export to Portfolio</h2>
            
            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('desc-text')">Copy</button>
                <h4>📝 Professional Description</h4>
                <div class="cv-text rtl-text" id="desc-text">${descText}</div>
            </div>

            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('readme-text')">Copy</button>
                <h4>🐙 GitHub README</h4>
                <div class="cv-text" id="readme-text">${readmeText}</div>
            </div>

            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('cv-text-val')">Copy</button>
                <h4>📄 CV Bullet Point</h4>
                <div class="cv-text" id="cv-text-val">${cvText}</div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

window.copyText = function (id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied successfully! ✅');
    });
};

// =========================================
// 🎓 New Feature 3: Smart Learning System
// =========================================

function toggleLearningMode() {
    const isPro = document.body.classList.toggle('pro-mode');
    localStorage.setItem('learning_mode', isPro ? 'pro' : 'beginner');
    const btn = document.getElementById('btn-learning-mode');
    if (btn) {
        if (isPro) {
            btn.innerHTML = '🔴 Pro Mode';
            btn.classList.add('pro');
        } else {
            btn.innerHTML = '🟢 Beginner Mode';
            btn.classList.remove('pro');
        }
    }
}

function openStarterModal(project) {
    let modal = document.getElementById('portfolio-modal'); // Reusing modal shell
    if (!modal) return;

    const path = getProjectPath(project);
    const htmlCode = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>${project.title}</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header>\n    <h1>${project.title}</h1>\n  </header>\n  <main>\n    <!-- Start working here -->\n  </main>\n  <script src="script.js"></script>\n</body>\n</html>`;

    modal.innerHTML = `
        <div class="portfolio-content">
            <button class="close-portfolio" onclick="document.getElementById('portfolio-modal').classList.remove('active')">✖</button>
            <h2 style="margin-bottom: 25px; color: #f59e0b;">🚀 Start with me (Starter Template)</h2>
            <p style="color: var(--text-dim); margin-bottom: 20px;">Use this structure as a starting point for your project to speed up development.</p>
            
            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('starter-code')">Copy</button>
                <h4>📄 index.html</h4>
                <div class="code-block" id="starter-code">${htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            </div>
            
            <a href="https://codepen.io/pen/" target="_blank" class="btn-starter" style="text-decoration: none; display: inline-flex; width: 100%;">
                ✍️ Open CodePen Editor
            </a>
        </div>
    `;
    modal.classList.add('active');
}

function openHelpModal(project, taskIndex, taskText) {
    let modal = document.getElementById('portfolio-modal');
    if (!modal) return;

    modal.innerHTML = `
        <div class="portfolio-content">
            <button class="close-portfolio" onclick="document.getElementById('portfolio-modal').classList.remove('active')">✖</button>
            <h2 style="margin-bottom: 25px; color: #3b82f6;">💡 Smart Help</h2>
            
            <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                <h4 style="color: #60a5fa; margin-bottom: 5px;">Goal of this task:</h4>
                <p style="color: #fff; font-size: 1.1rem; font-weight: bold;">${taskText}</p>
                <p style="color: var(--text-dim); font-size: 0.95rem; margin-top: 10px;">This task asks you to prepare the core components. Start with small steps and don't try to solve it all at once.</p>
            </div>

            <div class="hint-box" onclick="this.querySelector('.hint-content').style.display='block'">
                <h4 style="color: #f59e0b; margin: 0;">🔍 Hint 1 (click to reveal)</h4>
                <div class="hint-content">Think about breaking down the task. If it's about the UI, start by writing the HTML structure before thinking about colors and CSS.</div>
            </div>

            <div class="hint-box" onclick="this.querySelector('.hint-content').style.display='block'">
                <h4 style="color: #f59e0b; margin: 0;">🔍 Hint 2 (click to reveal)</h4>
                <div class="hint-content">Try using Flexbox or Grid to arrange elements easily. Remember to add a class to each element to make targeting easier.</div>
            </div>

            <div class="hint-box" onclick="this.querySelector('.hint-content').style.display='block'">
                <h4 style="color: #10b981; margin: 0;">🔧 Code Example (click to reveal)</h4>
                <div class="hint-content">
                    <div class="code-block" style="margin-top:0;">&lt;div class="container"&gt;<br>&nbsp;&nbsp;&lt;!-- Code goes here --&gt;<br>&lt;/div&gt;</div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function openFeedbackModal(project) {
    let modal = document.getElementById('portfolio-modal');
    if (!modal) return;

    modal.innerHTML = `
        <div class="portfolio-content">
            <button class="close-portfolio" onclick="document.getElementById('portfolio-modal').classList.remove('active')">✖</button>
            <h2 style="margin-bottom: 25px; color: #8b5cf6;">📊 Smart Project Evaluation</h2>
            
            <p style="color: var(--text-dim); font-size: 1.1rem; margin-bottom: 20px;">Based on the requirements of the (${project.title}) project, here is an automatic default evaluation to review your code quality:</p>
            
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
                <p style="color: #10b981; font-size: 1.1rem; margin-bottom: 15px; font-weight: bold;">✅ The concept was implemented correctly and the core logic works.</p>
                <p style="color: #f59e0b; font-size: 1.1rem; margin-bottom: 15px; font-weight: bold;">⚠️ Make sure the design is compatible with mobile screens (Responsive).</p>
                <p style="color: #ef4444; font-size: 1.1rem; font-weight: bold;">❌ Review color contrast to improve text readability.</p>
            </div>
            
            <button class="btn-start-journey" style="margin-top: 25px; width: 100%;" onclick="document.getElementById('portfolio-modal').classList.remove('active')">Thanks, I'll make the adjustments 👍</button>
        </div>
    `;
    modal.classList.add('active');
}

// Initialize learning mode
const savedMode = localStorage.getItem('learning_mode');
if (savedMode === 'pro') {
    document.body.classList.add('pro-mode');
    const btn = document.getElementById('btn-learning-mode');
    if (btn) {
        btn.innerHTML = '🔴 Pro Mode';
        btn.classList.add('pro');
    }
}

// Initialize view flow features
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    updateViewFlow();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        updateViewFlow();
    });
}
