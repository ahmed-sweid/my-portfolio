/* ============================================
   LUMINOUS MONO — Portfolio Script
   Animations & Interactivity
   ============================================ */

const translations = {
  en: {
    langToggle: "AR",
    navAbout: "About",
    navExperience: "Practice",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    heroLabel: "Flutter Developer",
    heroName: "Ahmed<br>Sweid",
    heroTagline: "Flutter Developer and first-year Informatics Engineering student at the University of Aleppo, focused on building mobile applications with Flutter and Dart.",
    statYears: "Framework",
    statProjects: "Language",
    statMentored: "Focus",
    heroBtnProjects: "View Projects",
    heroBtnContact: "Get in Touch",
    scrollText: "Scroll",
    aboutLabel: "About",
    aboutTitle: "A Little About Me",
    about1: "I’m Ahmed Sweid, a Flutter developer focused on building mobile applications with <strong>Flutter and Dart</strong>.",
    about2: "I work with state management tools such as <strong>Cubit/BLoC and GetX</strong>, and practice maintainable code with Clean Architecture and SOLID principles.",
    about3: "I’m continuing to strengthen my software engineering skills through personal projects and team collaboration, and I’m interested in <strong>internship and junior Flutter opportunities</strong>.",
    expLabel: "Practice",
    expTitle: "Learning & Collaboration",
    exp1Title: "Independent Flutter Development",
    exp1Company: "Self-directed learning and practice",
    exp1Date: "Ongoing",
    exp1Details: "<li>Building mobile applications with <strong>Flutter and Dart</strong></li><li>Practicing state management with Cubit/BLoC and GetX</li><li>Applying Clean Architecture and SOLID principles where appropriate</li><li>Improving code quality through regular practice and project work</li>",
    exp2Title: "Team Project Participation",
    exp2Company: "Etmaen · Startup Syria",
    exp2Date: "Year to be confirmed",
    exp2Details: "<li>Participated in a team project called <strong>Etmaen</strong></li><li>The project focuses on an Arabic-first psychological support concept</li><li>Project participation is being documented for an accurate portfolio description</li><li>Further details about my specific contribution will be added after confirmation</li>",
    projLabel: "Projects",
    projTitle: "Project Portfolio",
    proj1Title: "Etmaen",
    proj1Desc: "Team project focused on an Arabic-first psychological support concept. My exact responsibilities and the project timeline will be added after confirmation.",
    proj2Title: "Project Details Pending",
    proj2Desc: "Project details are being reviewed so the portfolio can accurately describe the goal, features, and my contribution.",
    proj3Title: "Project Details Pending",
    proj3Desc: "Project details are being reviewed so the portfolio can accurately describe the goal, features, and my contribution.",
    proj4Title: "Project Details Pending",
    proj4Desc: "Project details are being reviewed so the portfolio can accurately describe the goal, features, and my contribution.",
    proj5Title: "Project Details Pending",
    proj5Desc: "Project details are being reviewed so the portfolio can accurately describe the goal, features, and my contribution.",
    proj6Title: "Project Details Pending",
    proj6Desc: "Project details are being reviewed so the portfolio can accurately describe the goal, features, and my contribution.",
    skillsLabel: "Skills",
    skillsTitle: "Tools & Technologies",
    skillLang: "Core Technologies",
    skillFrameworks: "Frameworks & Architecture",
    skillCloud: "APIs & Backend Services",
    skillDb: "Data Platforms",
    skillTools: "Development Tools",
    skillSpecial: "Areas of Focus",
    eduLabel: "Education",
    eduTitle: "Current Studies",
    eduDegree: "Informatics Engineering",
    eduSchool: "Faculty of Informatics Engineering, University of Aleppo",
    eduMeta: "First-year student · Aleppo, Syria",
    eduCourses: "Focus Areas:",
    leadLabel: "Beyond Code",
    leadTitle: "Learning & Collaboration",
    lead1Title: "Continuous Learning",
    lead1Desc: "Developing Flutter and Dart skills through <strong>self-directed practice</strong>, reading, and building mobile app features.",
    lead2Title: "Team Collaboration",
    lead2Desc: "Learning to contribute clearly in a shared project environment, communicate progress, and document responsibilities accurately.",
    lead3Title: "Hackathon Participation",
    lead3Desc: "Participated in the team project <strong>Etmaen</strong>, associated with Startup Syria. The year and my specific contribution will be confirmed before publishing.",
    contactLabel: "Contact",
    contactTitle: "Let's Connect",
    contactDesc: "I’m interested in internship and junior Flutter opportunities, team collaboration, and continuing to learn through practical mobile development.",
    footer: "&copy; 2026 Ahmed Sweid. Flutter Developer.",
  },
  ar: {
    langToggle: "EN",
    navAbout: "نبذة عني",
    navExperience: "التجربة العملية",
    navProjects: "المشاريع",
    navSkills: "المهارات",
    navContact: "تواصل",
    heroLabel: "مطور Flutter",
    heroName: "أحمد<br>سويد",
    heroTagline: "مطور Flutter وطالب في السنة الأولى في كلية الهندسة المعلوماتية بجامعة حلب، أركز على بناء تطبيقات الهاتف باستخدام Flutter وDart.",
    statYears: "الإطار البرمجي",
    statProjects: "لغة البرمجة",
    statMentored: "مجال التركيز",
    heroBtnProjects: "عرض المشاريع",
    heroBtnContact: "تواصل معي",
    scrollText: "مرر للأسفل",
    aboutLabel: "نبذة عني",
    aboutTitle: "نبذة مختصرة",
    about1: "أنا أحمد سويد، مطور Flutter أركز على بناء تطبيقات الهاتف باستخدام <strong>Flutter وDart</strong>.",
    about2: "أعمل على إدارة الحالة باستخدام أدوات مثل <strong>Cubit/BLoC وGetX</strong>، وأهتم بكتابة كود قابل للصيانة وفق مبادئ Clean Architecture وSOLID.",
    about3: "أواصل تطوير مهاراتي في هندسة البرمجيات من خلال المشاريع والتعاون ضمن الفرق، وأهتم بفرص <strong>التدريب أو وظائف Flutter للمبتدئين</strong>.",
    expLabel: "التجربة العملية",
    expTitle: "التعلّم والتعاون",
    exp1Title: "التطوير والتعلّم المستقل",
    exp1Company: "تعلّم وتطبيق ذاتي",
    exp1Date: "مستمر",
    exp1Details: "<li>بناء تطبيقات الهاتف باستخدام <strong>Flutter وDart</strong></li><li>التدرّب على إدارة الحالة باستخدام Cubit/BLoC وGetX</li><li>تطبيق مبادئ Clean Architecture وSOLID عند الحاجة</li><li>تحسين جودة الكود عبر الممارسة والعمل على المشاريع</li>",
    exp2Title: "المشاركة في مشروع جماعي",
    exp2Company: "Etmaen · Startup Syria",
    exp2Date: "السنة قيد التأكيد",
    exp2Details: "<li>المشاركة في مشروع جماعي باسم <strong>Etmaen</strong></li><li>يركز المشروع على فكرة دعم نفسي باللغة العربية</li><li>أعمل على توثيق المشاركة لصياغة وصف دقيق للمشروع في الملف المهني</li><li>ستضاف تفاصيل دوري بعد التأكد منها</li>",
    projLabel: "المشاريع",
    projTitle: "مشاريع وأعمال",
    proj1Title: "Etmaen",
    proj1Desc: "مشروع جماعي يركز على فكرة دعم نفسي باللغة العربية. ستضاف تفاصيل دوري المحدد والجدول الزمني بعد التأكد منهما.",
    proj2Title: "تفاصيل المشروع قيد الإعداد",
    proj2Desc: "تتم مراجعة تفاصيل المشروع لكتابة وصف دقيق لهدفه وميزاته ومساهمتي فيه.",
    proj3Title: "تفاصيل المشروع قيد الإعداد",
    proj3Desc: "تتم مراجعة تفاصيل المشروع لكتابة وصف دقيق لهدفه وميزاته ومساهمتي فيه.",
    proj4Title: "تفاصيل المشروع قيد الإعداد",
    proj4Desc: "تتم مراجعة تفاصيل المشروع لكتابة وصف دقيق لهدفه وميزاته ومساهمتي فيه.",
    proj5Title: "تفاصيل المشروع قيد الإعداد",
    proj5Desc: "تتم مراجعة تفاصيل المشروع لكتابة وصف دقيق لهدفه وميزاته ومساهمتي فيه.",
    proj6Title: "تفاصيل المشروع قيد الإعداد",
    proj6Desc: "تتم مراجعة تفاصيل المشروع لكتابة وصف دقيق لهدفه وميزاته ومساهمتي فيه.",
    skillsLabel: "المهارات",
    skillsTitle: "الأدوات والتقنيات",
    skillLang: "التقنيات الأساسية",
    skillFrameworks: "الأطر وبنية التطبيقات",
    skillCloud: "واجهات API والخدمات الخلفية",
    skillDb: "منصات البيانات",
    skillTools: "أدوات التطوير",
    skillSpecial: "مجالات التركيز",
    eduLabel: "التعليم",
    eduTitle: "الدراسة الحالية",
    eduDegree: "الهندسة المعلوماتية",
    eduSchool: "كلية الهندسة المعلوماتية، جامعة حلب",
    eduMeta: "طالب في السنة الأولى · حلب، سوريا",
    eduCourses: "مجالات التركيز:",
    leadLabel: "ما وراء البرمجة",
    leadTitle: "التعلّم والتعاون",
    lead1Title: "التعلّم المستمر",
    lead1Desc: "أطوّر مهاراتي في Flutter وDart من خلال <strong>التعلّم الذاتي</strong> والقراءة وبناء ميزات لتطبيقات الهاتف.",
    lead2Title: "التعاون ضمن الفريق",
    lead2Desc: "أتعلم المساهمة بوضوح في المشاريع الجماعية، ومشاركة التقدم، وتوثيق المسؤوليات بدقة.",
    lead3Title: "المشاركة في هاكاثون",
    lead3Desc: "شاركت في المشروع الجماعي <strong>Etmaen</strong> المرتبط بـ Startup Syria. سيتم تأكيد السنة وتفاصيل مساهمتي قبل نشرها.",
    contactLabel: "تواصل",
    contactTitle: "لنتواصل",
    contactDesc: "أهتم بفرص التدريب ووظائف Flutter للمبتدئين، والتعاون ضمن الفرق، ومواصلة التعلّم من خلال تطوير تطبيقات الهاتف عملياً.",
    footer: "&copy; 2026 أحمد سويد. مطور Flutter.",
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('lang') || 'en';
  let currentTheme = localStorage.getItem('theme') || 'light';

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  setTheme(currentTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'UL') {
          el.innerHTML = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
  }

  setLanguage(currentLang);

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  /* --- Navbar Scroll Effect --- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile Nav Toggle --- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* --- Scroll Reveal (Intersection Observer) --- */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* --- Counter Animation --- */
  const counters = document.querySelectorAll('.stat-number[data-count]');

  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const max = parseInt(target.getAttribute('data-count'), 10);
          animateCounter(target, max);
          counterObserver.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  function animateCounter(element, max) {
    const duration = 1500;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * max);
      element.textContent = current + '+';

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = max + '+';
      }
    }

    requestAnimationFrame(update);
  }

  /* --- Smooth scroll for anchor links (fallback) --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  /* --- Parallax effect on hero --- */
  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');

  if (hero && heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      const heroHeight = hero.offsetHeight;
      if (scrollY <= heroHeight) {
        const progress = scrollY / heroHeight;
        heroBg.style.transform = `translateY(${progress * 30}px)`;
        heroBg.style.opacity = 1 - progress * 0.5;
      }
    }, { passive: true });
  }

  /* --- Mouse move parallax on photo frame --- */
  const photoFrame = document.querySelector('.photo-frame');

  if (photoFrame) {
    photoFrame.addEventListener('mousemove', (e) => {
      const rect = photoFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -6;
      const rotateY = (x - centerX) / centerX * 6;
      photoFrame.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    photoFrame.addEventListener('mouseleave', () => {
      photoFrame.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
    });
  }

});
