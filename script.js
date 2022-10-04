const cards = document.querySelectorAll(".card");
let matchedPairs = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard() {
  console.log("flipCard was executed");
}

function shuffleCards() {
  matchedPairs = 0; // reset matchedPairs variable to 0
  disableDeck = false; // reset disableDeck boolean to false
  cardOne = cardTwo = ""; // reset cardOne and cardTwo variables to empty string
}
