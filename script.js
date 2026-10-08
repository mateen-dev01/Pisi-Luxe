const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navButton = document.querySelector(".nav-button");
const cursorGlow = document.querySelector(".cursor-glow");

menuButton?.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
  navButton.classList.toggle("mobile-open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
    navButton.classList.remove("mobile-open");
  });
});


const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealItems.forEach(item => {
  revealObserver.observe(item);
});


window.addEventListener("mousemove", e => {
  if (!cursorGlow) return;

  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});


document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", e => {

    const target = link.getAttribute("href");

    if (!target || target === "#") return;

    const section = document.querySelector(target);

    if (!section) return;

    e.preventDefault();

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 30) {
    navbar.style.background = "rgba(5,5,6,.92)";
    navbar.style.borderBottomColor = "rgba(255,48,79,.12)";
  } else {
    navbar.style.background = "rgba(7,7,8,.65)";
    navbar.style.borderBottomColor = "rgba(255,255,255,.06)";
  }

});


const marketCards = document.querySelectorAll(".market-card");

marketCards.forEach(card => {

  card.addEventListener("mousemove", e => {

    if (window.innerWidth < 800) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform =
      `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

});


const target = document.querySelector(".target");

document.addEventListener("mousemove", e => {

  if (!target || window.innerWidth < 800) return;

  const x = (window.innerWidth / 2 - e.clientX) / 70;
  const y = (window.innerHeight / 2 - e.clientY) / 70;

  target.style.transform =
    `translate(${x}px, ${y}px)`;

});


window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});