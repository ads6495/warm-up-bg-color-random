/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-expressions */
class Card {
  constructor(suits, values) {
    this.suits = suits
    this.values = values
  }
}
const cardValues = document.querySelector('.card-values')
const cardSuits = document.querySelector('.card-suit')

const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
const deck = []

const pairs = () => {
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      deck.push(new Card(suits[s], values[v]))
    }
  }
  cardSuits.textContent = deck[0].suits
  cardValues.textContent = deck[0].values
  console.log(deck[0])
}

const shuffleDeck = () => {
  const randomCard = deck[Math.floor(Math.random() * deck.length)]
  let firstCard = deck[0]
  firstCard = randomCard
  cardSuits.textContent = firstCard.suits
  cardValues.textContent = firstCard.values
  console.log(firstCard)
}


document.querySelector('.button').addEventListener('click', pairs)
document.querySelector('.button').addEventListener('click', shuffleDeck)