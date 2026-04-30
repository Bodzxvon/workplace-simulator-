const PHASES_DATA = [
    {
        id: 'phase-1',
        name: 'المرحلة 1: الأساسيات',
        colorClass: 'phase-1',
        unlockReq: { type: 'none' }, // Always open
        projects: [
            {
                id: 'p3',
                title: 'بناء موقع بناء معرض أعمال احترافي (Portfolio)',
                desc: 'أنشئ موقع أو تطبيق يعرض أعمالك ومهاراتك بشكل احترافي ويجهّزك للتقديم على الوظائف أو الفريلانس.',
                diff: 'سهل',
                xp: 100,
                why: 'لأن الـ Portfolio هو أهم شيء يحدد قبولك في الوظائف أو المشاريع، وبدونه مهاراتك ما تنعرض بشكل احترافي.',
                benefits: ['بناء موقع يعكس هويتك كمطور أو مصمم',
                    'تجهيز نفسك للتقديم على وظائف أو عملاء',
                    'تطبيق تصميم UI/UX احترافي ومتجاوب'],
                phases: [
                    {
                        name: 'الهيكلة والتصميم',
                        tasks: [
                            'تحديد أقسام الموقع (عنّي، المهارات، المشاريع، تواصل)',
                            'تصميم Layout واضح وسهل التصفح (Desktop + Mobile)',
                            'إضافة Navbar احترافي مع تنقل سلس بين الأقسام'
                        ]
                    },
                    {
                        name: 'عرض المشاريع',
                        tasks: [
                            'إنشاء قسم Projects يعرض أعمالك بشكل كروت (Cards)',
                            'إضافة تفاصيل لكل مشروع (وصف + التقنيات + رابط)',
                            'تحسين شكل العرض باستخدام Hover Effects أو Animations'
                        ]
                    },
                    {
                        name: 'التفاعل والتحسين',
                        tasks: [
                            'إضافة نموذج تواصل (Contact Form)',
                            'جعل الموقع Responsive بالكامل لجميع الأجهزة',
                            'تحسين الأداء وتجربة المستخدم (سرعة + وضوح)'
                        ]
                    }
                ]
            },
            {
                id: 'p12',
                title: ' متجر إلكتروني (E-commerce)',
                desc: 'بناء الهيكل الأساسي لمتجر إلكتروني احترافي قابل للتطوير مستقبلاً.',
                diff: 'سهل',
                xp: 100,
                why: 'لأن المتاجر الإلكترونية من أكثر المشاريع المطلوبة في السوق، وهذا المشروع يعطيك أساس قوي لأي مشروع تجاري.',
                benefits: [
                    'فهم هيكلة المتاجر الإلكترونية',
                    'بناء صفحات مترابطة بشكل احترافي',
                    'تجهيز نفسك لمشاريع حقيقية أو فريلانس'
                ],
                phases: [
                    {
                        name: 'تخطيط وهيكلة الصفحات',
                        tasks: [
                            'تحديد صفحات المتجر (الرئيسية – المنتجات – تفاصيل المنتج – السلة)',
                            'رسم Layout بسيط لكل صفحة',
                            'تحديد مسار المستخدم داخل المتجر (User Flow)'
                        ]
                    },
                    {
                        name: 'بناء الواجهة الأساسية',
                        tasks: [
                            'بناء Navbar يحتوي على (Logo – روابط – سلة)',
                            'تصميم الصفحة الرئيسية (Hero + منتجات مميزة)',
                            'إنشاء Footer يحتوي معلومات المتجر'
                        ]
                    },
                    {
                        name: 'عرض المنتجات',
                        tasks: [
                            'إنشاء كروت المنتجات (صورة – اسم – سعر)',
                            'بناء صفحة تفاصيل المنتج',
                            'إضافة زر "إضافة للسلة"'
                        ]
                    },
                    {
                        name: 'السلة والتفاعل',
                        tasks: [
                            'بناء صفحة السلة',
                            'إضافة المنتجات إلى السلة باستخدام LocalStorage',
                            'تحديث الكمية وحذف المنتج من السلة'
                        ]
                    }
                ]
            },
            {
                id: 'p10',
                title: 'Dashboard (لوحة تحكم)',
                desc: 'بناء لوحة تحكم احترافية لعرض البيانات والإحصائيات بطريقة واضحة وتفاعلية.',
                diff: 'متوسط',
                xp: 100,
                why: 'لأن لوحات التحكم هي أساس أغلب الأنظمة في الشركات، وتعلمك كيف تعرض البيانات بشكل مفيد وسهل.',
                benefits: [
                    'عرض البيانات بطريقة منظمة وواضحة',
                    'التعامل مع Charts و Tables',
                    'بناء واجهات تستخدم في الأنظمة الحقيقية'
                ],
                phases: [
                    {
                        name: 'تخطيط وهيكلة الداشبورد',
                        tasks: [
                            'تحديد أقسام الداشبورد (Sidebar – Topbar – المحتوى)',
                            'تصميم Layout عام للصفحة',
                            'تجهيز مكان عرض الإحصائيات'
                        ]
                    },
                    {
                        name: 'بناء الواجهة الأساسية',
                        tasks: [
                            'إنشاء Sidebar يحتوي على روابط التنقل',
                            'بناء Topbar يحتوي على عنوان وإشعارات',
                            'تصميم Cards لعرض الأرقام (إجمالي المستخدمين – المبيعات)'
                        ]
                    },
                    {
                        name: 'عرض البيانات',
                        tasks: [
                            'إضافة جدول بيانات (Table)',
                            'عرض قائمة بيانات (مثل مستخدمين أو طلبات)',
                            'تنسيق البيانات بشكل واضح'
                        ]
                    },
                    {
                        name: 'التفاعل والتحسين',
                        tasks: [
                            'إضافة Charts (Line أو Bar)',
                            'تحسين Responsive للداشبورد',
                            'تحسين تجربة المستخدم (Spacing – ألوان – وضوح)'
                        ]
                    }
                ]
            },
            {
                id: 'p10',
                title: 'منظّم أهدافك بالذكاء الاصطناعي',
                desc: 'نظام ذكي يحوّل أهداف المستخدم إلى خطة مهام واضحة وقابلة للتنفيذ.',
                diff: 'متوسط',
                xp: 100,
                why: 'لأن الناس غالبًا تضيع بدون خطة واضحة، وهذا المشروع يعلمك كيف تبني منتج يحول الهدف إلى خطوات عملية باستخدام الذكاء.',
                benefits: [
                    'تحويل الأهداف إلى مهام منظمة تلقائيًا',
                    'التعامل مع مدخلات المستخدم وتحليلها',
                    'بناء تجربة ذكية تساعد المستخدم فعليًا'
                ],
                phases: [
                    {
                        name: 'إدخال الهدف وتحليله',
                        tasks: [
                            'بناء حقل إدخال يكتب فيه المستخدم هدفه',
                            'معالجة النص وتحليله (تقسيمه لفكرة قابلة للتنفيذ)',
                            'تحديد نوع الهدف (تعلم – مشروع – بزنس)'
                        ]
                    },
                    {
                        name: 'توليد الخطة',
                        tasks: [
                            'تحويل الهدف إلى قائمة مهام (Tasks)',
                            'تقسيم المهام إلى مراحل (أساسيات – تنفيذ – إتقان)',
                            'عرض الخطة بشكل واضح للمستخدم'
                        ]
                    },
                    {
                        name: 'إدارة المهام',
                        tasks: [
                            'إضافة ToDo List للمستخدم',
                            'تحديد المهام كمكتملة أو غير مكتملة',
                            'حفظ التقدم باستخدام LocalStorage'
                        ]
                    },
                    {
                        name: 'التجربة الذكية',
                        tasks: [
                            'اقتراح مهام إضافية بناءً على الهدف',
                            'إظهار تقدم المستخدم (Progress)',
                            'تحسين تجربة المستخدم (سهولة – وضوح – تفاعل)'
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'phase-2',
        name: 'المرحلة 2: مشاريع متوسطة',
        colorClass: 'phase-2',
        unlockReq: { type: 'none' },
        projects: [
            {
                id: 'p2',
                title: 'متتبع المصروفات',
                desc: 'بناء نظام يساعد المستخدم على تسجيل مصروفاته وتحليلها بطريقة واضحة.',
                diff: 'متوسط',
                xp: 100,
                why: 'لأن إدارة المصروفات من أكثر المشاكل اليومية، وهذا المشروع يعلمك كيف تبني أداة مفيدة فعليًا للمستخدم.',
                benefits: [
                    'التعامل مع مدخلات المستخدم وتخزينها',
                    'بناء نظام CRUD (إضافة – حذف – تعديل)',
                    'عرض البيانات بشكل بسيط وواضح'
                ],
                phases: [
                    {
                        name: 'إدخال البيانات',
                        tasks: [
                            'بناء نموذج إدخال (المبلغ – الفئة – التاريخ)',
                            'إضافة زر لحفظ المصروف',
                            'التحقق من صحة البيانات قبل الحفظ'
                        ]
                    },
                    {
                        name: 'حفظ وإدارة البيانات',
                        tasks: [
                            'تخزين البيانات باستخدام LocalStorage',
                            'عرض قائمة المصروفات للمستخدم',
                            'إضافة إمكانية حذف المصروف'
                        ]
                    },
                    {
                        name: 'العرض والتحليل',
                        tasks: [
                            'عرض إجمالي المصروفات',
                            'تصنيف المصروفات حسب الفئة',
                            'إظهار ملخص بسيط (كم صرفت اليوم أو هذا الشهر)'
                        ]
                    },
                    {
                        name: 'تحسين التجربة',
                        tasks: [
                            'تحسين تصميم الواجهة (UI)',
                            'جعل التطبيق Responsive',
                            'تحسين تجربة المستخدم (سهولة الاستخدام)'
                        ]
                    }
                ]
            },
            {
                id: 'p6',
                title: 'تطبيق حجز مواعيد',
                desc: 'نظام يسمح للمستخدم بحجز المواعيد وإدارتها بطريقة سهلة ومنظمة.',
                diff: 'متوسط',
                xp: 100,
                why: 'لأن أنظمة الحجز تُستخدم في العيادات والصالونات والشركات، وهذا المشروع يعطيك خبرة في بناء نظام يخدم عملاء حقيقيين.',
                benefits: [
                    'إدارة الوقت والمواعيد بشكل منظم',
                    'التعامل مع مدخلات المستخدم والتواريخ',
                    'بناء نظام عملي يستخدم في الواقع'
                ],
                phases: [
                    {
                        name: 'إدخال البيانات',
                        tasks: [
                            'بناء نموذج إدخال (الاسم – التاريخ – الوقت)',
                            'إضافة زر لحجز الموعد',
                            'التحقق من صحة البيانات قبل الحفظ'
                        ]
                    },
                    {
                        name: 'إدارة المواعيد',
                        tasks: [
                            'عرض قائمة المواعيد المحجوزة',
                            'تخزين البيانات باستخدام LocalStorage',
                            'إضافة إمكانية حذف الموعد'
                        ]
                    },
                    {
                        name: 'تنظيم الوقت',
                        tasks: [
                            'منع تكرار نفس الموعد (Validation)',
                            'ترتيب المواعيد حسب التاريخ',
                            'عرض المواعيد القادمة فقط'
                        ]
                    },
                    {
                        name: 'تحسين التجربة',
                        tasks: [
                            'تحسين تصميم الواجهة (UI)',
                            'جعل التطبيق Responsive',
                            'تحسين تجربة المستخدم (سهولة الحجز)'
                        ]
                    }
                ]
            },

        ]
    },
    {
        id: 'phase-3',
        name: 'المرحلة 3: مشاريع متقدمة',
        colorClass: 'phase-3',
        unlockReq: { type: 'none' },
        projects: [
            {
                id: 'p4',
                title: 'تطبيق دردشة فورية',
                desc: 'تطبيق يتيح للمستخدمين إرسال واستقبال الرسائل بشكل مباشر (لحظي) مثل واتساب.',
                diff: 'صعب',
                xp: 200,
                why: 'لأن أنظمة الدردشة تستخدم في أغلب التطبيقات الحديثة، وهذا المشروع يعلمك كيف تتعامل مع التحديث المباشر للبيانات بدون إعادة تحميل الصفحة.',
                benefits: [
                    'فهم الاتصال اللحظي (Realtime)',
                    'إدارة الرسائل بشكل مباشر داخل الواجهة',
                    'بناء تجربة مستخدم مشابهة لتطبيقات التواصل'
                ],
                phases: [
                    {
                        name: 'بناء واجهة المحادثة',
                        tasks: [
                            'تصميم شاشة المحادثة (رسائل – حقل إدخال – زر إرسال)',
                            'عرض الرسائل بشكل مرتب (يمين / يسار)',
                            'إضافة Scroll تلقائي لآخر رسالة'
                        ]
                    },
                    {
                        name: 'إرسال واستقبال الرسائل',
                        tasks: [
                            'ربط الواجهة مع WebSocket أو أي API',
                            'إرسال الرسالة وعرضها مباشرة',
                            'استقبال الرسائل من مستخدم آخر بدون تحديث الصفحة'
                        ]
                    },
                    {
                        name: 'تنظيم المحادثة',
                        tasks: [
                            'إضافة اسم المستخدم لكل رسالة',
                            'عرض وقت إرسال الرسالة',
                            'تنظيم الرسائل داخل Bubble UI'
                        ]
                    },
                    {
                        name: 'تحسين التجربة',
                        tasks: [
                            'تحسين تصميم الواجهة (UI)',
                            'جعل التطبيق Responsive للجوال',
                            'تحسين تجربة المستخدم (سهولة وسرعة)'
                        ]
                    }
                ]
            }

        ]
    },
    {
        id: 'phase-4',
        name: 'المرحلة 4: جاهز لسوق العمل',
        colorClass: 'phase-4',
        unlockReq: { type: 'none' },
        projects: [
            {
                id: 'p20',
                title: 'تطبيق توصيل (Delivery App)',
                desc: 'بناء تطبيق توصيل يتيح للمستخدم طلب المنتجات وتتبع الطلب بشكل مباشر.',
                diff: 'متقدم',
                xp: 150,
                why: 'لأن تطبيقات التوصيل من أكثر المنتجات استخدامًا في السوق، وهذا المشروع يثبت قدرتك على بناء نظام متكامل يخدم عملاء حقيقيين.',
                benefits: [
                    'بناء نظام متكامل (عميل + طلب + حالة)',
                    'إدارة الطلبات وتتبعها',
                    'محاكاة تطبيقات حقيقية في السوق'
                ],
                phases: [
                    {
                        name: 'واجهة المستخدم (Customer App)',
                        tasks: [
                            'بناء الصفحة الرئيسية (مطاعم أو متاجر)',
                            'عرض قائمة المنتجات داخل المتجر',
                            'بناء صفحة تفاصيل المنتج مع زر الطلب'
                        ]
                    },
                    {
                        name: 'إدارة الطلب',
                        tasks: [
                            'إضافة المنتجات إلى السلة',
                            'بناء صفحة السلة (Cart)',
                            'تأكيد الطلب (Checkout Simulation)'
                        ]
                    },
                    {
                        name: 'تتبع الطلب',
                        tasks: [
                            'إظهار حالة الطلب (قيد التحضير – في الطريق – تم التوصيل)',
                            'تحديث الحالة بشكل ديناميكي',
                            'عرض تفاصيل الطلب للمستخدم'
                        ]
                    },
                    {
                        name: 'لوحة الإدارة (Admin)',
                        tasks: [
                            'عرض جميع الطلبات في لوحة تحكم',
                            'تغيير حالة الطلب من لوحة الإدارة',
                            'إضافة / حذف منتجات من المتجر'
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
    { id: 'dm1', title: 'بناء صفحة تسجيل/دخول كاملة مع Validation وربطها بـ API حقيقي' },

    { id: 'dm2', title: 'تطوير صفحة منتجات لمتجر إلكتروني مع فلترة (سعر / تصنيف) + Pagination' },

    { id: 'dm3', title: 'بناء Dashboard تعرض إحصائيات (مبيعات / مستخدمين) باستخدام Charts وربط API' },

    { id: 'dm4', title: 'تنفيذ نظام سلة مشتريات كامل (إضافة / حذف / تحديث الكمية) مع LocalStorage أو Backend' },

    { id: 'dm5', title: 'بناء صفحة Profile للمستخدم مع تعديل البيانات ورفع صورة شخصية' },

    { id: 'dm6', title: 'تطوير صفحة تفاصيل منتج (Product Page) مع صور + تقييمات + منتجات مشابهة' },

    { id: 'dm7', title: 'بناء نظام إشعارات (Notifications UI) يظهر تحديثات فورية للمستخدم' },

    { id: 'dm8', title: 'تحليل Dataset حقيقية (CSV) وعرض النتائج في Dashboard تفاعلي' },

    { id: 'dm9', title: 'بناء Landing Page لمنتج SaaS بهدف التحويل (Conversion) مع CTA واضح' },

    { id: 'dm10', title: 'تنفيذ نظام صلاحيات (Roles) يفرق بين Admin و User في الواجهة' }
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

    // 🔥 تغيير المهمة كل دقيقة
    changeInterval = setInterval(() => {
        pickRandomMission();
        startTimer();
    }, 60000);

    calcLevel();
    updateUI();
    renderRoadmap();
}

// اختيار مهمة عشوائية
function pickRandomMission() {
    const randomMission = DAILY_MISSIONS[Math.floor(Math.random() * DAILY_MISSIONS.length)];

    state.currentMissionId = randomMission.id;
    state.dailyMissionDone = false;

    currentDailyMission = randomMission;

    updateUI();
    localStorage.setItem('skill_journey_state', JSON.stringify(state));
}

// تايمر العد التنازلي
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

// تحديث التايمر في الواجهة
function updateTimerUI() {
    const el = document.getElementById('dm-timer');
    if (el) {
        el.innerText = `تتغير خلال ${timeLeft} ث`;
    }
}

// 👇 دالة اختيار مهمة عشوائية
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

    document.getElementById('proj-progress-text').innerText = `أنجزت ${completedCount} / ${totalProjects} مشاريع`;
    document.getElementById('overall-prog-bar').style.width = `${(completedCount / totalProjects) * 100}%`;

    // Next unlock hint (removed as all phases are unlocked)
    document.getElementById('unlock-progress-text').innerText = 'جميع المراحل مفتوحة الآن 🚀';

    // Daily mission UI
    const dmXp = getDailyMissionXp();
    document.getElementById('dm-text').innerText = currentDailyMission.title;
    document.querySelector('.dm-xp').innerText = `+${dmXp} XP`;
    const dmBtn = document.getElementById('btn-dm-start');
    if (state.dailyMissionDone) {
        dmBtn.innerText = 'تم إنجاز المهمة ✅';
        dmBtn.style.background = 'var(--accent)';
        dmBtn.disabled = true;
    } else {
        dmBtn.innerText = 'ابدأ المهمة الآن';
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
        let stepText = 'أنت مبدع! لقد فتحت كل مسارات العمل. استمر في تنفيذ المشاريع المتاحة.';
        if (state.completedProjects.length < 3) stepText = `باقي لك ${3 - state.completedProjects.length} مشروع فقط لفتح المرحلة الثانية (مشاريع بسيطة). استمر!`;
        else if (state.xp < 800) stepText = `اجمع ${800 - state.xp} XP إضافية عبر تنفيذ مهام اليوم لتفتح مشاريع المرحلة الثالثة.`;
        else if (state.level < 5) stepText = `ارفع مستواك إلى Level 5 لتفتح مشاريع المرحلة المتقدمة (جاهز لسوق العمل).`;
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
            recEl.innerText = `ننصحك بالبدء بـ (${recommendedProject.title}) لأنه يتناسب تماماً مع مستواك وخبرتك الحالية المكتسبة.`;
            recBtn.style.display = 'block';
            recBtn.onclick = () => {
                // Focus on the recommendation
                const card = document.querySelector(`.project-card h3`); // just trigger openProject on it
                openProject(recommendedProject, false);
            };
        } else {
            recEl.innerText = 'لقد أنهيت جميع المشاريع المتاحة في المسار الحالي! أنت أسطورة 🔥.';
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

            // ✅ نحسب عدد المهام داخل المشروع
            const totalTasks = p.phases.reduce((acc, ph) => acc + ph.tasks.length, 0);

            // ✅ هل المشروع مكتمل؟
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
                        🧠 ليش تسوي المشروع؟
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 12px;">
                        ${p.why}
                    </p>
                    
                    <div style="font-weight: 800; color: var(--primary); margin-bottom: 5px; font-size: 0.95rem;">
                        🎯 وش راح تستفيد؟
                    </div>
                    <ul style="list-style-type: disc; margin-right: 20px; font-size: 0.85rem; color: var(--text-dim);">
                        ${p.benefits.map(b => `<li style="margin-bottom: 3px;">${b}</li>`).join('')}
                    </ul>
                </div>

                <div class="card-footer">
                    <span class="difficulty">${p.diff}</span>
                    
                    <span class="xp-val">
                        ${isDone
                    ? 'مكتمل ✅'
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
    if (phase.id === 'phase-1') modeText = '💡 Guided Mode: ابدأ معي خطوة بخطوة';
    else if (phase.id === 'phase-2') modeText = '⚔️ Challenge Mode: عندك مشروع… نفّذه بطريقتك';
    else if (phase.id === 'phase-3') modeText = '🏢 Work Environment: المهام (To Do / Done)';
    else if (phase.id === 'phase-4') modeText = '💼 Client Request: رسالة من العميل';

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
        clientMsg.innerHTML = `<h4 style="color: var(--accent); margin-bottom: 10px;">📩 رسالة جديدة من العميل:</h4>
        <p style="color: var(--text-dim); font-size: 1.1rem; line-height: 1.8;">"أهلاً، نحتاج منك بناء وتطوير (${project.title}). المتطلبات واضحة لكن التنفيذ يعتمد على خبرتك. نتوقع استلام عمل متكامل. تفضل التفاصيل بالأسفل."</p>`;
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
        todoSection.innerHTML = `<div class="phase-header" style="color: #f59e0b;">📋 To Do (المهام المطلوبة)</div>`;
        doneSection.innerHTML = `<div class="phase-header" style="color: var(--accent);">✅ Done (المهام المنجزة)</div>`;
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
        btn.innerText = '🔥 أنت خلصت المرحلة';
        btn.disabled = true;
        btn.onclick = () => finishProject(project);
        content.appendChild(btn);
    } else {
        const tweetText = encodeURIComponent(`أنجزت مشروع "${project.title}" 🔥 وأطوّر نفسي يوميًا 🚀 #هاش_بلس`);
        const twitterBtn = document.createElement('button');
        twitterBtn.className = 'btn-twitter';
        twitterBtn.innerHTML = `🚀 شارك إنجازك`;
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
                <textarea id="input-${taskId}" placeholder="اكتب كيف راح تنفذ المهمة..." style="width: 100%; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.3); border: 1px solid var(--border); color: white; resize: vertical; min-height: 80px; font-family: Cairo; font-size: 0.95rem;">${savedNote}</textarea>
                <button onclick="saveTaskInteractive('${taskId}', '${projId}', '${phaseId}')" class="btn-dm" style="margin-top: 10px; padding: 8px 20px;">حفظ</button>
            </div>
        `;
    } else if (savedNote) {
        taskHTML += `
            <div style="margin-top: 10px; margin-right: 48px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; font-size: 0.9rem; color: var(--text-dim); cursor: pointer;" onclick="toggleTaskOnly('${taskId}', '${projId}', '${phaseId}')">
                📝 ملاحظتك: ${savedNote}
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
        msg.innerText = '👍 ممتاز، تم الحفظ بنجاح';
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
        triggerMomentOfSuccess(300, nextLevel, '🔥 مبروك! أنهيت المرحلة!');
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
    triggerMomentOfSuccess(dmXp, state.level > oldLevel ? state.level : null, 'مهمة اليوم أُنجزت!');
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
        descEl.innerText = `وصلت Level ${newLevel}! 🔥`;
        fireConfetti();
    } else {
        descEl.innerText = 'أحسنت الاستمرار! 🚀';
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
    if (confirm("هل أنت متأكد أنك تريد تصفير النقاط والـ XP بالكامل؟")) {
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
    if (title.includes('معرض') || title.includes('E-commerce') || title.includes('دردشة')) return 'frontend';
    if (title.includes('Dashboard') || title.includes('مصروفات') || title.includes('بيانات')) return 'data';
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
                <span>${prog.completedInPath} / ${prog.pathProjects} مشاريع</span>
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
        backBtn.innerHTML = '🔙 رجوع للمسارات';
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

    // Feature 2: "ابدأ معي" (Starter Template)
    const topSection = document.querySelector('.drawer-top');
    if (topSection && !document.getElementById('btn-starter-template')) {
        const starterBtn = document.createElement('button');
        starterBtn.id = 'btn-starter-template';
        starterBtn.className = 'btn-starter';
        starterBtn.innerHTML = '🚀 ابدأ معي (Starter Template)';
        starterBtn.onclick = () => openStarterModal(project);
        topSection.appendChild(starterBtn);
    }

    const tasks = content.querySelectorAll('.task-item');
    tasks.forEach((taskEl, index) => {
        const helpBtn = document.createElement('button');
        helpBtn.className = 'btn-help beginner-only';
        helpBtn.innerHTML = '💡 ما عرفت؟ ساعدني';
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
        btnFeed.innerHTML = '📊 قيّم شغلي';
        btnFeed.onclick = () => openFeedbackModal(project);
        content.appendChild(btnFeed);

        // Portfolio Button
        const btnPort = document.createElement('button');
        btnPort.className = 'btn-finish';
        btnPort.style.background = 'linear-gradient(to right, #10b981, #059669)';
        btnPort.style.marginTop = '15px';
        btnPort.innerHTML = '💼 حوّل إلى Portfolio / CV';
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

    const descText = `قمت ببناء تطبيق (${project.title}) الذي يتيح للمستخدمين ${project.desc} تم تطوير هذا المشروع للتركيز على تجربة المستخدم (UX) وبناء نظام قابل للتطوير يعكس متطلبات سوق العمل.`;

    const readmeText = `# ${project.title}\n\n## Description\n${project.desc}\n\n## Features\n${project.benefits.map(b => '- ' + b).join('\n')}\n\n## Tech Stack\n${tech}`;

    const cvText = `- Built and deployed a real-world "${project.title}" using ${tech}, improving user experience by implementing interactive workflows and responsive design.`;

    modal.innerHTML = `
        <div class="portfolio-content">
            <button class="close-portfolio" onclick="document.getElementById('portfolio-modal').classList.remove('active')">✖</button>
            <h2 style="margin-bottom: 25px; color: var(--primary);">💼 تصدير إلى Portfolio</h2>
            
            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('desc-text')">نسخ</button>
                <h4>📝 وصف احترافي (Description)</h4>
                <div class="cv-text rtl-text" id="desc-text">${descText}</div>
            </div>

            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('readme-text')">نسخ</button>
                <h4>🐙 GitHub README</h4>
                <div class="cv-text" id="readme-text">${readmeText}</div>
            </div>

            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('cv-text-val')">نسخ</button>
                <h4>📄 نقطة للسيرة الذاتية (CV Bullet)</h4>
                <div class="cv-text" id="cv-text-val">${cvText}</div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

window.copyText = function (id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('تم النسخ بنجاح! ✅');
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
    const htmlCode = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>${project.title}</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header>\n    <h1>${project.title}</h1>\n  </header>\n  <main>\n    <!-- ابدأ العمل هنا -->\n  </main>\n  <script src="script.js"></script>\n</body>\n</html>`;

    modal.innerHTML = `
        <div class="portfolio-content">
            <button class="close-portfolio" onclick="document.getElementById('portfolio-modal').classList.remove('active')">✖</button>
            <h2 style="margin-bottom: 25px; color: #f59e0b;">🚀 ابدأ معي (Starter Template)</h2>
            <p style="color: var(--text-dim); margin-bottom: 20px;">استخدم هذا الهيكل كبداية لمشروعك لتسريع العمل.</p>
            
            <div class="cv-section">
                <button class="btn-copy" onclick="copyText('starter-code')">نسخ</button>
                <h4>📄 index.html</h4>
                <div class="code-block" id="starter-code">${htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            </div>
            
            <a href="https://codepen.io/pen/" target="_blank" class="btn-starter" style="text-decoration: none; display: inline-flex; width: 100%;">
                ✍️ افتح محرر CodePen
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
            <h2 style="margin-bottom: 25px; color: #3b82f6;">💡 مساعدة ذكية</h2>
            
            <div style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                <h4 style="color: #60a5fa; margin-bottom: 5px;">الهدف من هذه المهمة:</h4>
                <p style="color: #fff; font-size: 1.1rem; font-weight: bold;">${taskText}</p>
                <p style="color: var(--text-dim); font-size: 0.95rem; margin-top: 10px;">هذه المهمة تطلب منك تجهيز المكونات الأساسية. ابدأ بخطوات صغيرة ولا تحاول حلها دفعة واحدة.</p>
            </div>

            <div class="hint-box" onclick="this.querySelector('.hint-content').style.display='block'">
                <h4 style="color: #f59e0b; margin: 0;">🔍 تلميح 1 (اضغط للفتح)</h4>
                <div class="hint-content">فكر في تقسيم المهمة. إذا كانت عن الواجهة، ابدأ بكتابة هيكل الـ HTML قبل التفكير بالألوان والـ CSS.</div>
            </div>

            <div class="hint-box" onclick="this.querySelector('.hint-content').style.display='block'">
                <h4 style="color: #f59e0b; margin: 0;">🔍 تلميح 2 (اضغط للفتح)</h4>
                <div class="hint-content">حاول استخدام Flexbox أو Grid لترتيب العناصر بسهولة. تذكر أن تضيف class لكل عنصر لتسهيل استهدافه.</div>
            </div>

            <div class="hint-box" onclick="this.querySelector('.hint-content').style.display='block'">
                <h4 style="color: #10b981; margin: 0;">🔧 مثال برمجي (اضغط للفتح)</h4>
                <div class="hint-content">
                    <div class="code-block" style="margin-top:0;">&lt;div class="container"&gt;<br>&nbsp;&nbsp;&lt;!-- الكود يوضع هنا --&gt;<br>&lt;/div&gt;</div>
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
            <h2 style="margin-bottom: 25px; color: #8b5cf6;">📊 تقييم المشروع الذكي</h2>
            
            <p style="color: var(--text-dim); font-size: 1.1rem; margin-bottom: 20px;">بناءً على متطلبات مشروع (${project.title})، إليك هذا التقييم التلقائي الافتراضي لمراجعة جودة كودك:</p>
            
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
                <p style="color: #10b981; font-size: 1.1rem; margin-bottom: 15px; font-weight: bold;">✅ الفكرة تم تطبيقها بشكل صحيح والمنطق الأساسي يعمل.</p>
                <p style="color: #f59e0b; font-size: 1.1rem; margin-bottom: 15px; font-weight: bold;">⚠️ تأكد من توافق التصميم مع شاشات الجوال (Responsive).</p>
                <p style="color: #ef4444; font-size: 1.1rem; font-weight: bold;">❌ قم بمراجعة تباين الألوان لتحسين قراءة النصوص.</p>
            </div>
            
            <button class="btn-start-journey" style="margin-top: 25px; width: 100%;" onclick="document.getElementById('portfolio-modal').classList.remove('active')">شكراً، سأقوم بالتعديل 👍</button>
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
