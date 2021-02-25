let isFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
const cards = document.querySelectorAll(".card");

function resetBoard() {
    isFlippedCard = false;
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1000);
}

function flipCard() {
    let item = event.target.parentElement;
    if (lockBoard) {
        return lockBoard;
    }
    if (item === firstCard) {
        return firstCard;
    }
    item.classList.add("flip");
    if (!isFlippedCard) {
        isFlippedCard = true;
        firstCard = item;
        return;
    }
    secondCard = item;
    firstCard.dataset.card === secondCard.dataset.card ? disableCards() : unFlipCards();
}
[...cards].forEach(card => {
    let rand = Math.floor(Math.random() * 12);
    card.style.order = rand;
})
cards.forEach(card => card.addEventListener("click", flipCard));
