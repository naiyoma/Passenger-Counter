
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")


let player = {
    name : "Aurelia",
    chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame () {
    cardEl.textContent = "Cards: "
    for (let i = 0; i <cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum" + ":" + sum
    if (sum < 21) {
        message = "Do you want to draw a new card 🙂"
    } else if (sum === 21) {
        message = "Wohooo! You've got a BlackJack!  🥳"
        hasBlackJack = true
    } else {
        message = "You have lost the game 😭"
        isAlive = false
    }
    messageEl.textContent = message    
}

function newCard() {
    if (isAlive === true && hasBlackJack=== false) {
        let card = 6
        sum += card
        cards.push(card)
        renderGame()
    }
}


