const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");
const contactForm = document.querySelector(".contact-form");

const setScrolled = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

year.textContent = new Date().getFullYear();
setScrolled();

window.addEventListener("scroll", setScrolled, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});
