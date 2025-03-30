const quotes = [
  {
    quote: "Життя — це те, що з тобою відбувається, поки ти будуєш плани",
    author: "Джон Леннон",
  },
  {
    quote: "Найкраща помста — величезний успіх",
    author: "Френк Сінатра",
  },
  {
    quote: "Талант — це дар, якому неможливо ні навчити, ні навчитися",
    author: "Іммануїл Кант",
  },
  {
    quote: "Життя — подорож, а не прибуття до кінцевого пункту призначення",
    author: "Тімоті Родерік",
  },
  {
    quote: "Якщо ти народжений без крил, не заважай їм рости",
    author: "Анрі Гідель",
  },
  {
    quote: "Єдиний спосіб зробити велику роботу — це любити те, що ти робиш",
    author: "Стів Джобс",
  },
  {
    quote: "Не важливо, як повільно ти рухаєшся, головне — не зупинятися",
    author: "Конфуцій",
  },
  {
    quote: "Майбутнє належить тим, хто вірить у красу своєї мрії",
    author: "Елеонора Рузвельт",
  },
  {
    quote: "Справжня мудрість — це знати межі свого незнання",
    author: "Сократ",
  },
  {
    quote: "Єдиний шлях досягти неможливого — це вірити, що воно можливе",
    author: "Льюїс Керролл",
  },
  {
    quote:
      "Успіх — це вміння йти від невдачі до невдачі, не втрачаючи ентузіазму",
    author: "Вінстон Черчилль",
  },
  {
    quote: "Кожна людина – архітектор власного щастя",
    author: "Солон",
  },
  {
    quote: "Найкращий спосіб передбачити майбутнє – створити його",
    author: "Пітер Друкер",
  },
  {
    quote: "Щастя – це не щось готове. Воно приходить від твоїх власних дій",
    author: "Далай-лама",
  },
  {
    quote: "Не бійтеся відмовлятися від хорошого заради відмінного",
    author: "Джон Д. Рокфеллер",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quore-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author: quoteAuthor } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener("click", generateRandomQuote);

// generateRandomQuote();
