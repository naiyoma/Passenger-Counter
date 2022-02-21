let player1Score = 0;
let player2Score = 0;
let player1 = true;
let player2 = false;
let rollBtn = document.getElementById("rollBtn");
let resetBtn = document.getElementById("resetBtn");
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1ScoreBoard = document.getElementById("player1Scoreboard")
const player2ScoreBoard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const active = document.getElementsByClassName("active")


function showDisplayButton () {
    rollBtn.style.display = "none"
    resetBtn.style.display ="block"
}

function restDisplayButton () {
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
}

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6 + 1)
    if (player1) {
        player1Score += randomNumber
        player1ScoreBoard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.remove("active")
        message.textContent = "player 2 turn"
    } else {
        player2Score += randomNumber
        player2ScoreBoard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.remove("active")
        message.textContent = "player 1 turn"
    }

    if (player1Score >= 20) {
        message.textContent = "player 1 has won"
        showDisplayButton()
       

    }else if (player1Score >= 20) {
        message.textContent = "player 2 has won"
        showDisplayButton()
    }
    player1 = ! player1
})


resetBtn.addEventListener("click", function() {
    resetGame()
})

function resetGame() {
    message.textContent = "Player 1 turn"
    player1ScoreBoard.textContent = 0;
    player2ScoreBoard.textContent = 0;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    player1Score = 0;
    player2Score = 0;
    player1 = true;
    restDisplayButton()
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}