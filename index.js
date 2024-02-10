let cards = []
let sum = []
let hasBlackJack = false

let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let newDrawEl = document.getElementById("new")


function getRandomCard() {
    let value = Math.floor(Math.random() * 13) + 1

    if(value === 1) {
        return 11
    } else if(value === 11 || value === 12 || value === 13) {
        return 10
    } else return value

}

function start() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

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
    message = "You're out of the game, press New Card to start a new game"
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

    //   if(sum >= 21){
    //     cards = []
    //     sum = 0
    //   } else {
    //         cards.push(newDraw)
    //         renderGame()
    //   }

}