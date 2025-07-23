document.addEventListener("mousemove", function (e) {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  const bgGlow = document.getElementById("bg-glow");
  if (bgGlow) {
    bgGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.0) 60%)`;
  }
});

// Hamburger Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navList = document.querySelector(".nav-list");
  const closeMenu = document.querySelector(".close-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  });

  // Close menu when clicking close button
  closeMenu.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    }
  });
});
function scrollToNextSection() {
  const introSection = document.querySelector(".intro");
  if (introSection) {
    const next = introSection.nextElementSibling;
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Project cards hover effect
const cardsContainer = document.querySelector(".projects-cards");
const cards = document.querySelectorAll(".project-card");
const hoverTitle = document.querySelector(".hover-title");

if (cardsContainer && cards.length && hoverTitle) {
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cards.forEach((c) => {
        if (c !== card) c.classList.add("faded");
        else c.classList.remove("faded");
      });
      // Remove previous animation class if present
      hoverTitle.classList.remove("animated");
      // Force reflow to restart animation
      void hoverTitle.offsetWidth;
      // Set new text and add animation class
      hoverTitle.textContent = card.getAttribute("data-title");
      hoverTitle.classList.add("animated");
      cardsContainer.classList.add("show-title");
    });
    card.addEventListener("mouseleave", () => {
      cards.forEach((c) => c.classList.remove("faded"));
      hoverTitle.textContent = "";
      hoverTitle.classList.remove("animated");
      cardsContainer.classList.remove("show-title");
    });
  });
}


const box = document.querySelector('.connectbox');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      box.classList.add('animate');
      observer.unobserve(box); // Trigger only once
    }
    else{
      box.classList.remove('animate');
    }
  },
  {
    threshold: 0.1 // Element must be 100% visible
  }
);

observer.observe(box);

// Animate connectbox when user reaches the bottom of the page, and reverse when scrolling up
(function() {
  window.addEventListener('scroll', function() {
    const connectbox = document.querySelector('.connectbox');
    if (!connectbox) return;
    // Check if user is at the bottom of the page
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
      connectbox.classList.add('animate');
    } else {
      connectbox.classList.remove('animate');
    }
  });
})();