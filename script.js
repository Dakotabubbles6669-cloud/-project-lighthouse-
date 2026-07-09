const cards = document.querySelectorAll(".project-card, .timeline-item, .panel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

cards.forEach((card) => {
  card.classList.add("reveal");
  observer.observe(card);
});
