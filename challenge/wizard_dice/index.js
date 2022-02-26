const hero = {
    id: 'hero',
    name: "Wizard",
    avatar: "images/ciri1.jpg",
    health: "60",
    dice: [3,56, 4],
    diceCount: 3
}

const monster = {
    id: 'monster',
    name: "Orc",
    avatar: "images/ciri2.jpg",
    health: "10",
    dice: [3,4],
    diceCount: 1
}



function renderCharacter(data) {
    const {id, name, avatar, health, dice, diceCount} = data;

    const diceHtml = dice.map(function(x) {
        return `<div class="dice">${dice[x]}</div>`
    })
    // let diceHtm = ''
    // for (let i =0; i<diceCount; i++){
    //     diceHtm += `<div class="dice">${dice[i]}</div>`
    // }
    document.getElementById(id).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container"><div class="dice"> ${dice} </div></div>
        </div>
    `;
}

renderCharacter(hero)
renderCharacter(monster)
