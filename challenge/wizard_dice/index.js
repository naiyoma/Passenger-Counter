const hero = {
    id: 'hero',
    name: "Wizard",
    avatar: "images/ciri1.jpg",
    health: "60",
    diceCount: 3
}

const monster = {
    id: 'monster',
    name: "Orc",
    avatar: "images/ciri2.jpg",
    health: "10",
    diceCount: 1
}

function Character(data) {
    this.id = data.id
    this.name = data.name
    this.avatar = data.avatar
    this.health = data.health
    this.diceCount = data.diceCount
    this.getCharacterHtml = function() {
        const {id, name, avatar, health, diceCount} = this;
        const diceHtml = getDiceHtml(diceCount)

        document.getElementById(id).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                 ${diceHtml}
            </div>
        </div>`;
    }
}
const wizard = new Character(hero)
const orc = new Character(monster)
wizard.getCharacterHtml()
orc.getCharacterHtml()



function getDiceRollyArray(diceCount) {
    let diceArray = new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
    return diceArray
}

function getDiceHtml(diceCount) {
    return getDiceRollyArray(diceCount).map(function(num) {
        return `<div class="dice">${num}</div>`
    }).join(" ")
}
