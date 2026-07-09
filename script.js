const intro = document.querySelector("#intro");
const skipIntro = document.querySelector("#skipIntro");

function closeIntro() {
  if (!intro) return;
  intro.classList.add("hidden");
  document.body.classList.remove("intro-active");
  sessionStorage.setItem("projectLighthouseIntroSeen", "true");
}

if (intro) {
  document.body.classList.add("intro-active");

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }

  const alreadySeen = sessionStorage.getItem("projectLighthouseIntroSeen");

  if (alreadySeen) {
    closeIntro();
  } else {
    setTimeout(closeIntro, 4200);
  }
}

if (skipIntro) {
  skipIntro.addEventListener("click", closeIntro);
}

const cards = document.querySelectorAll(".project-card, .timeline-item, .panel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card) => {
  card.classList.add("reveal");
  observer.observe(card);
});
