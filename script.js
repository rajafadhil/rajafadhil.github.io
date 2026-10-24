/* ============================================================
   FILE 3 dari 3 : script.js
   ============================================================
   PENTING — cara membuat file:
   1. Buat file baru bernama : script.js
   2. Copy SEMUA isi di bawah ini ke dalam file tersebut.
   3. JANGAN mencampur HTML (index.html) atau CSS (style.css)
      ke dalam file ini.

   Fitur:
   - Placeholder gambar otomatis (img dengan atribut data-ph)
   - Menu mobile (hamburger)
   - Navbar sticky + efek scroll
   - Sistem tab (Journey & Trophy Room)
   - Slider gambar Swiper di setiap item Journey
   - Animasi reveal saat scroll
   - Highlight menu aktif
   - Tombol back-to-top
   - Tahun otomatis di footer
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  setupPlaceholderImages();
  setupMobileMenu();
  setupNavbarOnScroll();
  setupTabSystem();
  setupJourneySwipers();
  setupScrollReveal();
  setupActiveNavHighlight();
  setupBackToTopButton();
  setupFooterYear();
});

/* ---------- Placeholder gambar otomatis ----------
   Semua <img data-ph="..."> akan diisi gambar placeholder SVG.
   Cara ganti ke gambar asli nanti:
   ubah  <img data-ph="team" src="about:blank" alt="..." />
   jadi  <img src="images/foto-kamu.jpg" alt="..." />
--------------------------------------------------- */
function setupPlaceholderImages() {
  const placeholderImageElements = document.querySelectorAll("img[data-ph]");

  const placeholderLabelMap = {
    profile: "PROFILE PHOTO",
    dashboard: "DASHBOARD PREVIEW",
    ai: "AI / COMPUTER VISION",
    code: "CODE / API",
    team: "ACTIVITY PHOTO",
    cert: "CERTIFICATE"
  };

  placeholderImageElements.forEach(function (placeholderImageItem) {
    const placeholderType = placeholderImageItem.getAttribute("data-ph") || "image";
    const placeholderLabel = placeholderLabelMap[placeholderType] || "IMAGE PREVIEW";
    placeholderImageItem.src = buildPlaceholderDataUri(placeholderLabel);
  });
}

function buildPlaceholderDataUri(labelText) {
  const svgMarkup =
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">' +
    '<defs>' +
    '  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '    <stop offset="0%" stop-color="#f0f7fb"/>' +
    '    <stop offset="100%" stop-color="#e0f0f8"/>' +
    '  </linearGradient>' +
    '  <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '    <stop offset="0%" stop-color="#086288"/>' +
    '    <stop offset="100%" stop-color="#4D8DBA"/>' +
    '  </linearGradient>' +
    '</defs>' +
    '<rect width="1200" height="750" fill="url(#bgGrad)"/>' +
    '<rect x="30" y="30" width="1140" height="690" rx="20" fill="none" stroke="#97D7FF" stroke-width="2.5" stroke-dasharray="14 10" opacity="0.8"/>' +
    '<!-- Subtle Tech Mesh -->' +
    '<circle cx="600" cy="300" r="140" fill="none" stroke="#97D7FF" stroke-width="1.5" opacity="0.4"/>' +
    '<circle cx="600" cy="300" r="100" fill="none" stroke="#4D8DBA" stroke-width="1.5" opacity="0.3"/>' +
    '<circle cx="600" cy="275" r="48" fill="#FFEFC4" stroke="#086288" stroke-width="2.5"/>' +
    '<path d="M500 430 L575 350 L620 395 L670 340 L700 430 Z" fill="url(#primaryGrad)" opacity="0.85"/>' +
    '<rect x="420" y="490" width="360" height="52" rx="26" fill="#FFEFC4" stroke="#086288" stroke-width="2"/>' +
    '<text x="600" y="525" font-family="monospace" font-size="18" font-weight="700" fill="#086288" text-anchor="middle" letter-spacing="3">' +
    labelText +
    '</text>' +
    '</svg>';

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgMarkup);
}

/* ---------- Menu hamburger mobile ---------- */
function setupMobileMenu() {
  const menuToggleButton = document.getElementById("menuToggle");
  const mobileMenuPanel = document.getElementById("mobileMenu");
  const openIconElement = document.getElementById("iconMenuOpen");
  const closeIconElement = document.getElementById("iconMenuClose");

  if (!menuToggleButton || !mobileMenuPanel) return;

  menuToggleButton.addEventListener("click", function () {
    const isNowHidden = mobileMenuPanel.classList.toggle("hidden");
    openIconElement.classList.toggle("hidden", !isNowHidden);
    closeIconElement.classList.toggle("hidden", isNowHidden);
  });

  const mobileMenuLinkElements = mobileMenuPanel.querySelectorAll("a");
  mobileMenuLinkElements.forEach(function (mobileMenuLinkItem) {
    mobileMenuLinkItem.addEventListener("click", function () {
      mobileMenuPanel.classList.add("hidden");
      openIconElement.classList.remove("hidden");
      closeIconElement.classList.add("hidden");
    });
  });
}

/* ---------- Efek bayangan navbar saat scroll ---------- */
function setupNavbarOnScroll() {
  const navbarHeaderElement = document.getElementById("navbar");
  if (!navbarHeaderElement) return;

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 8) {
        navbarHeaderElement.classList.add("scrolled");
      } else {
        navbarHeaderElement.classList.remove("scrolled");
      }
    },
    { passive: true }
  );
}

/* ---------- Sistem tab umum (Journey + Trophy Room) ----------
   Tombol : <button class="tab-btn" data-group="X" data-tab="Y">
   Panel  : <div class="tab-panel" data-group="X" data-panel="Y">
----------------------------------------------------------------- */
function setupTabSystem() {
  const allTabButtonElements = document.querySelectorAll(".tab-btn");

  allTabButtonElements.forEach(function (tabButtonItem) {
    tabButtonItem.addEventListener("click", function () {
      const groupNameValue = tabButtonItem.dataset.group;
      const targetPanelName = tabButtonItem.dataset.tab;

      const siblingButtonElements = document.querySelectorAll(
        '.tab-btn[data-group="' + groupNameValue + '"]'
      );
      siblingButtonElements.forEach(function (siblingButtonItem) {
        siblingButtonItem.classList.remove("active");
      });
      tabButtonItem.classList.add("active");

      const siblingPanelElements = document.querySelectorAll(
        '.tab-panel[data-group="' + groupNameValue + '"]'
      );
      siblingPanelElements.forEach(function (siblingPanelItem) {
        siblingPanelItem.classList.remove("active");
      });

      const matchingPanelElement = document.querySelector(
        '.tab-panel[data-group="' + groupNameValue + '"][data-panel="' + targetPanelName + '"]'
      );
      if (matchingPanelElement) {
        matchingPanelElement.classList.add("active");
      }
    });
  });
}

/* ---------- Slider Swiper di timeline Journey ----------
   observer + observeParents membuat slider tetap benar
   meskipun berada di dalam tab yang awalnya tersembunyi.
---------------------------------------------------------- */
function setupJourneySwipers() {
  const journeySwiperElements = document.querySelectorAll(".journey-swiper");

  journeySwiperElements.forEach(function (swiperContainerElement) {
    new Swiper(swiperContainerElement, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 550,
      loop: true,
      grabCursor: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: swiperContainerElement.querySelector(".swiper-pagination"),
        clickable: true
      },
      navigation: {
        nextEl: swiperContainerElement.querySelector(".swiper-button-next"),
        prevEl: swiperContainerElement.querySelector(".swiper-button-prev")
      },
      a11y: {
        prevSlideMessage: "Previous image",
        nextSlideMessage: "Next image"
      }
    });
  });
}

/* ---------- Animasi reveal saat scroll ---------- */
function setupScrollReveal() {
  const revealElementList = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElementList.forEach(function (revealFallbackItem) {
      revealFallbackItem.classList.add("visible");
    });
    return;
  }

  const revealObserverInstance = new IntersectionObserver(
    function (observerEntryList) {
      observerEntryList.forEach(function (observerEntryItem) {
        if (observerEntryItem.isIntersecting) {
          observerEntryItem.target.classList.add("visible");
          revealObserverInstance.unobserve(observerEntryItem.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revealElementList.forEach(function (revealElementItem) {
    revealObserverInstance.observe(revealElementItem);
  });
}

/* ---------- Highlight menu navbar sesuai section aktif ---------- */
function setupActiveNavHighlight() {
  const pageSectionElements = document.querySelectorAll("section[id]");
  const navLinkElementList = document.querySelectorAll(".nav-link");

  function updateActiveNavLink() {
    const currentScrollPosition = window.scrollY + 140;

    pageSectionElements.forEach(function (sectionElementItem) {
      const sectionTopOffset = sectionElementItem.offsetTop;
      const sectionTotalHeight = sectionElementItem.offsetHeight;
      const sectionIdValue = sectionElementItem.getAttribute("id");

      if (
        currentScrollPosition >= sectionTopOffset &&
        currentScrollPosition < sectionTopOffset + sectionTotalHeight
      ) {
        navLinkElementList.forEach(function (navLinkItem) {
          const isMatchingLink =
            navLinkItem.getAttribute("href") === "#" + sectionIdValue;
          navLinkItem.classList.toggle("active-link", isMatchingLink);
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });
  updateActiveNavLink();
}

/* ---------- Tombol back-to-top melayang ---------- */
function setupBackToTopButton() {
  const backToTopButtonElement = document.getElementById("backToTop");
  if (!backToTopButtonElement) return;

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 600) {
        backToTopButtonElement.classList.add("show");
      } else {
        backToTopButtonElement.classList.remove("show");
      }
    },
    { passive: true }
  );

  backToTopButtonElement.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Tahun otomatis di footer ---------- */
function setupFooterYear() {
  const footerYearElement = document.getElementById("year");
  if (footerYearElement) {
    footerYearElement.textContent = new Date().getFullYear();
  }
}