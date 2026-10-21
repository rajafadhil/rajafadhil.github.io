document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  setupNavbarOnScroll();
  setupTabSystem();
  setupJourneySwipers();
  setupScrollReveal();
  setupActiveNavHighlight();
  setupBackToTopButton();
  setupFooterYear();
});

/* ---------- Mobile hamburger menu ---------- */
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

  // Close the menu whenever a link is tapped
  const mobileMenuLinks = mobileMenuPanel.querySelectorAll("a");
  mobileMenuLinks.forEach(function (menuLinkItem) {
    menuLinkItem.addEventListener("click", function () {
      mobileMenuPanel.classList.add("hidden");
      openIconElement.classList.remove("hidden");
      closeIconElement.classList.add("hidden");
    });
  });
}

/* ---------- Sticky navbar shadow on scroll ---------- */
function setupNavbarOnScroll() {
  const navbarHeader = document.getElementById("navbar");
  if (!navbarHeader) return;

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 8) {
        navbarHeader.classList.add("scrolled");
      } else {
        navbarHeader.classList.remove("scrolled");
      }
    },
    { passive: true }
  );
}

/* ---------- Generic tab system (Journey + Trophy Room) ----------
   Buttons : <button class="tab-btn" data-group="X" data-tab="Y">
   Panels  : <div class="tab-panel" data-group="X" data-panel="Y">
----------------------------------------------------------------- */
function setupTabSystem() {
  const allTabButtons = document.querySelectorAll(".tab-btn");

  allTabButtons.forEach(function (tabButtonItem) {
    tabButtonItem.addEventListener("click", function () {
      const groupName = tabButtonItem.dataset.group;
      const targetPanelName = tabButtonItem.dataset.tab;

      // Deactivate all buttons in this group, activate clicked one
      const siblingButtons = document.querySelectorAll(
        '.tab-btn[data-group="' + groupName + '"]'
      );
      siblingButtons.forEach(function (siblingButtonItem) {
        siblingButtonItem.classList.remove("active");
      });
      tabButtonItem.classList.add("active");

      // Hide all panels in this group, show the matching one
      const siblingPanels = document.querySelectorAll(
        '.tab-panel[data-group="' + groupName + '"]'
      );
      siblingPanels.forEach(function (siblingPanelItem) {
        siblingPanelItem.classList.remove("active");
      });

      const matchingPanel = document.querySelector(
        '.tab-panel[data-group="' + groupName + '"][data-panel="' + targetPanelName + '"]'
      );
      if (matchingPanel) {
        matchingPanel.classList.add("active");
      }
    });
  });
}

/* ---------- Swiper sliders inside Journey timeline ----------
   observer + observeParents make sliders render correctly even
   when they live inside initially hidden tab panels.
---------------------------------------------------------------- */
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
        clickable: true,
      },
      navigation: {
        nextEl: swiperContainerElement.querySelector(".swiper-button-next"),
        prevEl: swiperContainerElement.querySelector(".swiper-button-prev"),
      },
      a11y: {
        prevSlideMessage: "Previous image",
        nextSlideMessage: "Next image",
      },
    });
  });
}

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    // Fallback: just show everything
    revealElements.forEach(function (revealElementItem) {
      revealElementItem.classList.add("visible");
    });
    return;
  }

  const revealObserverInstance = new IntersectionObserver(
    function (observerEntries) {
      observerEntries.forEach(function (observerEntryItem) {
        if (observerEntryItem.isIntersecting) {
          observerEntryItem.target.classList.add("visible");
          revealObserverInstance.unobserve(observerEntryItem.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach(function (revealElementItem) {
    revealObserverInstance.observe(revealElementItem);
  });
}

/* ---------- Highlight the nav link of the current section ---------- */
function setupActiveNavHighlight() {
  const pageSections = document.querySelectorAll("section[id]");
  const navLinkElements = document.querySelectorAll(".nav-link");

  function updateActiveNavLink() {
    const currentScrollPosition = window.scrollY + 140;

    pageSections.forEach(function (sectionElementItem) {
      const sectionTopOffset = sectionElementItem.offsetTop;
      const sectionTotalHeight = sectionElementItem.offsetHeight;
      const sectionIdValue = sectionElementItem.getAttribute("id");

      if (
        currentScrollPosition >= sectionTopOffset &&
        currentScrollPosition < sectionTopOffset + sectionTotalHeight
      ) {
        navLinkElements.forEach(function (navLinkItem) {
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

/* ---------- Floating back-to-top button ---------- */
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

/* ---------- Auto-update footer year ---------- */
function setupFooterYear() {
  const footerYearElement = document.getElementById("year");
  if (footerYearElement) {
    footerYearElement.textContent = new Date().getFullYear();
  }
}