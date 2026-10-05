/**
 * روتين أسماء اليومي والأسري - Asmaa's Daily & Family Routine App
 * Complete Application Logic
 */

// Storage Key
const STORAGE_KEY = 'asmaa_routine_planner_data_v1';

// Days of Week configuration in Arabic
const DAYS_OF_WEEK = [
  { id: 'sat', name: 'السبت', short: 'سبت' },
  { id: 'sun', name: 'الأحد', short: 'أحد' },
  { id: 'mon', name: 'الاثنين', short: 'اثنين' },
  { id: 'tue', name: 'الثلاثاء', short: 'ثلاثاء' },
  { id: 'wed', name: 'الأربعاء', short: 'أربعاء' },
  { id: 'thu', name: 'الخميس', short: 'خميس' },
  { id: 'fri', name: 'الجمعة', short: 'جمعة' },
];

// Encouraging Quotes for Asmaa
const ENCOURAGING_QUOTES = [
  "أنتِ عماد البيت ودفئه.. خذي يومك خطوة بخطوة بكل لطف 🌿",
  "يومك مبارك يا أسماء.. أنجزتِ ما استطعتِ وهذا بحد ذاته عظيم ✨",
  "لا تقسي على نفسكِ؛ سلامكِ النفسي وراحتكِ هما سر سعادة البيت 🌸",
  "بداية هادئة ونفس عميق.. كل عمل تقدمينه لأسرتكِ مأجورة عليه ومبارك 🕊️",
  "المرونة راحة.. ما فات اليوم يمكن عمله غداً بابتسامة وهدوء 🤍",
  "لحظة عناية بنفسك ليست رفاهية، بل طاقة تجددين بها عطاءك ☕"
];

// Realistic Pre-populated Initial Routine for Asmaa
function getDefaultData() {
  const todayDateStr = new Date().toISOString().split('T')[0];

  return {
    quranSession: {
      startTime: '06:00',
      duration: 60,
      repeatDays: ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'],
      reminder: true,
      completedDates: {} // 'YYYY-MM-DD': true
    },
    activities: [
      {
        id: 'act-1',
        title: 'جلسة القرآن الكريم وتدبر الصباح',
        category: 'quran',
        date: todayDateStr,
        time: '06:00',
        duration: 60,
        repeat: 'daily',
        reminder: true,
        completed: false,
        notes: 'ساعة خاصة بالسكينة وقراءة ورد جزء اليوم'
      },
      {
        id: 'act-2',
        title: 'تجهيز لانش بوكس سليم وإفطار الصباح',
        category: 'saleem',
        date: todayDateStr,
        time: '07:10',
        duration: 30,
        repeat: 'daily',
        reminder: true,
        completed: false,
        notes: 'ساندوتش جبن كيري، خيار مقطع، عصير وتمر'
      },
      {
        id: 'act-3',
        title: 'ترتيب أسطح المطبخ وتهوية الصالة',
        category: 'cleaning',
        date: todayDateStr,
        time: '08:30',
        duration: 25,
        repeat: 'daily',
        reminder: false,
        completed: false,
        notes: 'تشغيل البخور وفتح النوافذ لتجديد هواء المنزل'
      },
      {
        id: 'act-4',
        title: 'فنجان قهوة الصباح وقراءة هادئة',
        category: 'selfcare',
        date: todayDateStr,
        time: '09:30',
        duration: 30,
        repeat: 'daily',
        reminder: false,
        completed: false,
        notes: 'وقت هادئ بدون هاتف'
      },
      {
        id: 'act-5',
        title: 'تحضير تتبيلة وجبة غداء العائلة',
        category: 'meals',
        date: todayDateStr,
        time: '12:30',
        duration: 45,
        repeat: 'daily',
        reminder: true,
        completed: false,
        notes: 'تجهيز صينية الدجاج بالخضار والأرز بالشعرية'
      },
      {
        id: 'act-6',
        title: 'تجهيز عشاء مراد الخفيف',
        category: 'murad',
        date: todayDateStr,
        time: '19:45',
        duration: 25,
        repeat: 'daily',
        reminder: true,
        completed: false,
        notes: 'أومليت بالخضار مع سلطة خضراء طازجة وخبز نخالة'
      },
      {
        id: 'act-7',
        title: 'روتين الترطيب والمساء الهادئ',
        category: 'selfcare',
        date: todayDateStr,
        time: '21:30',
        duration: 20,
        repeat: 'daily',
        reminder: true,
        completed: false,
        notes: 'غسول الوجه وترطيب اليدين والقدمين'
      }
    ],
    cleaningTasks: [
      { id: 'c-1', title: 'غسيل الصحون وترتيب حوض المطبخ', room: 'kitchen', freq: 'daily', duration: 20, done: false },
      { id: 'c-2', title: 'مسح أسطح الرخام وموقد الغاز', room: 'kitchen', freq: 'daily', duration: 15, done: false },
      { id: 'c-3', title: 'تنظيف الحمام وتعقيمه الدوري', room: 'bathrooms', freq: 'alternate', duration: 20, done: false },
      { id: 'c-4', title: 'ترتيب وتنسيق غرف النوم والأسرة', room: 'bedrooms', freq: 'daily', duration: 10, done: false },
      { id: 'c-5', title: 'تبديل شراشف السرير وأكياس المخدات', room: 'bedrooms', freq: 'weekly', duration: 30, done: false },
      { id: 'c-6', title: 'كنس ومسح أرضية الصالة والمعيشة', room: 'living', freq: 'alternate', duration: 25, done: false },
      { id: 'c-7', title: 'تشغيل دورة غسيل الملابس الملونة', room: 'laundry', freq: 'weekly', duration: 30, done: false },
      { id: 'c-8', title: 'طي الملابس وترتيبها بالخزائن', room: 'laundry', freq: 'weekly', duration: 25, done: false },
      { id: 'c-9', title: 'تنظيف الثلاجة وترتيب الأرفف', room: 'kitchen', freq: 'weekly', duration: 40, done: false }
    ],
    weeklyMeals: {
      sat: {
        family: { title: 'صينية دجاج بالبطاطس وأرز بسمتي', ingredients: 'دجاج مقطع، بطاطس، بصل، بهارات مشكلة، أرز بسمتي، سمنة', notes: 'تتبيل الدجاج قبل الطهي بساعة' },
        saleem: { title: 'ساندوتش بانكيك صغير + شرائح تفاح', ingredients: 'مزيج بانكيك، حليب، بيض، تفاح، عسل طبيعي', notes: 'تقطيع التفاح ورشه بنقاط ليمون ليبقى طازجاً' },
        murad: { title: 'سلطة سيزر بالدجاج المشوي', ingredients: 'خس، صدر دجاج مشوي، خبز محمص، صوص زبادي', notes: 'صوص خفيف بدون مايونيز كثير' }
      },
      sun: {
        family: { title: 'ملوخية خضراء مع أرز بالشعرية ودجاج مسلوق', ingredients: 'ملوخية طازجة أو مجمدة، ثوم، كزبرة، دجاج، أرز، شعرية', notes: 'طشة الثوم والكزبرة قبل التقديم مباشرة' },
        saleem: { title: 'ساندوتش جبنة شيدر + جزر وخيار أصابع', ingredients: 'خبز صامولي، جبنة شيدر، خيار، جزر صغير', notes: 'وضع بسكويت شوفان صحي معه' },
        murad: { title: 'بيض عيون مع جبنة حلوم مشوية وزيتون', ingredients: 'بيض، جبنة حلوم، زيت زيتون، زيتون أسود، خبز بر', notes: 'مع كوب شاي بالنعناع' }
      },
      mon: {
        family: { title: 'مكرونة بشاميل باللحم المفروم وسلطة خضراء', ingredients: 'مكرونة فرن، لحم مفروم، بصل، حليب، دقيق، جبن موزاريلا', notes: 'تسبيك اللحم المفروم صباحاً' },
        saleem: { title: 'ميني بيتزا بيتية + حبات عنب', ingredients: 'عجينة ميني، صلصة بيتزا، جبن، زيتون، عنب مغسول', notes: 'خبزها في الفرن 10 دقائق فقط' },
        murad: { title: 'ساندوتش تونة مع الذرة والليمون', ingredients: 'تونة قطع خفيفة، ذرة حلوة، رشة ليمون، خبز تورتيلا', notes: 'تصفية زيت التونة جيداً' }
      },
      tue: {
        family: { title: 'كفتة مشوية بالفرن مع طحينة وخضار سوتيه', ingredients: 'لحم كفتة متبل، طحينة، ليمون، كوسة، جزر، بطاطس', notes: 'تشكيل أصابع الكفتة وتبريدها قبل الفرن' },
        saleem: { title: 'توست زبدة فول سوداني وموز + زبادي فواكه', ingredients: 'خبز توست أسمر، زبدة فول سوداني، موزة، زبادي سليم', notes: 'تقطيع الموز شرائح رفيعة' },
        murad: { title: 'شوربة عدس دافئة مع خبز محمص وليمون', ingredients: 'عدس أصفر، جزر، بصل، كمون، زيت زيتون', notes: 'وجبة خفيفة ومريحة للمعدة' }
      },
      wed: {
        family: { title: 'سمك فيليه مشوي مع أرز صيادية وسلطة طحينة', ingredients: 'فيليه سمك، ثوم، كمون، ليمون، أرز، بصل مقلي', notes: 'يوم مشتريات الثلاجة الطازجة' },
        saleem: { title: 'ساندوتش كفتة خفيف + شرائح خيار وفراولة', ingredients: 'كفتة مشوية متبقية، خبز، خيار، فراولة طازجة', notes: 'وضع الفراولة في علبة منفصلة' },
        murad: { title: 'سلطة يونانية مع جبنة فيتا وزيت زيتون', ingredients: 'طماطم، خيار، فلفل رومي، جبنة فيتا، أوريجانو', notes: 'إضافة رشة زعتر بري' }
      },
      thu: {
        family: { title: 'كبسة لحم ضأن مع صوص الدقوس الحار والبارد', ingredients: 'لحم، أرز بسمتي، بهارات كبسة، لومي، طماطم، فلفل أخضر', notes: 'طهي اللحم على نار هادئة حتى ينضج تماماً' },
        saleem: { title: 'وافل خفيف مع عسل ومكسرات خفيفة', ingredients: 'وافل بيتي، عسل، حبات فراولة وتوت', notes: 'مكافأة نهاية الأسبوع المدرسي' },
        murad: { title: 'عشاء مفتوح / ساندوتش خفيف حسب رغبته', ingredients: 'اختياري', notes: 'ليلة الخميس عطلة' }
      },
      fri: {
        family: { title: 'غداء الجمعة العائلي اللذيذ والمميز', ingredients: 'أطباق مشكلة مفضلة للعائلة', notes: 'يوم اجتماع العائلة والبركة' },
        saleem: { title: 'فطور عائلي متأخر مع العائلة', ingredients: 'فول مدمس، بيض، أجبان، مربى، خبز طازج', notes: 'بدون لانش بوكس - عطلة' },
        murad: { title: 'عشاء خفيف فواكه وزبادي يوناني', ingredients: 'زبادي يوناني، توت، مكسرات نية، ملعقة عسل', notes: 'عشاء خفيف بعد غداء الجمعة' }
      }
    },
    shoppingLists: {
      fridge: [
        { id: 's-1', name: 'طماطم حمراء طازجة', qty: '2 كيلو', date: '', note: 'للطبخ والسلطة', bought: false },
        { id: 's-2', name: 'خيار بلدي صغير', qty: '1.5 كيلو', date: '', note: 'للانش بوكس سليم والسلطات', bought: false },
        { id: 's-3', name: 'تفاح وموز وفراولة', qty: 'طبق مشكل', date: '', note: 'فواكه الأسبوع', bought: false },
        { id: 's-4', name: 'حليب طازج كامل الدسم', qty: '3 لتر', date: '', note: 'للبيت وسليم', bought: true },
        { id: 's-5', name: 'أجبان (شيدر، فيتا، قريش)', qty: '3 علب', date: '', note: '', bought: false },
        { id: 's-6', name: 'بيض طازج', qty: 'كرتونة 30 حبة', date: '', note: 'للفطور والطبخ', bought: false }
      ],
      monthly: [
        { id: 'sm-1', name: 'لحم بقري مفروم ممتاز', qty: '3 كيلو', date: '', note: 'تقسيم في أكياس للكفتة والمكرونة', bought: false },
        { id: 'sm-2', name: 'صدور دجاج ودجاج كامل طازج', qty: '4 أكياس', date: '', note: 'غسيل وتتبيل وتجميد', bought: false },
        { id: 'sm-3', name: 'مسحوق غسيل الملابس الأوتوماتيك', qty: 'عبوة كبيرة 7 كجم', date: '', note: 'برائحة اللافندر', bought: false },
        { id: 'sm-4', name: 'سائل غسيل الصحون + مطهر أرضيات', qty: 'عبوتان', date: '', note: 'منظفات البيت الكبيرة', bought: true },
        { id: 'sm-5', name: 'أكياس قمامة ومحارم ورقية سميكة', qty: 'عرض توفيري', date: '', note: '', bought: false }
      ],
      pantry: [
        { id: 'sp-1', name: 'أرز بسمتي درجة أولى', qty: 'كيس 5 كجم', date: '', note: '', bought: false },
        { id: 'sp-2', name: 'مكرونة مشكلة (أشكال وأقلام)', qty: '6 أكياس', date: '', note: 'للوجبات السريعة والبشاميل', bought: false },
        { id: 'sp-3', name: 'زيت ذرة نقي + زيت زيتون بكر', qty: 'زجاجتان', date: '', note: 'للصحة والطبخ اليومي', bought: false },
        { id: 'sp-4', name: 'بهارات كبسة ومسحوق هيل وقرفة', qty: 'علب توابل', date: '', note: 'تجديد العلب', bought: false }
      ],
      errands: [
        { id: 'se-1', name: 'مرور الصيدلية: فيتامينات سليم ومرطب الشفاه', qty: 'طلب', date: '', note: 'في طريق العودة', bought: false },
        { id: 'se-2', name: 'استلام ملابس الكي من المصبغة', qty: 'ثوبان', date: '', note: 'يوم الخميس قبل صلاة الجمعة', bought: false }
      ]
    },
    selfCareList: [
      { id: 'sc-1', title: 'ماسك الشعر الأسبوعي بحمام زيت طبيعي', category: 'skin', freq: 'thursday', reminder: true, done: false, notes: 'كل خميس مساءً مع دش دافئ مريح' },
      { id: 'sc-2', title: 'مشي خفيف 25 دقيقة أو تمارين تمدد', category: 'movement', freq: 'daily', reminder: true, done: false, notes: 'في الصباح الباكر أو قبل المغرب' },
      { id: 'sc-3', title: 'فنجان شاي أخضر بالنعناع مع كتاب مفضل', category: 'peace', freq: 'daily', reminder: false, done: true, notes: 'لحظة هدوء خاصة بعد نوم الأولاد' },
      { id: 'sc-4', title: 'قيلولة قصيرة مريحة 20 دقيقة', category: 'rest', freq: 'flexible', reminder: false, done: false, notes: 'استعادة الطاقة لمنتصف اليوم' },
      { id: 'sc-5', title: 'روتين ترطيب البشرة الليلي وسيروم الهيالورونيك', category: 'skin', freq: 'daily', reminder: true, done: false, notes: 'قبل النوم بـ 15 دقيقة' }
    ],
    soundEnabled: true
  };
}

// Master App Controller
class AsmaaRoutineApp {
  constructor() {
    this.data = this.loadData();
    this.currentScreen = 'today';
    this.currentSelectedScheduleDay = 'sat';
    this.currentSelectedMealDay = 'sat';
    this.currentShoppingCategory = 'fridge';
    this.currentCleaningView = 'room'; // 'room' | 'frequency'
    this.currentCleaningRoomFilter = 'all';
    this.todayFilter = 'all';
    this.careFilter = 'all';
    this.activePostponeItem = null;
    this.activeCopyMealSource = null;

    // Audio context for soothing chimes
    this.audioCtx = null;

    this.init();
  }

  // Load from local storage or fallback to defaults
  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    const defaults = getDefaultData();
    this.saveData(defaults);
    return defaults;
  }

  saveData(dataToSave = this.data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.error('Error saving data to localStorage', e);
    }
  }

  init() {
    this.bindNavigation();
    this.setupDateAndGreeting();
    this.bindModals();
    this.bindScreenControls();
    this.renderCurrentScreen();
    this.setupEncouragementRotator();
  }

  // Bind Bottom Tabs
  bindNavigation() {
    const navTabs = document.querySelectorAll('.bottom-nav .nav-tab');
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        this.switchScreen(target);
      });
    });
  }

  switchScreen(screenName) {
    this.currentScreen = screenName;

    // Update bottom nav active state
    document.querySelectorAll('.bottom-nav .nav-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.target === screenName);
    });

    // Update views
    document.querySelectorAll('.screen-view').forEach(view => {
      view.classList.toggle('active', view.dataset.screen === screenName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderCurrentScreen();
  }

  // Date and Warm Greeting
  setupDateAndGreeting() {
    const now = new Date();
    const hours = now.getHours();

    // Time of day greeting
    const greetingTimeEl = document.getElementById('greeting-time');
    const greetingIconEl = document.getElementById('greeting-icon');

    if (hours >= 4 && hours < 12) {
      greetingTimeEl.textContent = 'صباح الخير والبركة';
      greetingIconEl.textContent = '🌸';
    } else if (hours >= 12 && hours < 17) {
      greetingTimeEl.textContent = 'مساء الخير والنشاط';
      greetingIconEl.textContent = '☀️';
    } else {
      greetingTimeEl.textContent = 'مساء الراحة والسكينة';
      greetingIconEl.textContent = '🌙';
    }

    // Set Arabic date string
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = now.toLocaleDateString('ar-EG', options);
    
    const todayFullDateEl = document.getElementById('today-full-date');
    const todayDayNameEl = document.getElementById('today-day-name');

    if (todayFullDateEl) todayFullDateEl.textContent = dateFormatted;
    if (todayDayNameEl) todayDayNameEl.textContent = now.toLocaleDateString('ar-EG', { weekday: 'long' });

    // Sound toggle state
    const soundIcon = document.getElementById('sound-icon');
    if (soundIcon) soundIcon.textContent = this.data.soundEnabled ? '🔔' : '🔕';
  }

  // Encouragement quote rotation
  setupEncouragementRotator() {
    const textEl = document.getElementById('encouragement-text');
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % ENCOURAGING_QUOTES.length;
      if (textEl) {
        textEl.style.opacity = '0';
        setTimeout(() => {
          textEl.textContent = ENCOURAGING_QUOTES[idx];
          textEl.style.opacity = '1';
        }, 300);
      }
    }, 14000);
  }

  // Bind Buttons & Modals
  bindModals() {
    // Quick Add Button
    document.getElementById('btn-quick-add').addEventListener('click', () => {
      this.openActivityModal();
    });

    // Sound Toggle
    document.getElementById('btn-toggle-sound').addEventListener('click', () => {
      this.data.soundEnabled = !this.data.soundEnabled;
      this.saveData();
      const soundIcon = document.getElementById('sound-icon');
      soundIcon.textContent = this.data.soundEnabled ? '🔔' : '🔕';
      this.showToast(this.data.soundEnabled ? 'تم تفعيل النغمات الهادئة 🔔' : 'تم كتم الصوت 🔕');
    });

    // Settings
    document.getElementById('btn-app-settings').addEventListener('click', () => {
      document.getElementById('modal-settings').classList.remove('hidden');
    });

    // Close on overlay click outside sheet
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.closeModals();
        }
      });
    });

    // Date change trigger conflict detection in Activity Modal
    const actTime = document.getElementById('activity-time');
    const actDate = document.getElementById('activity-date');
    const checkConflict = () => {
      const hint = document.getElementById('modal-conflict-hint');
      if (actTime && actDate && actTime.value && actDate.value) {
        const hasConflict = this.checkActivityConflict(actDate.value, actTime.value, document.getElementById('activity-id').value);
        hint.classList.toggle('hidden', !hasConflict);
      }
    };
    if (actTime) actTime.addEventListener('change', checkConflict);
    if (actDate) actDate.addEventListener('change', checkConflict);
  }

  closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.add('hidden');
    });
  }

  bindScreenControls() {
    // Screen 1: Filter Chips
    const todayChips = document.querySelectorAll('#today-filter-chips .filter-chip');
    todayChips.forEach(chip => {
      chip.addEventListener('click', () => {
        todayChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.todayFilter = chip.dataset.filter;
        this.renderTodayTimeline();
      });
    });

    // Quran check toggle in Today
    const quranCheckBtn = document.getElementById('btn-toggle-quran-done');
    if (quranCheckBtn) {
      quranCheckBtn.addEventListener('click', () => {
        const todayStr = new Date().toISOString().split('T')[0];
        const isDone = !!this.data.quranSession.completedDates[todayStr];
        this.data.quranSession.completedDates[todayStr] = !isDone;
        this.saveData();
        this.playGentleChime();
        this.showToast(!isDone ? 'تقبل الله طاعتكِ وبارك في يومكِ ✨' : 'تم التحديث');
        this.renderTodayQuranCard();
        this.renderTodayProgress();
      });
    }

    // Screen 2: Schedule
    document.getElementById('btn-add-schedule-item').addEventListener('click', () => {
      this.openActivityModal();
    });

    document.getElementById('btn-save-quran-time').addEventListener('click', () => {
      const timeVal = document.getElementById('quran-start-time-input').value;
      if (timeVal) {
        this.data.quranSession.startTime = timeVal;
        this.saveData();
        this.showToast('تم حفظ توقيت جلسة القرآن اليومية 🕊️');
        this.renderScheduleView();
        this.renderTodayQuranCard();
      }
    });

    // Screen 3: Cleaning
    document.getElementById('btn-add-cleaning-task').addEventListener('click', () => {
      this.openCleaningModal();
    });

    document.querySelectorAll('.segmented-tabs .seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.segmented-tabs .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCleaningView = btn.dataset.cleaningView;
        const roomChips = document.getElementById('cleaning-room-chips');
        roomChips.style.display = this.currentCleaningView === 'room' ? 'flex' : 'none';
        this.renderCleaningTasks();
      });
    });

    document.querySelectorAll('#cleaning-room-chips .filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#cleaning-room-chips .filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentCleaningRoomFilter = chip.dataset.room;
        this.renderCleaningTasks();
      });
    });

    // Screen 5: Shopping
    document.getElementById('btn-add-shopping-item').addEventListener('click', () => {
      this.openShoppingModal();
    });

    document.querySelectorAll('.shopping-category-tabs .shop-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.shopping-category-tabs .shop-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentShoppingCategory = tab.dataset.category;
        this.renderShoppingView();
      });
    });

    document.getElementById('btn-load-recurring-template').addEventListener('click', () => {
      this.loadRecurringShoppingTemplate();
    });

    document.getElementById('btn-clear-completed-shopping').addEventListener('click', () => {
      this.clearCompletedShopping();
    });

    // Screen 6: Self-Care
    document.getElementById('btn-add-selfcare-item').addEventListener('click', () => {
      this.openSelfCareModal();
    });

    document.querySelectorAll('#selfcare-filter-chips .filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#selfcare-filter-chips .filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.careFilter = chip.dataset.careFilter;
        this.renderSelfCareList();
      });
    });
  }

  // ==========================================================
  // RENDER MASTER
  // ==========================================================
  renderCurrentScreen() {
    switch (this.currentScreen) {
      case 'today':
        this.renderTodayScreen();
        break;
      case 'schedule':
        this.renderScheduleView();
        break;
      case 'cleaning':
        this.renderCleaningScreen();
        break;
      case 'meals':
        this.renderMealsScreen();
        break;
      case 'shopping':
        this.renderShoppingView();
        break;
      case 'selfcare':
        this.renderSelfCareScreen();
        break;
    }
  }

  // ==========================================================
  // SCREEN 1: TODAY IMPLEMENTATION
  // ==========================================================
  renderTodayScreen() {
    this.renderTodayProgress();
    this.renderTodayHero();
    this.renderTodayQuranCard();
    this.renderTodayTimeline();
  }

  renderTodayProgress() {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayActivities = this.data.activities.filter(a => a.date === todayStr);

    const isQuranDone = !!this.data.quranSession.completedDates[todayStr];
    const totalCount = todayActivities.length + 1; // including Quran
    const completedCount = todayActivities.filter(a => a.completed).length + (isQuranDone ? 1 : 0);

    const pct = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const fill = document.getElementById('today-progress-fill');
    const label = document.getElementById('today-progress-text');
    if (fill) fill.style.width = `${pct}%`;
    if (label) label.textContent = `${completedCount} من ${totalCount} مكتمل ✨`;
  }

  renderTodayHero() {
    const heroContainer = document.getElementById('hero-next-card');
    const todayStr = new Date().toISOString().split('T')[0];
    
    // Find first uncompleted task
    const uncompleted = this.data.activities
      .filter(a => a.date === todayStr && !a.completed)
      .sort((a, b) => (a.time || '00:00').localeCompare(b.time || '00:00'));

    if (uncompleted.length === 0) {
      heroContainer.innerHTML = `
        <div class="hero-badge-pill">🌸 يوم مكتمل البركة</div>
        <div class="hero-title">رائع يا أسماء! أنجزتِ مهام اليوم الأساسية</div>
        <div class="hero-meta">
          <span>خذي قسطاً من الراحة واستمتعي بوقتكِ مع أسرتكِ 🌿</span>
        </div>
      `;
      return;
    }

    const nextAct = uncompleted[0];
    const formattedTime = this.formatTimeArabic(nextAct.time);

    heroContainer.innerHTML = `
      <div class="hero-badge-pill">⚡ النشاط القادم لكِ الآن</div>
      <div class="hero-title">${this.escapeHTML(nextAct.title)}</div>
      <div class="hero-meta">
        <span>⏰ ${formattedTime}</span>
        <span>⏳ ${nextAct.duration || 30} دقيقة</span>
        ${nextAct.notes ? `<span>📝 ${this.escapeHTML(nextAct.notes)}</span>` : ''}
      </div>
      <div class="hero-actions-row">
        <button class="btn-hero-action" onclick="app.toggleActivityDone('${nextAct.id}')">
          تم الإنجاز ✨
        </button>
        <button class="btn-hero-action secondary" onclick="app.openPostponeModal('${nextAct.id}')">
          تأجيل برفق ⏳
        </button>
      </div>
    `;
  }

  renderTodayQuranCard() {
    const todayStr = new Date().toISOString().split('T')[0];
    const isDone = !!this.data.quranSession.completedDates[todayStr];
    const start = this.data.quranSession.startTime || '06:00';
    
    const [h, m] = start.split(':').map(Number);
    const endH = (h + 1) % 24;
    const endStr = `${String(endH).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

    const timeRangeEl = document.getElementById('quran-time-range');
    if (timeRangeEl) {
      timeRangeEl.textContent = `${this.formatTimeArabic(start)} - ${this.formatTimeArabic(endStr)}`;
    }

    const btn = document.getElementById('btn-toggle-quran-done');
    if (btn) {
      btn.classList.toggle('done', isDone);
      btn.innerHTML = isDone 
        ? `<span>مكتمل بفضل الله</span> ✨` 
        : `<span>تم بحمد الله</span> ✨`;
    }
  }

  renderTodayTimeline() {
    const list = document.getElementById('today-timeline-list');
    const todayStr = new Date().toISOString().split('T')[0];

    let items = this.data.activities.filter(a => a.date === todayStr);

    if (this.todayFilter !== 'all') {
      items = items.filter(a => a.category === this.todayFilter);
    }

    items.sort((a, b) => (a.time || '00:00').localeCompare(b.time || '00:00'));

    document.getElementById('today-items-count').textContent = `${items.length} مهام`;

    if (items.length === 0) {
      list.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-state-icon">🌱</div>
          <div class="empty-state-title">لا توجد مهام في هذا التصنيف اليوم</div>
          <p class="empty-state-desc">يمكنك إضافة نشاط جديد متى شئتِ أو الاستمتاع بيوم هادئ وخالٍ من الالتزامات.</p>
          <button class="btn-primary-sm" onclick="app.openActivityModal()">+ إضافة نشاط جديد</button>
        </div>
      `;
      return;
    }

    list.innerHTML = items.map(item => {
      const catInfo = this.getCategoryBadgeInfo(item.category);
      const isCompleted = item.completed;
      const formattedTime = this.formatTimeArabic(item.time);

      return `
        <div class="timeline-item-card ${isCompleted ? 'completed' : ''}" id="act-card-${item.id}">
          <div class="item-top-row">
            <div class="item-meta-info">
              <span class="item-time-badge">${formattedTime}</span>
              <span class="item-cat-badge ${catInfo.badgeClass}">${catInfo.label}</span>
              ${item.duration ? `<span class="badge-pill-soft">⏳ ${item.duration} دقيقة</span>` : ''}
            </div>
            <button class="btn-task-action done-btn ${isCompleted ? 'active' : ''}" onclick="app.toggleActivityDone('${item.id}')">
              ${isCompleted ? '✓ أنجزتِها' : 'إتمام'}
            </button>
          </div>

          <div class="item-title-row">
            <h4 class="item-title">${this.escapeHTML(item.title)}</h4>
          </div>

          ${item.notes ? `<p class="item-notes">${this.escapeHTML(item.notes)}</p>` : ''}

          <div class="item-actions-row">
            <button class="btn-task-action" onclick="app.openPostponeModal('${item.id}')" title="تأجيل أو نقل المهمة">
              ⏳ تأجيل برفق
            </button>
            <button class="btn-task-action" onclick="app.openActivityModal('${item.id}')" title="تعديل">
              ✏️ تعديل
            </button>
            <button class="btn-task-action text-danger" onclick="app.deleteActivity('${item.id}')" title="حذف">
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  getCategoryBadgeInfo(category) {
    switch (category) {
      case 'quran': return { label: '📖 ورد القرآن', badgeClass: 'cat-badge-quran' };
      case 'saleem': return { label: '🍱 لانش بوكس سليم', badgeClass: 'cat-badge-saleem' };
      case 'murad': return { label: '🍽️ عشاء مراد', badgeClass: 'cat-badge-murad' };
      case 'cleaning': return { label: '🧹 تنظيف البيت', badgeClass: 'cat-badge-cleaning' };
      case 'meals': return { label: '🍲 طعام وعائلة', badgeClass: 'cat-badge-meals' };
      case 'selfcare': return { label: '💆‍♀️ عناية واسترخاء', badgeClass: 'cat-badge-selfcare' };
      case 'shopping': return { label: '🛒 مشاوير وتسوق', badgeClass: 'cat-badge-shopping' };
      default: return { label: '📌 نشاط عام', badgeClass: 'cat-badge-general' };
    }
  }

  toggleActivityDone(id) {
    const act = this.data.activities.find(a => a.id === id);
    if (!act) return;

    act.completed = !act.completed;
    this.saveData();

    if (act.completed) {
      this.playGentleChime();
      this.showToast('ما شاء الله.. إنجاز رائع ومبارك يا أسماء ✨');
    }

    this.renderCurrentScreen();
  }

  deleteActivity(id) {
    if (confirm('هل ترغبين بحذف هذا النشاط من الجدول؟')) {
      this.data.activities = this.data.activities.filter(a => a.id !== id);
      this.saveData();
      this.showToast('تم حذف النشاط بنجاح');
      this.renderCurrentScreen();
    }
  }

  // ==========================================================
  // POSTPONE / RESCHEDULE
  // ==========================================================
  openPostponeModal(id) {
    const act = this.data.activities.find(a => a.id === id);
    if (!act) return;

    this.activePostponeItem = act;
    document.getElementById('postpone-item-name').textContent = act.title;
    document.getElementById('modal-postpone').classList.remove('hidden');
  }

  applyPostpone(type) {
    if (!this.activePostponeItem) return;
    const act = this.activePostponeItem;

    if (type === '1hour') {
      const [h, m] = (act.time || '10:00').split(':').map(Number);
      const newH = (h + 1) % 24;
      act.time = `${String(newH).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      this.showToast(`تم تأجيل "${act.title}" ساعة واحدة برفق ⏳`);
    } else if (type === 'evening') {
      act.time = '20:00';
      this.showToast(`تم نقل "${act.title}" للمساء الساعة 08:00 م 🌙`);
    } else if (type === 'tomorrow') {
      const d = new Date(act.date);
      d.setDate(d.getDate() + 1);
      act.date = d.toISOString().split('T')[0];
      this.showToast(`تم نقل المهمة لجدول الغد بكل يسر 🌅`);
    } else if (type === 'nextweek') {
      const d = new Date(act.date);
      d.setDate(d.getDate() + 7);
      act.date = d.toISOString().split('T')[0];
      this.showToast(`تم نقل المهمة للأسبوع القادم 🗓️`);
    }

    this.saveData();
    this.closeModals();
    this.renderCurrentScreen();
  }

  // ==========================================================
  // SCREEN 2: SCHEDULE & CALENDAR
  // ==========================================================
  renderScheduleView() {
    this.renderScheduleWeekSelector();
    this.renderQuranBoxSettings();
    this.renderScheduleDayItems();
    this.checkDayConflicts();
  }

  renderScheduleWeekSelector() {
    const container = document.getElementById('schedule-week-selector');
    container.innerHTML = DAYS_OF_WEEK.map((day, idx) => {
      const isActive = day.id === this.currentSelectedScheduleDay;
      return `
        <button class="day-cell-btn ${isActive ? 'active' : ''}" onclick="app.selectScheduleDay('${day.id}')">
          <span class="day-label">${day.short}</span>
          <span class="day-num">${idx + 1}</span>
        </button>
      `;
    }).join('');
  }

  selectScheduleDay(dayId) {
    this.currentSelectedScheduleDay = dayId;
    this.renderScheduleView();
  }

  renderQuranBoxSettings() {
    const startTimeInput = document.getElementById('quran-start-time-input');
    if (startTimeInput) startTimeInput.value = this.data.quranSession.startTime || '06:00';

    const repeatDaysContainer = document.getElementById('quran-repeat-days');
    if (repeatDaysContainer) {
      repeatDaysContainer.innerHTML = DAYS_OF_WEEK.map(d => {
        const isSelected = this.data.quranSession.repeatDays.includes(d.id);
        return `
          <button class="mini-day-toggle ${isSelected ? 'selected' : ''}" onclick="app.toggleQuranDay('${d.id}')">
            ${d.short}
          </button>
        `;
      }).join('');
    }
  }

  toggleQuranDay(dayId) {
    const days = this.data.quranSession.repeatDays;
    const idx = days.indexOf(dayId);
    if (idx > -1) {
      days.splice(idx, 1);
    } else {
      days.push(dayId);
    }
    this.saveData();
    this.renderQuranBoxSettings();
  }

  renderScheduleDayItems() {
    const list = document.getElementById('schedule-list');
    const dayObj = DAYS_OF_WEEK.find(d => d.id === this.currentSelectedScheduleDay);
    const dayTitle = document.getElementById('schedule-day-title');
    if (dayTitle && dayObj) dayTitle.textContent = `أنشطة ومواعيد يوم ${dayObj.name}`;

    // Get all activities
    const items = this.data.activities;
    document.getElementById('schedule-day-count').textContent = `${items.length} أنشطة إجمالاً`;

    if (items.length === 0) {
      list.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-state-icon">🗓️</div>
          <div class="empty-state-title">جدول الأنشطة فارغ حالياً</div>
          <p class="empty-state-desc">أضيفي مواعيدك، أوقات العبادة، والتزامات أسرتك لتنظيم أيامك بكل سلاسة.</p>
          <button class="btn-primary-sm" onclick="app.openActivityModal()">+ إضافة أول نشاط</button>
        </div>
      `;
      return;
    }

    list.innerHTML = items.map(act => {
      const cat = this.getCategoryBadgeInfo(act.category);
      return `
        <div class="timeline-item-card">
          <div class="item-top-row">
            <div class="item-meta-info">
              <span class="item-time-badge">${this.formatTimeArabic(act.time)}</span>
              <span class="item-cat-badge ${cat.badgeClass}">${cat.label}</span>
              <span class="badge-pill-soft">${this.getRepeatLabel(act.repeat)}</span>
            </div>
          </div>
          <div class="item-title-row">
            <h4 class="item-title">${this.escapeHTML(act.title)}</h4>
          </div>
          ${act.notes ? `<p class="item-notes">${this.escapeHTML(act.notes)}</p>` : ''}
          <div class="item-actions-row">
            <button class="btn-task-action" onclick="app.openActivityModal('${act.id}')">✏️ تعديل</button>
            <button class="btn-task-action text-danger" onclick="app.deleteActivity('${act.id}')">🗑️ حذف</button>
          </div>
        </div>
      `;
    }).join('');
  }

  getRepeatLabel(repeat) {
    switch (repeat) {
      case 'daily': return 'يومي';
      case 'weekly': return 'أسبوعي';
      case 'monthly': return 'شهري';
      default: return 'مرة واحدة';
    }
  }

  // Conflict Checking
  checkActivityConflict(date, time, excludeId = null) {
    return this.data.activities.some(a => a.date === date && a.time === time && a.id !== excludeId);
  }

  checkDayConflicts() {
    const alertCard = document.getElementById('conflict-alert-card');
    const todayStr = new Date().toISOString().split('T')[0];
    const todayActs = this.data.activities.filter(a => a.date === todayStr);

    const timeMap = {};
    let conflictFound = false;
    let conflictDetails = '';

    for (const act of todayActs) {
      if (timeMap[act.time]) {
        conflictFound = true;
        conflictDetails = `يوجد تضارب بين "${act.title}" و "${timeMap[act.time].title}" في نفس الوقت (${this.formatTimeArabic(act.time)}).`;
        break;
      }
      timeMap[act.time] = act;
    }

    if (conflictFound && alertCard) {
      alertCard.classList.remove('hidden');
      document.getElementById('conflict-alert-message').textContent = conflictDetails;
      document.getElementById('btn-resolve-conflict').onclick = () => {
        this.openActivityModal(todayActs[0].id);
      };
    } else if (alertCard) {
      alertCard.classList.add('hidden');
    }
  }

  // ==========================================================
  // SCREEN 3: CLEANING (تنظيم البيت)
  // ==========================================================
  renderCleaningScreen() {
    this.renderCleaningTasks();
  }

  renderCleaningTasks() {
    const container = document.getElementById('cleaning-tasks-container');
    let tasks = [...this.data.cleaningTasks];

    if (this.currentCleaningView === 'room' && this.currentCleaningRoomFilter !== 'all') {
      tasks = tasks.filter(t => t.room === this.currentCleaningRoomFilter);
    }

    if (this.currentCleaningView === 'frequency') {
      tasks.sort((a, b) => a.freq.localeCompare(b.freq));
    }

    if (tasks.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-state-icon">🧹</div>
          <div class="empty-state-title">لا توجد مهام تنظيف مسجلة هنا</div>
          <p class="empty-state-desc">يمكنك إضافة مهام تنظيف البيت بحسب احتياجك أو تقسيمها على الغرف.</p>
          <button class="btn-primary-sm" onclick="app.openCleaningModal()">+ إضافة مهمة تنظيف</button>
        </div>
      `;
      return;
    }

    container.innerHTML = tasks.map(task => {
      const roomLabel = this.getRoomLabel(task.room);
      const freqLabel = this.getFrequencyLabel(task.freq);

      return `
        <div class="cleaning-task-card ${task.done ? 'done' : ''}">
          <div class="clean-info-wrap">
            <h4 class="task-name">${this.escapeHTML(task.title)}</h4>
            <div class="clean-badges-row">
              <span class="badge-pill-soft">${roomLabel}</span>
              <span class="badge-pill-soft">${freqLabel}</span>
              <span class="badge-pill-soft">⏱️ ${task.duration} دقيقة</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-clean-toggle ${task.done ? 'active' : ''}" onclick="app.toggleCleaningDone('${task.id}')" title="إتمام المهمة">
              ${task.done ? '✓' : ''}
            </button>
            <button class="btn-item-delete" onclick="app.deleteCleaningTask('${task.id}')" title="حذف">🗑️</button>
          </div>
        </div>
      `;
    }).join('');
  }

  getRoomLabel(room) {
    switch (room) {
      case 'kitchen': return '🍳 المطبخ';
      case 'bathrooms': return '🚿 الحمامات';
      case 'bedrooms': return '🛏️ غرف النوم';
      case 'living': return '🛋️ المعيشة والصالة';
      case 'laundry': return '🧺 الغسيل والكوي';
      default: return '🏡 البيت';
    }
  }

  getFrequencyLabel(freq) {
    switch (freq) {
      case 'daily': return 'يومي سريع';
      case 'alternate': return 'يوم بعد يوم';
      case 'weekly': return 'أسبوعي';
      case 'biweekly': return 'مرتين شهرياً';
      case 'monthly': return 'شهري عميق';
      default: return 'دوري';
    }
  }

  toggleCleaningDone(id) {
    const task = this.data.cleaningTasks.find(t => t.id === id);
    if (!task) return;
    task.done = !task.done;
    this.saveData();
    if (task.done) {
      this.playGentleChime();
      this.showToast('يعطيكِ العافية يا أسماء.. بيتكِ عامر بالبركة والنظافة ✨');
    }
    this.renderCleaningTasks();
  }

  deleteCleaningTask(id) {
    if (confirm('هل ترغبين بحذف مهمة التنظيف هذه؟')) {
      this.data.cleaningTasks = this.data.cleaningTasks.filter(t => t.id !== id);
      this.saveData();
      this.renderCleaningTasks();
    }
  }

  // ==========================================================
  // SCREEN 4: MEALS (خطة الوجبات)
  // ==========================================================
  renderMealsScreen() {
    this.renderMealsWeekSelector();
    this.renderSelectedDayMeals();
  }

  renderMealsWeekSelector() {
    const container = document.getElementById('meals-week-selector');
    container.innerHTML = DAYS_OF_WEEK.map((day, idx) => {
      const isActive = day.id === this.currentSelectedMealDay;
      return `
        <button class="day-cell-btn ${isActive ? 'active' : ''}" onclick="app.selectMealDay('${day.id}')">
          <span class="day-label">${day.short}</span>
          <span class="day-num">${idx + 1}</span>
        </button>
      `;
    }).join('');
  }

  selectMealDay(dayId) {
    this.currentSelectedMealDay = dayId;
    this.renderMealsScreen();
  }

  renderSelectedDayMeals() {
    const day = this.currentSelectedMealDay;
    const dayObj = DAYS_OF_WEEK.find(d => d.id === day);
    document.getElementById('meals-selected-day-label').textContent = `وجبات يوم ${dayObj ? dayObj.name : ''}`;

    const dayMeals = this.data.weeklyMeals[day] || {
      family: { title: 'لم يتم تحديد وجبة بعد', ingredients: '', notes: '' },
      saleem: { title: 'لم يتم تحديد وجبة سليم بعد', ingredients: '', notes: '' },
      murad: { title: 'لم يتم تحديد عشاء مراد بعد', ingredients: '', notes: '' }
    };

    // 1. Saleem
    const saleemBody = document.getElementById('saleem-meal-body');
    const s = dayMeals.saleem || {};
    saleemBody.innerHTML = `
      <h5 class="meal-item-name">${this.escapeHTML(s.title || 'أضيفي فكرة اللانش بوكس')}</h5>
      ${s.ingredients ? `<p class="meal-ingredients-box"><strong>المحتويات:</strong> ${this.escapeHTML(s.ingredients)}</p>` : ''}
      ${s.notes ? `<p class="meal-notes-box">💡 ${this.escapeHTML(s.notes)}</p>` : ''}
    `;

    // 2. Family
    const familyBody = document.getElementById('family-meal-body');
    const f = dayMeals.family || {};
    familyBody.innerHTML = `
      <h5 class="meal-item-name">${this.escapeHTML(f.title || 'أضيفي طبق العائلة الرئيسي')}</h5>
      ${f.ingredients ? `<p class="meal-ingredients-box"><strong>المقادير:</strong> ${this.escapeHTML(f.ingredients)}</p>` : ''}
      ${f.notes ? `<p class="meal-notes-box">💡 ${this.escapeHTML(f.notes)}</p>` : ''}
    `;

    // 3. Murad
    const muradBody = document.getElementById('murad-meal-body');
    const m = dayMeals.murad || {};
    muradBody.innerHTML = `
      <h5 class="meal-item-name">${this.escapeHTML(m.title || 'أضيفي عشاء مراد المفضل')}</h5>
      ${m.ingredients ? `<p class="meal-ingredients-box"><strong>المكونات:</strong> ${this.escapeHTML(m.ingredients)}</p>` : ''}
      ${m.notes ? `<p class="meal-notes-box">💡 ${this.escapeHTML(m.notes)}</p>` : ''}
    `;
  }

  editMealSection(track) {
    const day = this.currentSelectedMealDay;
    const currentMeal = (this.data.weeklyMeals[day] && this.data.weeklyMeals[day][track]) || {};

    let titleLabel = 'تعديل الوجبة';
    if (track === 'saleem') titleLabel = 'تعديل لانش بوكس سليم 🍱';
    if (track === 'family') titleLabel = 'تعديل وجبة العائلة الرئيسية 🍲';
    if (track === 'murad') titleLabel = 'تعديل عشاء مراد 🍽️';

    document.getElementById('modal-meal-title').textContent = titleLabel;
    document.getElementById('meal-track-type').value = track;
    document.getElementById('meal-title-input').value = currentMeal.title || '';
    document.getElementById('meal-ingredients-input').value = currentMeal.ingredients || '';
    document.getElementById('meal-notes-input').value = currentMeal.notes || '';

    document.getElementById('modal-meal').classList.remove('hidden');
  }

  saveMealForm() {
    const track = document.getElementById('meal-track-type').value;
    const title = document.getElementById('meal-title-input').value.trim();
    const ingredients = document.getElementById('meal-ingredients-input').value.trim();
    const notes = document.getElementById('meal-notes-input').value.trim();

    const day = this.currentSelectedMealDay;
    if (!this.data.weeklyMeals[day]) this.data.weeklyMeals[day] = {};

    this.data.weeklyMeals[day][track] = { title, ingredients, notes };
    this.saveData();

    this.closeModals();
    this.showToast('تم حفظ تفاصيل الوجبة بنجاح ✨');
    this.renderSelectedDayMeals();
  }

  copyMealPrompt(track) {
    this.activeCopyMealSource = track;
    const list = document.getElementById('copy-target-days-list');
    const currentDay = this.currentSelectedMealDay;

    list.innerHTML = DAYS_OF_WEEK
      .filter(d => d.id !== currentDay)
      .map(d => `
        <button class="btn-day-target" onclick="app.executeCopyMeal('${d.id}')">
          نسخ إلى يوم ${d.name}
        </button>
      `).join('');

    document.getElementById('modal-copy-meal').classList.remove('hidden');
  }

  executeCopyMeal(targetDayId) {
    const sourceDay = this.currentSelectedMealDay;
    const track = this.activeCopyMealSource;
    if (!sourceDay || !track) return;

    const mealData = this.data.weeklyMeals[sourceDay][track];
    if (!this.data.weeklyMeals[targetDayId]) this.data.weeklyMeals[targetDayId] = {};

    this.data.weeklyMeals[targetDayId][track] = { ...mealData };
    this.saveData();

    const targetDayName = DAYS_OF_WEEK.find(d => d.id === targetDayId)?.name;
    this.closeModals();
    this.showToast(`تم نسخ الوجبة بنجاح إلى يوم ${targetDayName} 📋`);
  }

  sendMealToShopping(track) {
    const day = this.currentSelectedMealDay;
    const meal = this.data.weeklyMeals[day] && this.data.weeklyMeals[day][track];
    if (!meal || !meal.ingredients) {
      alert('لا توجد مقادير مدخلة لهذه الوجبة بعد. يمكنك إضافتها عبر زر التعديل.');
      return;
    }

    const items = meal.ingredients.split(/[\n,،]+/).map(s => s.trim()).filter(Boolean);
    if (items.length === 0) return;

    // Default to fridge or pantry depending on meal
    const cat = track === 'saleem' ? 'fridge' : 'fridge';

    items.forEach(itemName => {
      this.data.shoppingLists[cat].push({
        id: 's-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        name: itemName,
        qty: 'حسب الحاجة',
        date: '',
        note: `لوجبة ${meal.title}`,
        bought: false
      });
    });

    this.saveData();
    this.playGentleChime();
    this.showToast(`تمت إضافة ${items.length} مقادير إلى قائمة المشتريات 🛒`);
  }

  // ==========================================================
  // SCREEN 5: SHOPPING & ERRANDS
  // ==========================================================
  renderShoppingView() {
    const cat = this.currentShoppingCategory;
    const titleEl = document.getElementById('current-shopping-cat-title');
    const descEl = document.getElementById('current-shopping-cat-desc');

    switch (cat) {
      case 'fridge':
        titleEl.textContent = '🥦 مشتريات الثلاجة (الأربعاء)';
        descEl.textContent = 'الخضار الطازج، الفواكه، الألبان والأجبان لتجديد الثلاجة أسبوعياً';
        break;
      case 'monthly':
        titleEl.textContent = '🥩 مشتريات أول الشهر';
        descEl.textContent = 'اللحوم، الدواجن، الأسماك، ومساحيق الغسيل والمنظفات الكبيرة بالجملة';
        break;
      case 'pantry':
        titleEl.textContent = '🌾 أساسيات المونة والتموين';
        descEl.textContent = 'الأرز، الزيوت، المكرونة، البقوليات، والمعلبات المنزلية';
        break;
      case 'errands':
        titleEl.textContent = '🚗 مشاوير وطلبات طارئة';
        descEl.textContent = 'الصيدلية، المصبغة، المكتبة، والطلبات الشخصية والعائلية';
        break;
    }

    const container = document.getElementById('shopping-items-list');
    const items = this.data.shoppingLists[cat] || [];

    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-state-icon">🛒</div>
          <div class="empty-state-title">القائمة مكتملة أو فارغة حالياً</div>
          <p class="empty-state-desc">يمكنك إضافة غرض جديد أو استرجاع المقترحات الدورية بضغطة واحدة.</p>
          <button class="btn-primary-sm" onclick="app.openShoppingModal()">+ إضافة غرض للمشتريات</button>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="shopping-item-row ${item.bought ? 'bought' : ''}">
        <input type="checkbox" class="item-checkbox" ${item.bought ? 'checked' : ''} onchange="app.toggleShoppingBought('${cat}', '${item.id}')">
        <div class="shopping-info-col">
          <span class="item-label">${this.escapeHTML(item.name)}</span>
          ${item.qty ? `<span class="item-qty-tag">${this.escapeHTML(item.qty)}</span>` : ''}
          ${item.note ? `<span class="item-note">📝 ${this.escapeHTML(item.note)}</span>` : ''}
        </div>
        <button class="btn-item-delete" onclick="app.deleteShoppingItem('${cat}', '${item.id}')" title="حذف">🗑️</button>
      </div>
    `).join('');
  }

  toggleShoppingBought(cat, id) {
    const item = this.data.shoppingLists[cat].find(i => i.id === id);
    if (!item) return;
    item.bought = !item.bought;
    this.saveData();
    if (item.bought) {
      this.playGentleChime();
    }
    this.renderShoppingView();
  }

  deleteShoppingItem(cat, id) {
    this.data.shoppingLists[cat] = this.data.shoppingLists[cat].filter(i => i.id !== id);
    this.saveData();
    this.renderShoppingView();
  }

  clearCompletedShopping() {
    const cat = this.currentShoppingCategory;
    const initialCount = this.data.shoppingLists[cat].length;
    this.data.shoppingLists[cat] = this.data.shoppingLists[cat].filter(i => !i.bought);
    const removedCount = initialCount - this.data.shoppingLists[cat].length;

    this.saveData();
    this.showToast(`تم تنظيف ${removedCount} من الأغراض المشتراة 🧹`);
    this.renderShoppingView();
  }

  loadRecurringShoppingTemplate() {
    const cat = this.currentShoppingCategory;
    const defaults = getDefaultData().shoppingLists[cat] || [];

    // Add items that are not already present
    let added = 0;
    defaults.forEach(defItem => {
      const exists = this.data.shoppingLists[cat].some(i => i.name === defItem.name);
      if (!exists) {
        this.data.shoppingLists[cat].push({ ...defItem, id: 's-rec-' + Date.now() + Math.random(), bought: false });
        added++;
      }
    });

    this.saveData();
    this.showToast(`تمت إضافة ${added} عناصر من القائمة الدورية المقترحة ✨`);
    this.renderShoppingView();
  }

  // ==========================================================
  // SCREEN 6: SELF-CARE (عنايتي ولحظاتي الخاصة)
  // ==========================================================
  renderSelfCareScreen() {
    this.renderSelfCareList();
  }

  renderSelfCareList() {
    const container = document.getElementById('selfcare-items-list');
    let items = [...this.data.selfCareList];

    if (this.careFilter !== 'all') {
      items = items.filter(i => i.category === this.careFilter);
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-state-box">
          <div class="empty-state-icon">🌸</div>
          <div class="empty-state-title">لا توجد أنشطة عناية هنا بعد</div>
          <p class="empty-state-desc">تذكري أن العناية بنفسكِ ليست ترفاً بل حاجة.. أضيفي لحظتكِ الخاصة المفضلة.</p>
          <button class="btn-primary-sm" onclick="app.openSelfCareModal()">+ إضافة روتين عناية</button>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="selfcare-item-card">
        <div class="selfcare-info">
          <h4 class="selfcare-title">${this.escapeHTML(item.title)}</h4>
          <div class="selfcare-meta">
            <span class="badge-pill-soft">${this.getCareFreqLabel(item.freq)}</span>
            ${item.notes ? `<span>${this.escapeHTML(item.notes)}</span>` : ''}
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn-selfcare-done ${item.done ? 'done' : ''}" onclick="app.toggleSelfCareDone('${item.id}')">
            ${item.done ? 'تمت العناية 🌸' : 'اهتممت بنفسي'}
          </button>
          <button class="btn-item-delete" onclick="app.deleteSelfCareItem('${item.id}')" title="حذف">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  getCareFreqLabel(freq) {
    switch (freq) {
      case 'daily': return 'روتين يومي';
      case 'thursday': return 'كل خميس مساءً';
      case 'weekly': return 'أسبوعياً';
      case 'weekend': return 'عطلة الأسبوع';
      default: return 'حسب رغبتك';
    }
  }

  toggleSelfCareDone(id) {
    const item = this.data.selfCareList.find(i => i.id === id);
    if (!item) return;
    item.done = !item.done;
    this.saveData();
    if (item.done) {
      this.playGentleChime();
      this.showToast('دمتِ مشرقة وجميلة يا أسماء 🌸 تستحقين كل دلال');
    }
    this.renderSelfCareList();
  }

  deleteSelfCareItem(id) {
    if (confirm('هل ترغبين بحذف هذا النشاط من قائمة العناية؟')) {
      this.data.selfCareList = this.data.selfCareList.filter(i => i.id !== id);
      this.saveData();
      this.renderSelfCareList();
    }
  }

  // ==========================================================
  // MODAL FORMS: ACTIVITY, CLEANING, SHOPPING, SELFCARE
  // ==========================================================
  openActivityModal(editId = null) {
    const modal = document.getElementById('modal-activity');
    const form = document.getElementById('form-activity');
    form.reset();

    const titleEl = document.getElementById('modal-activity-title');
    const idInput = document.getElementById('activity-id');
    const dateInput = document.getElementById('activity-date');

    const todayStr = new Date().toISOString().split('T')[0];
    dateInput.value = todayStr;

    if (editId) {
      const act = this.data.activities.find(a => a.id === editId);
      if (act) {
        titleEl.textContent = 'تعديل النشاط في الجدول';
        idInput.value = act.id;
        document.getElementById('activity-title').value = act.title;
        document.getElementById('activity-date').value = act.date;
        document.getElementById('activity-time').value = act.time;
        document.getElementById('activity-duration').value = act.duration || 30;
        document.getElementById('activity-category').value = act.category;
        document.getElementById('activity-repeat').value = act.repeat || 'none';
        document.getElementById('activity-notes').value = act.notes || '';
        document.getElementById('activity-reminder').checked = !!act.reminder;
      }
    } else {
      titleEl.textContent = 'إضافة نشاط للجدول';
      idInput.value = '';
    }

    modal.classList.remove('hidden');
  }

  saveActivityForm() {
    const id = document.getElementById('activity-id').value;
    const title = document.getElementById('activity-title').value.trim();
    const date = document.getElementById('activity-date').value;
    const time = document.getElementById('activity-time').value;
    const duration = parseInt(document.getElementById('activity-duration').value, 10);
    const category = document.getElementById('activity-category').value;
    const repeat = document.getElementById('activity-repeat').value;
    const notes = document.getElementById('activity-notes').value.trim();
    const reminder = document.getElementById('activity-reminder').checked;

    if (!title || !date || !time) return;

    if (id) {
      const act = this.data.activities.find(a => a.id === id);
      if (act) {
        Object.assign(act, { title, date, time, duration, category, repeat, notes, reminder });
      }
    } else {
      this.data.activities.push({
        id: 'act-' + Date.now(),
        title,
        date,
        time,
        duration,
        category,
        repeat,
        notes,
        reminder,
        completed: false
      });
    }

    this.saveData();
    this.closeModals();
    this.showToast('تم حفظ النشاط بنجاح ✨');
    this.renderCurrentScreen();
  }

  openCleaningModal() {
    document.getElementById('form-cleaning').reset();
    document.getElementById('cleaning-task-id').value = '';
    document.getElementById('modal-cleaning').classList.remove('hidden');
  }

  saveCleaningForm() {
    const title = document.getElementById('cleaning-task-title').value.trim();
    const room = document.getElementById('cleaning-task-room').value;
    const freq = document.getElementById('cleaning-task-freq').value;
    const duration = parseInt(document.getElementById('cleaning-task-duration').value, 10);

    if (!title) return;

    this.data.cleaningTasks.push({
      id: 'c-' + Date.now(),
      title,
      room,
      freq,
      duration,
      done: false
    });

    this.saveData();
    this.closeModals();
    this.showToast('تمت إضافة مهمة التنظيف 🧹');
    this.renderCleaningTasks();
  }

  openShoppingModal() {
    document.getElementById('form-shopping').reset();
    document.getElementById('shopping-item-category').value = this.currentShoppingCategory;
    document.getElementById('modal-shopping').classList.remove('hidden');
  }

  saveShoppingForm() {
    const name = document.getElementById('shopping-item-name').value.trim();
    const category = document.getElementById('shopping-item-category').value;
    const qty = document.getElementById('shopping-item-qty').value.trim();
    const date = document.getElementById('shopping-item-date').value;
    const note = document.getElementById('shopping-item-note').value.trim();

    if (!name) return;

    if (!this.data.shoppingLists[category]) {
      this.data.shoppingLists[category] = [];
    }

    this.data.shoppingLists[category].push({
      id: 's-' + Date.now(),
      name,
      qty,
      date,
      note,
      bought: false
    });

    this.saveData();
    this.closeModals();
    this.showToast('تم حفظ الغرض في قائمة المشتريات 🛒');
    this.currentShoppingCategory = category;
    
    // Update tabs active state
    document.querySelectorAll('.shopping-category-tabs .shop-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.category === category);
    });

    this.renderShoppingView();
  }

  openSelfCareModal() {
    document.getElementById('form-selfcare').reset();
    document.getElementById('modal-selfcare').classList.remove('hidden');
  }

  saveSelfCareForm() {
    const title = document.getElementById('selfcare-title').value.trim();
    const category = document.getElementById('selfcare-category').value;
    const freq = document.getElementById('selfcare-freq').value;
    const notes = document.getElementById('selfcare-notes').value.trim();

    if (!title) return;

    this.data.selfCareList.push({
      id: 'sc-' + Date.now(),
      title,
      category,
      freq,
      notes,
      done: false,
      reminder: true
    });

    this.saveData();
    this.closeModals();
    this.showToast('تمت إضافة لحظة العناية الخاصة 🌸');
    this.renderSelfCareList();
  }

  // ==========================================================
  // BACKUP & RESTORE / SETTINGS
  // ==========================================================
  exportBackup() {
    const jsonStr = JSON.stringify(this.data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `asmaa-routine-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('تم تنزيل النسخة الاحتياطية بنجاح 💾');
  }

  importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed && parsed.activities && parsed.weeklyMeals) {
          this.data = parsed;
          this.saveData();
          this.closeModals();
          this.showToast('تم استرجاع بياناتك بنجاح ✨');
          this.renderCurrentScreen();
        } else {
          alert('الملف المحدد غير صالح أو غير متوافق.');
        }
      } catch (err) {
        alert('تعذر قراءة ملف النسخة الاحتياطية.');
      }
    };
    reader.readAsText(file);
  }

  resetToDefaults() {
    if (confirm('هل ترغبين باسترجاع جدول الروتين الافتراضي المقترح؟ لن تُمسح بياناتك الخاصة إذا قمتِ بحفظ نسخة احتياطية أولاً.')) {
      this.data = getDefaultData();
      this.saveData();
      this.closeModals();
      this.showToast('تمت استعادة الروتين الافتراضي بنجاح 🌿');
      this.renderCurrentScreen();
    }
  }

  clearAllData() {
    if (confirm('تنبيه: هل أنت متأكدة من مسح جميع المهام والبدء من الصفر تماماً؟')) {
      this.data = {
        quranSession: { startTime: '06:00', duration: 60, repeatDays: ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'], reminder: true, completedDates: {} },
        activities: [],
        cleaningTasks: [],
        weeklyMeals: {},
        shoppingLists: { fridge: [], monthly: [], pantry: [], errands: [] },
        selfCareList: [],
        soundEnabled: true
      };
      this.saveData();
      this.closeModals();
      this.showToast('تم مسح البيانات والبدء من صفحة بيضاء نقية 🌱');
      this.renderCurrentScreen();
    }
  }

  // ==========================================================
  // UTILITIES: GENTLE AUDIO CHIME, TOAST, ESCAPING
  // ==========================================================
  playGentleChime() {
    if (!this.data.soundEnabled) return;
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      // Soothing double harmonic chime (soft warm sound)
      const now = this.audioCtx.currentTime;
      const osc1 = this.audioCtx.createOscillator();
      const osc2 = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, now); // D5
      osc1.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.05); // A5
      osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.25); // D6

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc1.start(now);
      osc2.start(now + 0.05);
      osc1.stop(now + 0.9);
      osc2.stop(now + 0.9);
    } catch (e) {
      console.log('Audio chime not supported or muted');
    }
  }

  showToast(message, icon = '✨') {
    const toast = document.getElementById('toast-bar');
    const msgEl = document.getElementById('toast-msg');
    const iconEl = document.getElementById('toast-icon');

    if (!toast) return;

    msgEl.textContent = message;
    iconEl.textContent = icon;
    toast.classList.remove('hidden');

    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }

  formatTimeArabic(timeStr) {
    if (!timeStr) return '';
    const [h, m] = timeStr.split(':').map(Number);
    const period = h < 12 ? 'ص' : 'م';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${String(displayH).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`;
  }

  escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
}

// Global App Instance
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new AsmaaRoutineApp();
  window.app = app;
});
