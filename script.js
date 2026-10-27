const form = document.querySelector('#quiz-form');
const result = document.querySelector('#result');
const answers = { q1: 'b', q2: 'c', q3: 'a', q4: 'b', q5: 'b' };
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  let score = 0;
  for (const [question, correct] of Object.entries(answers)) {
    if (data.get(question) === correct) score++;
  }
  result.textContent = score === 5
    ? `Чудово! ${score} із 5 — ти добре знаєш правила кібербезпеки!`
    : score >= 3
      ? `Непогано! ${score} із 5 — переглянь правила, щоб закріпити знання.`
      : `${score} із 5. Прочитай поради на сайті та спробуй ще раз!`;
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});