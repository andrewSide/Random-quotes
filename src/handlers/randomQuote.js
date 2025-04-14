import { quotes, jokes } from "../data/quotes.js";
import { generateRandomInt } from "../utils/math.js";

function getRandomQuote() {
  return { ...jokes[generateRandomInt(jokes.length)] };
}

export { getRandomQuote };
