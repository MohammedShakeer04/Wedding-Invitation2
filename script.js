const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const openButton = document.getElementById("openInvitation");
const particles = document.querySelector(".particles");

function makeParticles() {
  const count = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 22;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("span");
    dot.className = "particle";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = 55 + Math.random() * 45 + "%";
    dot.style.animationDuration = (4 + Math.random() * 5) + "s";
    dot.style.animationDelay = (-Math.random() * 6) + "s";
    particles.appendChild(dot);
  }
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  items.forEach(item => observer.observe(item));
}

openButton.addEventListener("click", () => {
  cover.classList.add("opening");
  setTimeout(() => {
    cover.style.display = "none";
    invitation.setAttribute("aria-hidden", "false");
    invitation.classList.add("active");
    window.scrollTo({top: 0, behavior: "auto"});
    revealOnScroll();
  }, 650);
});

makeParticles();
revealOnScroll();
