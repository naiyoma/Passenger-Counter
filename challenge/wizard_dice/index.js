import CharacterData from './data.js'

function Character(data) {
    Object.assign(this, data)

    this.getDiceHtml = function(diceCount) {
       return getDiceRollyArray(diceCount).map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join(" ")
    }

    this.getCharacterHtml = function() {
        const {id, name, avatar, health, diceCount} = this;
        const diceHtml = this.getDiceHtml(diceCount)

        return `
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
const wizard = new Character(CharacterData.hero)
const orc = new Character(CharacterData.monster)


function render() {
    document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.id).innerHTML = orc.getCharacterHtml()
    wizard.getCharacterHtml()
    orc.getCharacterHtml()
}

render()




function getDiceRollyArray(diceCount) {
    let diceArray = new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
    return diceArray
}

