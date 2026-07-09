const intro = document.querySelector("#intro");
const skipIntro = document.querySelector("#skipIntro");

function closeIntro() {
  if (!intro) return;
  intro.classList.add("hidden");
  sessionStorage.setItem("projectLighthouseIntroSeen", "true");
}

if (intro) {
  const alreadySeen = sessionStorage.getItem("projectLighthouseIntroSeen");

  if (alreadySeen) {
    intro.classList.add("hidden");
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
