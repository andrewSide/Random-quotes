import { quoteFavoriteBtn, removeFavoriteQuote } from "../../index.js";

function toggleFavoriteCard(quote, container) {
  quote.isFavorite
    ? showFavoriteCard(quote, container)
    : removeFavoriteCard(quote.id);
}

function showFavoriteBtn(isFavorite) {
  const btn = quoteFavoriteBtn;
  if (btn.style.display === "none") btn.style.display = "inline-block";
  if (isFavorite) {
    btn.classList.remove("far");
    btn.classList.add("fa");
  } else {
    btn.classList.remove("fa");
    btn.classList.add("far");
  }
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = "none";
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `
        <div class="favorites-card-content">
        <p>${text}</p>
        <p class="author">${author}</p>
        </div>
        <button id="danger" class="btn-danger">Remove <i class="far fa-trash-alt"></i></button>
        `;
  container.appendChild(favoriteCard);

  const removeButton = favoriteCard.querySelector(".btn-danger");
  removeButton.addEventListener("click", () => removeFavoriteQuote(id));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  if (card) card.remove();
}

export {
  toggleFavoriteCard,
  hideFavoriteBtn,
  removeFavoriteCard,
  showFavoriteCard,
  showFavoriteBtn,
};
