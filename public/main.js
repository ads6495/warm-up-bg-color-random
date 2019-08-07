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
let deck = []

const pairs = () => {
  for (s = 0; s < suits.length; s++) {
    for (v = 0; v < values.length; v++) {
      deck.push(new Card(suits[s], values[v]))
    }
  }
  console.log(deck)
  cardSuits.textContent = suits[0].suits
  cardValues.textContent = suits[0].values
}

const shuffleDeck = () => {
  let randomCard = deck[math.floor(Math.random() * deck.length)]
  let firstCard = deck[0]
  firstCard = randomCard
  cardSuits.textContent = firstCard.suit
  cardValues.textContent = firstCard.values
  console.log(firstCard)
}





document.querySelector('.button').addEventListener('click', pairs)