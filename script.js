document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.flip-card-inner');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});
