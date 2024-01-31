let firstCard = Math.trunc(Math.random() * 10) + 2
let secondCard = Math.trunc(Math.random() * 10) + 2
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let newDrawEl = document.getElementById("new")

function start() {
    renderGame()
}

function renderGame() {
    
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
cardsEl.textContent = "Cards: " + cards[0] + " and " + cards[1]
}

function newCard() {
    // if (newDrawEl.onclick) {
        let newDraw = Math.trunc(Math.random() * 10) + 2
        // cardsEl.textContent =  "Cards: " + firstCard + " and " + secondCard + " and " + newDraw
        sum += newDraw
        // sumEl.textContent = "Sum: " + sum

        renderGame()
    // }
}