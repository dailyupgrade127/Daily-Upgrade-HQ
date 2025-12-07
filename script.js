// Intersection Observer for scroll-in animations
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Elements to animate
const animatedSelectors = [
  ".card",
  ".info-card",
  ".audience-pill",
  ".featured-card",
  ".collab-box"
];

animatedSelectors.forEach((selector) => {
  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });
});

// Smooth scroll for internal links (anchors starting with #)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Optional: Scroll to top when clicking logo container
const logoContainer = document.querySelector(".logo-container");
if (logoContainer) {
  logoContainer.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
