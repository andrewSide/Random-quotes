const quotes = [
  "Життя — це те, що з тобою відбувається, поки ти будуєш плани. - Джон Леннон",
  "Найкраща помста — величезний успіх. - Френк Сінатра",
  "Талант — це дар, якому неможливо ні навчити, ні навчитися. - Іммануїл Кант",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();
