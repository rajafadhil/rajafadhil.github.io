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

  // Daftar Proyek (Mendukung filter: 'data', 'ai', 'web')
  projects: [
    {
      title: "FraudGuard - Credit Card Fraud Detection",
      organization: "Individual",
      category: "web",
      categoryLabel: "Web & AI",
      description:
        "FraudGuard is a comprehensive fraud detection and prevention system that combines a real-time fraud detection model with an interactive dashboard. The system is designed to identify and analyze fraudulent activities using advanced machine learning techniques, providing users with actionable insights to mitigate risks.",
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
        "Platform predictive maintenance full-stack berbasis AI untuk kebutuhan industri (250 jam pengembangan, nilai 94/100). Mengintegrasikan frontend React, backend RESTful API, dan model machine learning secara end-to-end.",
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
        "Membangun pipeline Computer Vision end-to-end sebagai Model Builder menggunakan arsitektur Custom CNN dan TensorFlow (skor modul 96/100), terintegrasi penuh dengan sistem backend dan frontend tim.",
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
        "Aplikasi web interaktif untuk memprediksi kelayakan pinjaman UMKM beserta penjelasan berbasis risiko. Mengevaluasi Logistic Regression, Random Forest, dan memilih XGBoost sebagai model terbaik berdasarkan F1-score.",
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
        "Mengelola 1 juta+ baris data penjualan, performa cabang, dan inventaris di Google BigQuery (efisiensi naik 30%). Memvisualisasikan 600.000+ transaksi di Looker Studio yang mempercepat pengambilan keputusan bisnis hingga 35%.",
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
        "Mengintegrasikan 4 dataset (3.300+ baris) menjadi master table dengan akurasi 100% di Google Colab & Python, serta membangun dashboard interaktif Looker Studio untuk 11.000+ transaksi penjualan.",
      tech: ["Python", "Google Colab", "Looker Studio", "BI Strategy"],
      image: "./assets/img/bm-sales.jpg",
      demoUrl: "https://drive.google.com/file/d/1OcJAEChQblz5W9FOd4Hjcr2Ffu87pDJR/view?usp=drive_link",
      repoUrl: "https://github.com/rajafadhil/BI-analyst-BM"
    }
  ],

  // 1. Pengalaman Kerja
  workExperiences: [
    {
      role: "Digital Center of Excellence (CoE) Intern",
      company: "PT Pegadaian",
      period: "Jan 2026 – Sekarang",
      location: "Jakarta Metropolitan Area",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Mengevaluasi lebih dari 10 Proof of Concept (PoC) strategis bersama 10+ vendor global, mempercepat adopsi teknologi tepat guna dan berpotensi menekan inefisiensi anggaran IT hingga 25%.",
        "Mengembangkan dashboard real-time dan otomatisasi workflow dengan Looker Studio & Apps Script, memangkas waktu pelaporan manual hingga 40%.",
        "Mengelola penyelesaian tiket infrastruktur IT dengan tingkat keberhasilan 100% serta mengoordinasikan acara divisi berskala 70+ karyawan dengan tingkat kepuasan 95%."
      ]
    },
    {
      role: "Data Management Support",
      company: "Kementerian Perhubungan Republik Indonesia",
      period: "Jul 2025 – Sep 2025",
      location: "Jakarta Pusat, Indonesia",
      image: "./assets/img/kemenhub2025.jpg",
      points: [
        "Mengelola dan memvalidasi 800+ baris data pelabuhan nasional menggunakan Excel & Google Sheets (efisiensi pengolahan data naik 20%).",
        "Mengoptimalkan SOP manajemen data yang mempercepat integrasi lintas unit sebesar 30%, serta merancang alur integrasi sistem SIMPEL, SIPANDU, dan SIFASPEL.",
        "Membangun dashboard interaktif menggunakan Tableau untuk visualisasi distribusi pelabuhan Indonesia di tingkat direktorat."
      ]
    },
    {
      role: "Business Analyst",
      company: "Tape Koe",
      period: "Jun 2024 – Jun 2025",
      location: "Kab. Bekasi, Jawa Barat",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Mengevaluasi performa bisnis melalui analisis data keuangan dan penjualan yang menghasilkan peningkatan profitabilitas sebesar 25% pada bulan pertama.",
        "Menyusun strategi bisnis terarah yang meningkatkan efisiensi operasional sebesar 30%, menekan biaya 15%, dan mendukung target pertumbuhan tahunan 40%."
      ]
    },
    {
      role: "Junior Data Scientist",
      company: "VINIX7",
      period: "Feb 2025 – Mei 2025",
      location: "Remote",
      image: "./assets/img/vinix7.jpg",
      points: [
        "Menganalisis 9 modul proyek data menggunakan Excel, Python, dan Tableau dari 100+ respons pengguna (mempercepat interpretasi data hingga 50%).",
        "Membangun model prediktif (regresi, k-NN, k-Means) dengan Orange & Python yang mencapai akurasi hingga 84% dan menghasilkan 3+ segmen pengguna."
      ]
    },
    {
      role: "Business Intelligence Analyst (Project-Based Intern)",
      company: "PT Bank Muamalat Indonesia Tbk x Rakamin",
      period: "Feb 2025 – Mar 2025",
      location: "Jakarta, Indonesia",
      image: "./assets/img/bm-cert.jpg",
      points: [
        "Mengelola 4 dataset (3.300+ baris) menggunakan Python & Google Colab dengan akurasi 100% dan membangun dashboard Looker Studio untuk 11.000+ transaksi penjualan."
      ]
    },
    {
      role: "Big Data Analytics (Project-Based Intern)",
      company: "PT Kimia Farma Tbk x Rakamin",
      period: "Jan 2025 – Feb 2025",
      location: "Jakarta, Indonesia",
      image: "./assets/img/kf-cert.jpg",
      points: [
        "Mengoptimalkan query SQL atas 1 juta+ baris data di Google BigQuery (efisiensi naik 30%) dan memvisualisasikan 600.000+ transaksi di Looker Studio."
      ]
    }
  ],

  // 2. Pendidikan
  educations: [
    {
      role: "S1 Teknologi Informasi (Bachelor's Degree)",
      company: "Universitas Telkom (Telkom University)",
      period: "2023 – 2027",
      location: "Jakarta / Bandung, Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Mahasiswa tingkat akhir dengan fokus pada Data Analytics, Business Intelligence, Cloud Computing, dan Artificial Intelligence.",
        "Peraih 3x penghargaan Best Participant/Student di Talent Class (Cloud Computing Batch 15, Data Science Batch 16, Excel for BI Batch 19)."
      ]
    },
    {
      role: "Public Speaking Certification Program",
      company: "PR Institute",
      period: "Sep 2024 – Des 2024",
      location: "Indonesia",
      image: "./assets/img/prinstitute.jpg",
      points: [
        "Mempelajari komunikasi persuasif, presentasi eksekutif, dan penyampaian insight data secara efektif kepada pemangku kepentingan."
      ]
    },
    {
      role: "Komunikasi Digital dan Media / Multimedia",
      company: "SMKN 1 Cibinong",
      period: "Jul 2020 – Mei 2023",
      location: "Kab. Bogor, Jawa Barat",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Mempelajari dasar desain komunikasi visual, produksi multimedia, pengolahan video, dan teknologi digital."
      ]
    }
  ],

  // 3. Bootcamp (Cohort diubah menjadi Bootcamp)
  bootcamps: [
    {
      role: "AI Engineer Bootcamp (Top 10% Distinction Graduate)",
      company: "Coding Camp powered by DBS Foundation",
      period: "Feb 2026 – Jul 2026",
      location: "Indonesia",
      image: "./assets/img/codingcamp2026.jpg",
      points: [
        "Lulus dengan predikat Distinction (Top 10% dari 2.800 peserta terpilih) tepat waktu tanpa catatan pelanggaran.",
        "Meraih nilai hampir sempurna (96/100) pada modul Build Advanced Deep Learning Projects (Custom CNN, Custom Training Loop, Custom Layers/Loss dengan TensorFlow).",
        "Berperan sebagai Model Builder pada proyek Capstone FAST (Fintech OCR) dan meraih skor CEFR B2 (82%) serta nilai 90/100 pada 7 modul Soft Skills & Career Development."
      ]
    },
    {
      role: "React & Back End with AI Bootcamp",
      company: "Asah led by Dicoding",
      period: "Agu 2025 – Jan 2026",
      location: "Indonesia",
      image: "./assets/img/asah2025.jpg",
      points: [
        "Mengembangkan platform full-stack predictive maintenance berbasis AI (Maintify) sebagai Capstone Project (250 jam, skor 94/100).",
        "Membangun Open Music RESTful API dengan JWT, Redis caching, dan RabbitMQ (skor 86/100) serta aplikasi web React interaktif (skor 91/100 & 94/100)."
      ]
    },
    {
      role: "Data Science & Generative AI Bootcamp",
      company: "Celerates",
      period: "Sep 2025 – Des 2025",
      location: "Indonesia",
      image: "./assets/img/camp2025.jpg",
      points: [
        "Menyelesaikan program intensif 4 bulan dengan nilai akhir 94.70 (Grade A) mencakup 7 modul inti Data Science hingga Generative AI.",
        "Merancang dan merilis proyek akhir 'AI-Powered Loan Approval Simulator for MSMEs' menggunakan model terbaik XGBoost."
      ]
    }
  ],

  // 4. Organisasi
  organizations: [
    {
      role: "Google Student Ambassador",
      company: "Google",
      period: "Okt 2026 – Sekarang",
      location: "Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Terpilih sebagai Google Student Ambassador yang menjembatani ekosistem teknologi Google dengan komunitas mahasiswa di kampus."
      ]
    },
    {
      role: "Core Team Creative Division",
      company: "Google Developer Student Clubs (GDSC) Telkom University Jakarta",
      period: "Des 2023 – Des 2024",
      location: "Jakarta Selatan, Indonesia",
      image: "./assets/img/experience-placeholder.svg",
      points: [
        "Aktif mengelola kebutuhan kreatif, branding visual, dan publikasi kegiatan komunitas developer mahasiswa selama 1 tahun."
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
              <div class="skill-bar-track" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="Keahlian ${skill.name}">
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

// Render Kartu Proyek berdasarkan Filter Kategori
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
            alt="Ilustrasi proyek ${project.title}" 
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
            <a href="${project.demoUrl}" ${project.demoUrl.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="project-link-btn link-demo" aria-label="Lihat detail atau demo ${project.title}">
              <i data-lucide="external-link"></i>
              <span>Lihat Proyek</span>
            </a>
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn link-repo" aria-label="Buka repositori GitHub ${project.title}">
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

// Render Timeline Pengalaman Kerja, Pendidikan, Bootcamp & Organisasi
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
                  alt="Dokumentasi ${item.role} - ${item.company}" 
                  class="timeline-img" 
                  loading="lazy"
                />
                <span class="timeline-img-badge">
                  <i data-lucide="image"></i> Dokumentasi
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

      // 3. Scroll-Spy (Update Link Aktif)
      let currentSectionId = "beranda";
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
      statusEl.textContent = "Mohon lengkapi seluruh kolom yang wajib diisi (*).";
      statusEl.style.color = "#D9534F";
      return;
    }

    const accessKey = accessKeyInput ? accessKeyInput.value.trim() : "";

    // Jika Access Key Web3Forms sudah diisi oleh pemilik web, kirim via API statis
    if (accessKey !== "") {
      statusEl.textContent = "Sedang mengirim pesan...";
      statusEl.style.color = "var(--secondary)";

      try {
        const formData = new FormData(form);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          statusEl.textContent = "Terima kasih! Pesan Anda berhasil terkirim.";
          statusEl.style.color = "var(--primary)";
          form.reset();
        } else {
          throw new Error("Gagal mengirim.");
        }
      } catch (err) {
        statusEl.textContent = "Terjadi kendala jaringan, mengalihkan ke aplikasi email...";
        openMailtoFallback(name, email, subject, message);
      }
    } else {
      // Default Fallback: langsung buka aplikasi email pengguna (mailto:) tanpa perlu backend
      statusEl.textContent = "Membuka aplikasi email Anda untuk mengirim pesan...";
      statusEl.style.color = "var(--primary)";
      openMailtoFallback(name, email, subject, message);
      form.reset();
    }
  });
}

function openMailtoFallback(name, email, subject, message) {
  const recipient = "fadhilahmadraja@gmail.com";
  const body = `Halo Ahmad Raja Fadhil,\n\nSaya ${name} (${email}) ingin menyampaikan pesan:\n\n${message}\n\nSalam hangat,\n${name}`;
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