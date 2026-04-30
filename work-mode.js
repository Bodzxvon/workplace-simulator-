const workTasksPool = [
    {
        id: 1,
        company: "Startup Tech",
        role: "Frontend Developer",
        taskTitle: "صفحة تسجيل دخول احترافية",
        difficulty: "easy",
        difficultyLabel: "🟢 سهل",
        xp: 100,
        reqs: [
            "تصميم صفحة Login كاملة",
            "Email + Password Inputs",
            "Validation (رسائل خطأ)",
            "زر تسجيل دخول",
            "Responsive Design"
        ],
        deadline: "ساعتين",
        checklist: [
            "بناء الواجهة الأساسية",
            "إضافة Validation للحقول",
            "تحسين التصميم والألوان",
            "جعلها متجاوبة Responsive"
        ],
        feedback: [
            { type: "good", text: "UI ممتاز وتجربة مستخدم جيدة." },
            { type: "bad", text: "Validation يحتاج تحسينات أكثر." }
        ],
        codeSnippet: `<!-- Login Page Structure -->
<div class="login-container">
    <h2>تسجيل الدخول</h2>
    <form id="login-form">
        <input type="email" placeholder="البريد الإلكتروني" />
        <input type="password" placeholder="كلمة المرور" />
        <button type="submit">دخول</button>
    </form>
</div>`
    },
    {
        id: 2,
        company: "E-Commerce Solutions",
        role: "UI Developer",
        taskTitle: "تصميم كارت لمنتج جديد",
        difficulty: "easy",
        difficultyLabel: "🟢 سهل",
        xp: 50,
        reqs: [
            "صورة المنتج",
            "اسم المنتج والسعر",
            "زر الإضافة للسلة",
            "تأثير Hover",
            "Responsive"
        ],
        deadline: "ساعة واحدة",
        checklist: [
            "هيكلة الـ Card",
            "إضافة صورة وتنسيقها",
            "تنسيق النصوص",
            "برمجة زر الإضافة"
        ],
        feedback: [
            { type: "good", text: "تصميم الكارت عصري وجذاب." },
            { type: "bad", text: "تأثير الـ Hover يحتاج نعومة أكثر." }
        ],
        codeSnippet: `<!-- Product Card Structure -->
<div class="product-card">
    <img src="product.jpg" alt="Product" />
    <h3>اسم المنتج</h3>
    <p>99.99$</p>
    <button>أضف للسلة</button>
</div>`
    },
    {
        id: 3,
        company: "DataCorp",
        role: "Frontend Engineer",
        taskTitle: "لوحة تحكم (Dashboard) للإحصائيات",
        difficulty: "hard",
        difficultyLabel: "🔴 صعب",
        xp: 300,
        reqs: [
            "تصميم Sidebar و Topbar",
            "عرض كروت إحصائيات",
            "إنشاء جدول بيانات",
            "Responsive Design"
        ],
        deadline: "يوم عمل",
        checklist: [
            "بناء الـ Layout الأساسي",
            "تصميم الـ Sidebar",
            "تنسيق كروت الإحصائيات",
            "إنشاء وتنسيق الجدول"
        ],
        feedback: [
            { type: "good", text: "الـ Layout ممتاز جداً ومنظم." },
            { type: "bad", text: "التجاوب في الشاشات الصغيرة يحتاج عمل أكثر." }
        ],
        codeSnippet: `<!-- Dashboard Structure -->
<div class="dashboard">
    <aside class="sidebar">الروابط</aside>
    <main class="content">
        <header class="topbar">البحث</header>
        <div class="stats-grid">...</div>
    </main>
</div>`
    },
    {
        id: 4,
        company: "AgileSoft",
        role: "Web Developer",
        taskTitle: "تطبيق إدارة مهام (To-Do)",
        difficulty: "medium",
        difficultyLabel: "🟡 متوسط",
        xp: 150,
        reqs: [
            "إضافة مهمة جديدة",
            "حذف مهمة",
            "تعليم المهمة كمكتملة",
            "حفظ في LocalStorage"
        ],
        deadline: "3 ساعات",
        checklist: [
            "هيكلة واجهة التطبيق",
            "برمجة إضافة المهمة",
            "برمجة الحذف والتحديث",
            "ربط LocalStorage"
        ],
        feedback: [
            { type: "good", text: "الوظائف الأساسية تعمل بشكل سليم." },
            { type: "bad", text: "التصميم والـ UI يحتاج أن يكون أحدث." }
        ],
        codeSnippet: `<!-- Todo App Structure -->
<div class="todo-app">
    <h2>المهام</h2>
    <input type="text" id="task-input" />
    <button id="add-btn">إضافة</button>
    <ul id="task-list"></ul>
</div>`
    }
];

let activeTasks = [];
let currentTask = null;
let refreshInterval = null;
let countdownInterval = null;
let secondsUntilRefresh = 60; // Refresh every 1 minute

function getRandomTasks(count) {
    const shuffled = [...workTasksPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function initWorkTasks() {
    activeTasks = getRandomTasks(3); // Show 3 tasks at a time
    secondsUntilRefresh = 60;
    startTaskRefreshTimer();
}

function startTaskRefreshTimer() {
    clearInterval(refreshInterval);
    clearInterval(countdownInterval);
    
    updateTimerUI();
    
    countdownInterval = setInterval(() => {
        secondsUntilRefresh--;
        updateTimerUI();
        if (secondsUntilRefresh <= 0) {
            secondsUntilRefresh = 60;
            activeTasks = getRandomTasks(3);
            if(document.getElementById('wm-task-list-container')) {
                renderTaskList();
            }
        }
    }, 1000);
}

function updateTimerUI() {
    const el = document.getElementById('wm-refresh-timer');
    if(el) {
        el.innerText = `تتحدث المهام خلال: ${secondsUntilRefresh}ث`;
    }
}

function openWorkMode() {
    initWorkTasks();
    const container = document.getElementById('work-mode-container');
    container.innerHTML = getWorkModeMainHTML();
    
    setTimeout(() => {
        const overlay = document.getElementById('wm-overlay');
        overlay.classList.add('active');
        renderTaskList();
    }, 10);
}

function closeWorkMode() {
    clearInterval(refreshInterval);
    clearInterval(countdownInterval);
    const overlay = document.getElementById('wm-overlay');
    if(overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            document.getElementById('work-mode-container').innerHTML = '';
        }, 400);
    }
}

function renderTaskList() {
    const listContainer = document.getElementById('wm-task-list-container');
    if(!listContainer) return;

    listContainer.innerHTML = activeTasks.map(task => `
        <div class="wm-task-card" onclick="selectTask(${task.id})">
            <div class="wm-tc-header">
                <span class="wm-tc-diff ${task.difficulty}">${task.difficultyLabel}</span>
                <span class="wm-tc-xp">+${task.xp} XP</span>
            </div>
            <h3 class="wm-tc-title">${task.taskTitle}</h3>
            <p class="wm-tc-company">🏢 ${task.company}</p>
        </div>
    `).join('');
}

function selectTask(taskId) {
    currentTask = activeTasks.find(t => t.id === taskId);
    document.getElementById('wm-task-list-view').style.display = 'none';
    
    const detailsContainer = document.getElementById('wm-task-details-view');
    detailsContainer.innerHTML = getTaskDetailsHTML(currentTask);
    detailsContainer.style.display = 'block';
}

function backToTaskList() {
    document.getElementById('wm-task-details-view').style.display = 'none';
    document.getElementById('wm-task-list-view').style.display = 'block';
}

function startWorkExecution() {
    document.getElementById('wm-task-details-view').style.display = 'none';
    
    const workspaceContainer = document.getElementById('wm-workspace-view');
    workspaceContainer.innerHTML = getWorkspaceHTML(currentTask);
    workspaceContainer.style.display = 'block';
    
    setupChecklistListeners();
}

function submitWorkProject() {
    const checks = document.querySelectorAll('.wm-check-item');
    const allChecked = Array.from(checks).every(item => item.classList.contains('checked'));
    
    if(!allChecked) {
        alert('الرجاء إنهاء جميع متطلبات المهمة أولاً! أنت في شركة حقيقية 🏢');
        return;
    }

    document.getElementById('wm-workspace-view').style.display = 'none';
    
    const feedbackContainer = document.getElementById('wm-feedback-view');
    feedbackContainer.innerHTML = getFeedbackHTML(currentTask);
    feedbackContainer.style.display = 'block';

    if(typeof state !== 'undefined' && typeof updateUI === 'function') {
        state.xp += currentTask.xp;
        if(typeof calcLevel === 'function') calcLevel();
        updateUI();
    }

    if(typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function nextWorkTask() {
    document.getElementById('wm-feedback-view').style.display = 'none';
    document.getElementById('wm-task-list-view').style.display = 'block';
    // Force a refresh of tasks
    secondsUntilRefresh = 60;
    activeTasks = getRandomTasks(3);
    renderTaskList();
}

function setupChecklistListeners() {
    const items = document.querySelectorAll('.wm-check-item');
    items.forEach(item => {
        item.onclick = function() {
            this.classList.toggle('checked');
        }
    });
}

function getWorkModeMainHTML() {
    return `
    <div id="wm-overlay" class="wm-overlay">
        <div class="wm-modal">
            <div class="wm-header">
                <div class="wm-header-title">
                    <span>⚔️</span> Work Environment
                </div>
                <button class="wm-close" onclick="closeWorkMode()">✖</button>
            </div>
            
            <div class="wm-body" id="wm-body">
                
                <!-- View 1: Task List -->
                <div id="wm-task-list-view">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                        <h2 style="font-size: 1.6rem; font-weight: 900; color: #fff;">المهام المتاحة الآن</h2>
                        <span id="wm-refresh-timer" style="color: var(--text-dim); font-size: 0.95rem; background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 8px;"></span>
                    </div>
                    
                    <div id="wm-task-list-container" class="wm-task-grid">
                        <!-- Rendered via JS -->
                    </div>
                </div>

                <!-- View 2: Task Details -->
                <div id="wm-task-details-view" style="display: none;"></div>

                <!-- View 3: Workspace -->
                <div id="wm-workspace-view" class="wm-workspace" style="display: none;"></div>

                <!-- View 4: Feedback -->
                <div id="wm-feedback-view" class="wm-feedback" style="display: none;"></div>

            </div>
        </div>
    </div>
    `;
}

function getTaskDetailsHTML(task) {
    return `
        <button class="wm-btn-back" onclick="backToTaskList()">🔙 عودة للمهام</button>
        <div class="wm-info-grid">
            <div class="wm-info-box">
                <h4>🏢 الشركة</h4>
                <p>${task.company}</p>
            </div>
            <div class="wm-info-box">
                <h4>👨‍💻 دورك</h4>
                <p>${task.role}</p>
            </div>
        </div>

        <div class="wm-task-box">
            <h3>📄 Task:</h3>
            <p class="wm-task-desc">${task.taskTitle}</p>
            
            <h4 style="color: var(--primary); margin-bottom: 10px;">📋 Requirements:</h4>
            <ul class="wm-reqs">
                ${task.reqs.map(req => `<li>${req}</li>`).join('')}
            </ul>
            
            <div style="margin-top: 20px;">
                <span style="color: var(--text-dim); font-weight: 700; margin-left: 10px;">⏱ Deadline:</span>
                <span class="wm-deadline">${task.deadline}</span>
            </div>
        </div>

        <button class="wm-btn-main" onclick="startWorkExecution()">👉 ابدأ التنفيذ</button>
    `;
}

function getWorkspaceHTML(task) {
    return `
        <div class="wm-editor-container">
            <div class="wm-editor-header">
                <span>index.html</span>
                <span class="lang">HTML</span>
            </div>
            <textarea class="wm-editor" spellcheck="false">${task.codeSnippet}</textarea>
        </div>

        <div class="wm-checklist">
            <h4>📌 Checklist المهمة</h4>
            ${task.checklist.map((item) => `
                <div class="wm-check-item">
                    <div class="wm-check-box"></div>
                    <span class="wm-check-text">${item}</span>
                </div>
            `).join('')}
        </div>

        <button class="wm-btn-main" onclick="submitWorkProject()">👉 سلم المشروع</button>
    `;
}

function getFeedbackHTML(task) {
    return `
        <div class="wm-feedback-icon">🔥</div>
        <h2>تم تسليم المهمة بنجاح</h2>
        <div class="wm-feedback-xp">+${task.xp} XP</div>

        <div class="wm-feedback-notes">
            <h4 style="margin-bottom: 15px; color: var(--primary);">ملاحظات الـ Tech Lead:</h4>
            ${task.feedback.map(fb => `
                <div class="wm-feedback-note ${fb.type === 'good' ? 'wm-note-good' : 'wm-note-bad'}">
                    ${fb.type === 'good' ? '✔️' : '❌'} ${fb.text}
                </div>
            `).join('')}
        </div>

        <button class="wm-btn-main" onclick="nextWorkTask()">👉 عرض مهام جديدة</button>
        <button class="wm-btn-secondary" onclick="closeWorkMode()">الخروج من وضع الشركة</button>
    `;
}
