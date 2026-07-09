/* ================= NAVBAR EFFECT ================= */

const navbar = document.querySelector(".luxury-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".section-padding, .collection-card, .product-card, .luxury-box, .testimonial-card",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("hidden");

  revealObserver.observe(element);
});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ================= CLOSE MOBILE MENU ================= */

const menuLinks = document.querySelectorAll(".nav-link");

const menu = document.querySelector(".navbar-collapse");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});
