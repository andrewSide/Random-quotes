import { displayCurrentQuote } from "./src/handlers/currentQuote.js";
import {
  hideFavoriteBtn,
  showFavoriteCard,
  toggleFavoriteCard,
  showFavoriteBtn,
  removeFavoriteCard,
} from "./src/handlers/favorites.js";
import {
  localStorageGetItem,
  localStorageSetItem,
} from "./src/utils/localStorage.js";
import { getRandomQuote } from "./src/handlers/randomQuote.js";
import { removeObjectFromArrayById } from "./src/utils/array.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTES_KEY = "favoriteQuotes";

const randomQuoteBtn = document.getElementById("random-quote-btn");
const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");

let currentQuote = null;

const favoriteQuotes = [];

function removeFavoriteQuote(id) {
  if (id === currentQuote.id) {
    toggleCurrentQuote();
  } else {
    removeObjectFromArrayById(favoriteQuotes, id);
    removeFavoriteCard(id);
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }

  // const currentQuote = document.querySelector("[data-current-quote-id]");
  // const currentQuoteId = currentQuote.dataset.currentQuoteId;
}

function toggleCurrentQuote() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  showFavoriteBtn(currentQuote.isFavorite);
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

  if (currentQuote.isFavorite) {
    favoriteQuotes.push({ ...currentQuote });
  } else {
    removeObjectFromArrayById(favoriteQuotes, currentQuote.id);
  }
  toggleFavoriteCard(currentQuote, favoritesContainer);

  localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
}

function setCurrentQuote(quote) {
  currentQuote = { ...quote };

  // Перевіряємо, чи є ця цитата в списку улюблених `favoriteQuotes`.
  // Якщо знайдена цитата з таким же id, то `isFavorite` буде true, інакше false.
  currentQuote.isFavorite = !!favoriteQuotes.find(
    (favoriteQuote) => favoriteQuote.id === currentQuote.id
  );

  // Відображаємо поточну цитату на сторінці (функція відповідає за вивід)
  displayCurrentQuote(currentQuote);
  showFavoriteBtn(currentQuote.isFavorite);

  // Зберігаємо поточну цитату в локальному сховищі браузера під ключем `CURRENT_QUOTE_KEY`
  // Це дозволяє зберегти стан цитати навіть після оновлення сторінки
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", toggleCurrentQuote);

randomQuoteBtn.addEventListener("click", () => {
  setCurrentQuote(getRandomQuote());
});

function init() {
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, favoritesContainer);
    });
  }
  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    setCurrentQuote(currentQuoteFromStorage);
  }
}

window.addEventListener("load", init);

export { quoteFavoriteBtn, removeFavoriteQuote };
