let heroId = 'hero'
let monsterId = 'monster'

let heroName = "Wizard"
let heroAvatar = "images/ciri1.jpg"
let heroHealth = "60"
let heroDice = 6

let monsterName = "Orc"
let monsterAvatar = "images/ciri2.jpg"
let monsterHealth = "10"
let monsterDice = 4

function renderCharacter(elementId, name, avatar, health, diceRoll) {
    document.getElementById(elementId).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
        </div>
    `;
}

renderCharacter(heroId, heroName, heroAvatar, heroHealth, heroDice)
renderCharacter(monsterId, monsterName, monsterAvatar, monsterHealth, monsterDice)
