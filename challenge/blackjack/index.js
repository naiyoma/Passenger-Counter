let firstCard = 2
let secondCard = 11
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card 🙂")
} else if (sum === 21) {
    console.log("Wohooo! You've got a BlackJack!  🥳")
} else {
    console.log ("You have lost the game 😭")
}