// Variables declarations

let cards = []
let cardSum = 0
let hasBlackjack = false
let isAlive = false
let isLogged = false
let msg = ""
let msgEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum")
let cardsEl = document.getElementById("cards")

let playerEl = document.getElementById("player")
let player = {
    name: "",
    chips: 0
}

// Game logic

function getRandom() {
    let ret = Math.floor(Math.random() * (13)) + 1
    if (ret === 1) {
        return 11
    } else if (ret > 10) {
        return 10
    } else {
        return ret
    }
}

function startGame() {
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandom()
    let secondCard = getRandom()
    cardSum = firstCard + secondCard
    cards = [firstCard, secondCard]

    if (!isLogged) {
        player.name = prompt("Please enter your name")
        isLogged = true
    }

    playerEl.textContent = player.name + ": $" + player.chips
    renderGame()
}

function renderGame() {
    if (cardSum <= 20) {
        msg = "Draw another card?"
    } else if (cardSum === 21) {
        msg = "You won!"
        hasBlackjack = true
        player.chips += 10
    } else {
        msg = "Better luck next time!"
        isAlive = false
    }

    sumEl.textContent = "Sum: " + cardSum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    msgEl.textContent = msg
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let anotherCard = getRandom()
        cardSum += anotherCard
        cards.push(anotherCard)
        renderGame()
    }
}