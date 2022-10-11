const cards = document.querySelectorAll(".card");
let matchedPairs = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(evt) {
  const clickedCard = evt.target; 
  if (cardOne !== clickedCard && !disableDeck) {
   
    clickedCard.classList.add("flip"); 
    if (!cardOne) {
      
      return (cardOne = clickedCard); 
    }
   
    cardTwo = clickedCard; 
    disableDeck = true; 
   
    let cardOneImg = cardOne.querySelector(".back-view img").src; 
    let cardTwoImg = cardTwo.querySelector(".back-view img").src; 
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
   
    matchedPairs++; 
    if (matchedPairs == 8) {
      console.log("YOU WIN!");
      return;
    }
    
    cardOne.removeEventListener("click", flipCard); 
    cardTwo.removeEventListener("click", flipCard); 
    cardOne = cardTwo = ""; 
    disableDeck = false;
    return;
  }
 
  cardOne.classList.remove("flip");
  cardTwo.classList.remove("flip");
  cardOne = cardTwo = ""; 
  disableDeck = false;
  return;
}

function shuffleCards() {
  matchedPairs = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `images/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
  });
}
shuffleCards();
