// Initialize AOS Animation
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  } else {
    navbar.classList.remove("shadow-lg");
    navbar.style.background = "rgba(15, 23, 42, 0.8)";
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Generate Images using the provided tool
async function generateImages() {
  try {
    // 1. Profile Picture
    const profileRes = await fetch("/api/image_gen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt:
          "Professional headshot of a young Asian male data scientist, wearing glasses and a smart casual shirt, smiling confidently, modern office background with blurred monitors showing code, high quality, photorealistic, 8k",
      }),
    });
  } catch (e) {
    console.log("Image gen tool not available in this context");
  }
}
