
let password1 = 4
// let password1 = 6
let pass = ""
let pasEl = document.getElementById("pas-el");
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
function generatePassword() {
    for (let i =0; i <= 8; i++){
        let char = Math.floor(Math.random()
        *str.length+ 1);
        pass += str.charAt(char)
        console.log(pass)
        pasEl.textContent = "- " + pass + "-"
    }
}