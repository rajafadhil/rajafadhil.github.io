/**
 * ==========================================================================
 * PORTFOLIO AHMAD RAJA FADHIL - MAIN JAVASCRIPT (js/main.js)
 * Murni Vanilla JS - Tanpa Framework / Tanpa Build Step
 * ==========================================================================
 */

/* -------------------- 1. PUSAT DATA KONTEN (MUDAH DIEDIT) -------------------- */
const PORTFOLIO_DATA = {
  // Teks bergantian untuk efek mengetik (Typing Effect) di Hero Section
  typingRoles: [
    "Data & BI Enthusiast",
    "Digital CoE Intern at Pegadaian",
    "Microsoft Certified AI & Data",
    "Alibaba Cloud Gen AI Engineer",
    "Full-Stack & AI Developer"
  ],

  // Data Keahlian (Dikelompokkan menjadi 4 kategori sesuai spesifikasi)
  skills: [
    {
      category: "Data Analytics & BI (Core)",
      icon: "bar-chart-3",
      items: [
        { name: "SQL & Google BigQuery", level: 92 },
        { name: "Google Looker Studio & Tableau", level: 95 },
        { name: "Microsoft Power BI & Fabric (DP-600)", level: 88 },
        { name: "Microsoft Excel for BI & Pivot", level: 96 }
      ]
    },
    {
      category: "AI, Machine Learning & Backend",
      icon: "brain-circuit",
      items: [
        { name: "Python (Pandas, Scikit-Learn, XGBoost)", level: 90 },
        { name: "Deep Learning & CNN (TensorFlow)", level: 92 },
        { name: "Generative AI (Azure AI & Alibaba Cloud)", level: 88 },
        { name: "Node.js RESTful API, JWT, Redis, RabbitMQ", level: 86 }
      ]
    },
    {
      category: "Frontend & Web Development",
      icon: "layout-template",
      items: [
        { name: "React.js (Hooks, Context, State Mgmt)", level: 90 },
        { name: "HTML5, CSS3 & Modern JavaScript (ES6+)", level: 92 },
        { name: "Interactive Web App & Dashboard UI", level: 88 },
        { name: "Google Apps Script & Workflow Automation", level: 90 }
      ]
    },
    {
      category: "Tools, Cloud & Soft Skills",
      icon: "Wrench",
      items: [
        { name: "Problem Solving & R&D (PoC Evaluation)", level: 95 },
        { name: "Public Speaking & Persuasive Comm.", level: 90 },
        { name: "Google Colab, Git, GitHub & Orange", level: 92 },
        { name: "Business Process Flow & SOP Optimization", level: 88 }
      ]
    }
  ],

  // Projects list (Supports filter: 'data', 'ai', 'web')
  projects: [
    {
      title: "FraudGuard - Credit Card Fraud Detection",
      organization: "Individual",
      category: "web",
      categoryLabel: "Web & AI",
      description:
        "An end-to-end fraud detection platform integrating a machine learning inference engine with an interactive web dashboard, enabling real-time transaction monitoring and data-driven risk mitigation strategies.",
      tech: ["React.js", "Python", "Random Forest", "Fraud Detection Model"],
      image: "./assets/img/ccfraud.jpg",
      demoUrl: "https://drive.google.com/file/d/1hxMuwsLZJyV2lhSK-j2DZbY66V04jI48/view?usp=drive_link",
      repoUrl: "https://github.com/rajafadhil/fraud-guard"
    },
    {
      title: "Maintify — AI Predictive Maintenance Platform",
      organization: "Asah led by Dicoding (Capstone Project)",
      category: "web",
      categoryLabel: "Web & AI",
      description:
        "Full-stack AI-driven predictive maintenance platform designed for industrial needs (250 engineering hours, module score 94/100). End-to-end integration of React frontend, RESTful API backend, and ML models.",
      tech: ["React.js", "Node.js", "REST API", "Predictive AI"],
      image: "./assets/img/maintify.jpg",
      demoUrl: "https://drive.google.com/file/d/1hxMuwsLZJyV2lhSK-j2DZbY66V04jI48/view?usp=drive_link",
      repoUrl: "https://github.com/deaprima/predictive-maintenance-copilot"
    },
    {
      title: "FAST — Fintech OCR Computer Vision Pipeline",
      organization: "Coding Camp by DBS Foundation",
      category: "ai",
      categoryLabel: "AI & Computer Vision",
      description:
        "Engineered an end-to-end Computer Vision pipeline as Model Builder using custom CNN architecture and TensorFlow (module score 96/100), fully integrated with the team's backend and frontend systems.",
      tech: ["Python", "TensorFlow", "Custom CNN", "OCR"],
      image: "./assets/img/fast.jpg",
      demoUrl: "https://drive.google.com/file/d/1cX3s9lPkEDFGJdyDVnpbdvQYR7swC2qi/view?usp=drive_link",
      repoUrl: "https://github.com/FASTWorks"
    },
    {
      title: "AI-Powered Loan Approval Simulator for MSMEs",
      organization: "Celerates — Data Science & Gen AI",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      description:
        "Interactive web application evaluating MSME creditworthiness with explainable risk metrics. Benchmarked Logistic Regression and Random Forest, deploying XGBoost as top model based on F1-score.",
      tech: ["XGBoost", "Scikit-Learn", "Python", "Gen AI"],
      image: "./assets/img/loanapproval.jpg",
      demoUrl: "https://drive.google.com/file/d/17WhWDURwhszDvcfnNruHOq_iRSxW9TYU/view?usp=drive_link",
      repoUrl: "https://github.com/rajafadhil/loan-approval"
    },
    {
      title: "Big Data Analytics: 1M+ Rows & 600K+ Transactions",
      organization: "PT Kimia Farma Tbk x Rakamin",
      category: "data",
      categoryLabel: "Data & BI",
      description:
        "Managed 1M+ rows of sales, branch performance, and inventory data on Google BigQuery (boosting query efficiency by 30%). Visualized 600K+ transactions in Looker Studio, speeding up strategic decisions by 35%.",
      tech: ["Google BigQuery", "SQL", "Looker Studio", "Data Cleaning"],
      image: "./assets/img/kf-bigdata.jpg",
      demoUrl: "https://drive.google.com/file/d/1Sf56a0CdFYfn1g1otqlCVpY3v3wJNVgp/view?usp=drive_link",
      repoUrl: "https://github.com/rajafadhil/Big-Data-KF-Query"
    },
    {
      title: "BI Sales & Regional Performance Dashboard",
      organization: "PT Bank Muamalat Indonesia Tbk x Rakamin",
      category: "data",
      categoryLabel: "Data & BI",
      description:
        "Consolidated 4 complex datasets (3,300+ rows) into a master table with 100% accuracy using Python & Google Colab, and built interactive Looker Studio dashboards analyzing 11,000+ sales transactions.",
      tech: ["Python", "Google Colab", "Looker Studio", "BI Strategy"],
      image: "./assets/img/bm-sales.jpg",
      demoUrl: "https://drive.google.com/file/d/1OcJAEChQblz5W9FOd4Hjcr2Ffu87pDJR/view?usp=drive_link",
      repoUrl: "https://github.com/rajafadhil/BI-analyst-BM"
    }
  ],

  // 1. Work Experience
  workExperiences: [
    {
      role: "Digital Center of Excellence (CoE) Intern",
      company: "PT Pegadaian",
      period: "Jan 2026 – Present",
      location: "Jakarta Metropolitan Area, Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Evaluated 10+ strategic Proof of Concepts (PoC) with 10+ global technology vendors, accelerating adoption and mitigating potential IT budget inefficiencies by up to 25%.",
        "Engineered real-time dashboards and automated reporting workflows via Looker Studio & Google Apps Script, reducing manual reporting cycles by 40%.",
        "Managed IT infrastructure support tickets with 100% resolution rate and organized division-wide events for 70+ employees achieving 95% satisfaction rate."
      ]
    },
    {
      role: "Data Management Support",
      company: "Ministry of Transportation of the Republic of Indonesia",
      period: "Jul 2025 – Sep 2025",
      location: "Central Jakarta, Indonesia",
      image: "./assets/img/kemenhub2025.jpg",
      points: [
        "Managed and validated 800+ national port data records using Excel & Google Sheets, improving data processing efficiency by 20%.",
        "Optimized data governance SOPs accelerating cross-unit integration by 30%, and mapped system data integration pipelines for SIMPEL, SIPANDU, and SIFASPEL.",
        "Built interactive Tableau dashboards for national port distribution and operational tracking at directorate level."
      ]
    },
    {
      role: "Business Analyst",
      company: "Tape Koe",
      period: "Jun 2024 – Jun 2025",
      location: "Bekasi Regency, West Java, Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Evaluated business performance by conducting financial and sales data analyses, delivering a 25% profitability increase within the first month.",
        "Formulated data-backed business strategies optimizing operational efficiency by 30%, reducing costs by 15%, and supporting 40% annual growth goals."
      ]
    },
    {
      role: "Junior Data Scientist",
      company: "VINIX7",
      period: "Feb 2025 – May 2025",
      location: "Remote",
      image: "./assets/img/vinix7.jpg",
      points: [
        "Analyzed 9 data project modules utilizing Excel, Python, and Tableau from 100+ user responses, cutting insight generation turnaround by 50%.",
        "Developed predictive and segmentation models (regression, k-NN, k-Means) achieving up to 84% accuracy and identifying 3+ distinct user personas."
      ]
    },
    {
      role: "Business Intelligence Analyst (Project-Based Intern)",
      company: "PT Bank Muamalat Indonesia Tbk x Rakamin",
      period: "Feb 2025 – Mar 2025",
      location: "Jakarta, Indonesia",
      image: "./assets/img/bm-cert.jpg",
      points: [
        "Cleaned and engineered 4 transaction datasets (3,300+ rows) with Python & Google Colab at 100% precision, delivering interactive Looker Studio sales performance dashboards for 11,000+ transactions."
      ]
    },
    {
      role: "Big Data Analytics (Project-Based Intern)",
      company: "PT Kimia Farma Tbk x Rakamin",
      period: "Jan 2025 – Feb 2025",
      location: "Jakarta, Indonesia",
      image: "./assets/img/kf-cert.jpg",
      points: [
        "Optimized SQL queries across 1M+ sales records on Google BigQuery (increasing query execution efficiency by 30%) and built multi-dimensional Looker Studio executive dashboards for 600K+ transactions."
      ]
    }
  ],

  // 2. Education
  educations: [
    {
      role: "B.S. in Information Technology (Bachelor's Degree)",
      company: "Telkom University",
      period: "2023 – 2027",
      location: "Jakarta / Bandung, Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Senior undergraduate student focusing on Data Analytics, Business Intelligence, Cloud Computing, and Artificial Intelligence.",
        "Recipient of 3x Best Participant / Top Student Awards in Talent Class (Cloud Computing Batch 15, Data Science Fundamentals Batch 16, Excel for BI Batch 19)."
      ]
    },
    {
      role: "Public Speaking Certification Program",
      company: "PR Institute",
      period: "Sep 2024 – Dec 2024",
      location: "Indonesia",
      image: "./assets/img/prinstitute.jpg",
      points: [
        "Trained in persuasive business communication, executive presentation, and effective data storytelling for cross-functional stakeholders."
      ]
    },
    {
      role: "Digital Communication & Multimedia",
      company: "SMKN 1 Cibinong",
      period: "Jul 2020 – May 2023",
      location: "Bogor Regency, West Java, Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Studied visual communication design fundamentals, digital multimedia production, video editing, and interactive technologies."
      ]
    }
  ],

  // 3. Bootcamp
  bootcamps: [
    {
      role: "AI Engineer Bootcamp (Top 10% Distinction Graduate)",
      company: "Coding Camp powered by DBS Foundation",
      period: "Feb 2026 – Jul 2026",
      location: "Indonesia",
      image: "./assets/img/codingcamp2026.jpg",
      points: [
        "Graduated with Distinction (Top 10% among 2,800 selected participants nationwide) on schedule with exemplary standing.",
        "Scored near-perfect (96/100) in Build Advanced Deep Learning Projects (Custom CNN, Custom Training Loops, Custom Layers/Loss with TensorFlow).",
        "Served as Model Builder for Capstone FAST (Fintech OCR), achieved CEFR B2 (82%) in English, and scored 90/100 across 7 Soft Skills & Career Development modules."
      ]
    },
    {
      role: "React & Back End with AI Bootcamp",
      company: "Asah led by Dicoding",
      period: "Aug 2025 – Jan 2026",
      location: "Indonesia",
      image: "./assets/img/asah2025.jpg",
      points: [
        "Engineered full-stack AI predictive maintenance platform (Maintify) as Capstone Project (250 hours, scored 94/100).",
        "Built Open Music RESTful API using JWT, Redis caching, and RabbitMQ (scored 86/100) and developed interactive React web applications (scored 91/100 & 94/100)."
      ]
    },
    {
      role: "Data Science & Generative AI Bootcamp",
      company: "Celerates",
      period: "Sep 2025 – Dec 2025",
      location: "Indonesia",
      image: "./assets/img/camp2025.jpg",
      points: [
        "Completed rigorous 4-month program with 94.70/100 (Grade A) spanning 7 core modules from exploratory data science to Generative AI.",
        "Designed and published final project 'AI-Powered Loan Approval Simulator for MSMEs' using fine-tuned XGBoost model."
      ]
    }
  ],

  // 4. Organizations
  organizations: [
    {
      role: "Google Student Ambassador",
      company: "Google",
      period: "Oct 2026 – Present",
      location: "Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Selected as Google Student Ambassador bridging Google's technology ecosystem and developer resources with the university student community."
      ]
    },
    {
      role: "Core Team Creative Division",
      company: "Google Developer Student Clubs (GDSC) Telkom University Jakarta",
      period: "Dec 2023 – Dec 2024",
      location: "South Jakarta, Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Actively led creative assets, visual branding, and publication media for student developer initiatives and tech meetups for 1 year."
      ]
    }
  ]
};

/* -------------------- 2. INISIALISASI DOM SAAT HALAMAN DIMUAT -------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSkills();
  renderProjects("all");
  renderTimelines();
  initLucideIcons();
  initNavbarAndScrollSpy();
  initTypingEffect();
  initProjectFilter();
  initTimelineTabs();
  initScrollRevealAndCounters();
  initContactForm();
  updateFooterYear();
});

/* -------------------- 3. RENDER FUNGSI KE DOM -------------------- */

// Memanggil Lucide Icons dari CDN
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

// Render Kartu & Progress Bar Keahlian
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills
    .map(
      (cat) => `
      <article class="skill-category-card reveal-up">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">
            <i data-lucide="${cat.icon}"></i>
          </div>
          <h3 class="skill-cat-title">${cat.category}</h3>
        </div>
        <div class="skill-items-list">
          ${cat.items
          .map(
            (skill) => `
            <div class="skill-item">
              <div class="skill-item-top">
                <span>${skill.name}</span>
                <span class="skill-percent">${skill.level}%</span>
              </div>
              <div class="skill-bar-track" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name} skill level">
                <div class="skill-bar-fill" data-width="${skill.level}%"></div>
              </div>
            </div>
          `
          )
          .join("")}
        </div>
      </article>
    `
    )
    .join("");
}

// Render Project Cards by Category Filter
function renderProjects(filterCategory = "all") {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  const filtered =
    filterCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filterCategory);

  container.innerHTML = filtered
    .map(
      (project) => `
      <article class="project-card reveal-up revealed">
        <div class="project-thumb">
          <span class="project-category-badge">${project.categoryLabel}</span>
          <img 
            src="${project.image}" 
            alt="Preview of ${project.title}" 
            loading="lazy" 
            width="400" 
            height="220"
          />
        </div>
        <div class="project-body">
          <span class="project-org">${project.organization}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${project.demoUrl}" ${project.demoUrl.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="project-link-btn link-demo" aria-label="View demo or details of ${project.title}">
              <i data-lucide="external-link"></i>
              <span>View Project</span>
            </a>
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn link-repo" aria-label="Open GitHub repository for ${project.title}">
              <i data-lucide="github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  initLucideIcons();
}

// Render Timeline for Work Experience, Education, Bootcamp & Organization
function renderTimelines() {
  const workContainer = document.getElementById("workTimeline");
  const eduContainer = document.getElementById("educationTimeline");
  const bootContainer = document.getElementById("bootcampTimeline");
  const orgContainer = document.getElementById("organizationTimeline");

  const createTimelineHTML = (items) =>
    (items || [])
      .map(
        (item) => `
      <div class="timeline-item reveal-up">
        <span class="timeline-dot" aria-hidden="true"></span>
        <article class="timeline-card">
          <div class="timeline-card-main">
            <div class="timeline-card-info">
              <div class="timeline-header">
                <div>
                  <h3 class="timeline-role">${item.role}</h3>
                  <p class="timeline-company">${item.company}</p>
                </div>
                <span class="timeline-period">
                  <i data-lucide="calendar"></i> ${item.period}
                </span>
              </div>
              <p class="timeline-location">📍 ${item.location}</p>
              <ul class="timeline-points">
                ${item.points.map((pt) => `<li>${pt}</li>`).join("")}
              </ul>
            </div>
            <div class="timeline-card-media">
              <div class="timeline-img-box">
                <img 
                  src="${item.image || './assets/img/experience-placeholder.svg'}" 
                  alt="Documentation of ${item.role} - ${item.company}" 
                  class="timeline-img" 
                  loading="lazy"
                />
                <span class="timeline-img-badge">
                  <i data-lucide="image"></i> Media
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    `
      )
      .join("");

  if (workContainer) workContainer.innerHTML = createTimelineHTML(PORTFOLIO_DATA.workExperiences);
  if (eduContainer) eduContainer.innerHTML = createTimelineHTML(PORTFOLIO_DATA.educations);
  if (bootContainer) bootContainer.innerHTML = createTimelineHTML(PORTFOLIO_DATA.bootcamps);
  if (orgContainer) orgContainer.innerHTML = createTimelineHTML(PORTFOLIO_DATA.organizations);

  initLucideIcons();
}

/* -------------------- 4. FITUR TEMA DARK / LIGHT MODE -------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("rf_portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme = savedTheme ? savedTheme : prefersDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("rf_portfolio_theme", nextTheme);
    });
  }
}

/* -------------------- 5. NAVBAR, HAMBURGER & SCROLL-SPY -------------------- */
function initNavbarAndScrollSpy() {
  const navbarHeader = document.getElementById("navbarHeader");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const sections = document.querySelectorAll("main section[id]");

  // Toggle Menu Mobile
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Tutup menu saat link diklik di mobile
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Event Scroll: Progress Bar, Bayangan Navbar & Scroll-Spy
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;

      // 1. Bayangan Navbar
      if (navbarHeader) {
        navbarHeader.classList.toggle("scrolled", scrollY > 20);
      }

      // 2. Progress Bar di Atas Halaman
      if (scrollProgressBar) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }

      // 3. Scroll-Spy (Update Active Link)
      let currentSectionId = "home";
      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop - 130;
        const sectionHeight = sec.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = sec.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${currentSectionId}`);
      });
    },
    { passive: true }
  );
}

/* -------------------- 6. EFEK MENGETIK (TYPING EFFECT) DI HERO -------------------- */
function initTypingEffect() {
  const typingElement = document.getElementById("typingText");
  if (!typingElement) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const roles = PORTFOLIO_DATA.typingRoles;

  if (prefersReducedMotion) {
    typingElement.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      typingElement.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      typingElement.textContent = currentRole.substring(0, charIndex);
    }

    let speed = isDeleting ? 40 : 85;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2000; // Jeda saat kalimat selesai diketik
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeLoop, speed);
  }

  setTimeout(typeLoop, 800);
}

/* -------------------- 7. FILTER KATEGORI PROYEK -------------------- */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filterValue = btn.getAttribute("data-filter") || "all";
      renderProjects(filterValue);
    });
  });
}

/* -------------------- 8. TAB PENGALAMAN, PENDIDIKAN, BOOTCAMP & ORGANISASI -------------------- */
function initTimelineTabs() {
  const tabBtns = document.querySelectorAll(".timeline-tab-btn");
  const timelines = document.querySelectorAll(".timeline-wrapper");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      timelines.forEach((tl) => {
        const isActive = tl.id === targetId;
        tl.classList.toggle("active", isActive);
        if (isActive) {
          // Pastikan item di timeline yang baru aktif langsung muncul mulus
          tl.querySelectorAll(".timeline-item").forEach((item) => {
            item.classList.add("revealed");
          });
        }
      });

      initLucideIcons();
    });
  });
}

/* -------------------- 9. INTERSECTION OBSERVER (REVEAL, SKILL BAR & COUNT-UP) -------------------- */
function initScrollRevealAndCounters() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = document.querySelectorAll(".reveal-up");
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  const statNumbers = document.querySelectorAll(".stat-number");

  // Jika pengguna mengaktifkan reduced motion, tampilkan langsung tanpa animasi
  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("revealed"));
    skillBars.forEach((bar) => {
      bar.style.width = bar.getAttribute("data-width") || "90%";
    });
    statNumbers.forEach((num) => {
      num.textContent = num.getAttribute("data-target") || "0";
    });
    return;
  }

  // 1. Observer untuk efek muncul (Fade/Slide-Up)
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // 2. Observer untuk animasi lebar Progress Bar Keahlian
  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute("data-width");
          if (targetWidth) entry.target.style.width = targetWidth;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillBars.forEach((bar) => skillObserver.observe(bar));

  // 3. Observer untuk angka Count-Up Statistik
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target") || "0", 10);
          let current = 0;
          const duration = 1400;
          const stepTime = Math.max(25, Math.floor(duration / Math.max(target, 1)));

          const timer = setInterval(() => {
            current += 1;
            el.textContent = String(current);
            if (current >= target) {
              el.textContent = String(target);
              clearInterval(timer);
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((num) => counterObserver.observe(num));
}

/* -------------------- 10. PENANGANAN FORM KONTAK (WEB3FORMS / FALLBACK MAILTO) -------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const accessKeyInput = document.getElementById("web3formsKey");

  if (!form || !statusEl) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const subject = document.getElementById("messageSubject").value.trim();
    const message = document.getElementById("senderMessage").value.trim();

    if (!name || !email || !subject || !message) {
      statusEl.textContent = "Please complete all required fields (*).";
      statusEl.style.color = "#D9534F";
      return;
    }

    const accessKey = accessKeyInput ? accessKeyInput.value.trim() : "";

    // If Web3Forms Access Key is provided, submit through static API
    if (accessKey !== "") {
      statusEl.textContent = "Sending message...";
      statusEl.style.color = "var(--secondary)";

      try {
        const formData = new FormData(form);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          statusEl.textContent = "Thank you! Your message has been sent successfully.";
          statusEl.style.color = "var(--primary)";
          form.reset();
        } else {
          throw new Error("Failed to send.");
        }
      } catch (err) {
        statusEl.textContent = "Network error encountered, opening your email app...";
        openMailtoFallback(name, email, subject, message);
      }
    } else {
      // Default Fallback: open default mail client (mailto:)
      statusEl.textContent = "Opening your email app to send the message...";
      statusEl.style.color = "var(--primary)";
      openMailtoFallback(name, email, subject, message);
      form.reset();
    }
  });
}

function openMailtoFallback(name, email, subject, message) {
  const recipient = "fadhilahmadraja@gmail.com";
  const body = `Hi Ahmad Raja Fadhil,\n\nMy name is ${name} (${email}) and I would like to reach out regarding:\n\n${message}\n\nWarm regards,\n${name}`;
  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}

/* -------------------- 11. UPDATE TAHUN HAK CIPTA OTOMATIS -------------------- */
function updateFooterYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}