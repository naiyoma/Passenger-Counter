
function getDiceRollyArray(diceCount) {
    let diceArray = new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
    return diceArray
}

export default getDiceRollyArray