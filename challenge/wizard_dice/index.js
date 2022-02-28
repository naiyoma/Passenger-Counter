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

function renderCharacter(data) {
    const {id, name, avatar, health, diceCount} = data;
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

renderCharacter(hero)
renderCharacter(monster)

