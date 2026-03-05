document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.flip-card-inner');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});
const cards = document.querySelectorAll(".flip-card");
const resultElement = document.getElementById("result");

cards.forEach(card => {
  card.addEventListener("click", () => {

    // переключаем состояние карты
    card.classList.toggle("active");

    // пересчитываем сумму
    let sum = 0;

    cards.forEach(c => {
      if (!c.classList.contains("active")) {
        sum += Number(c.dataset.value);
      }
    });

    resultElement.textContent = sum;

  });
});