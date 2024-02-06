let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let newDrawEl = document.getElementById("new")


function getRandomCard() {
    let value = Math.trunc(Math.random() * 10) + 2
    return value
}


function start() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
for(let i=0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}
    
if (sum <= 20) {
    message = "Do you want to draw again?"
} else if (sum === 21) {
    message = "Wohoo you got blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game"
    isAlive = false
}


messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
}

function newCard() {
        let newDraw = getRandomCard()
        sum += newDraw
        cards.push(newDraw)
        renderGame()

}