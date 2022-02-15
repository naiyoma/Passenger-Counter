const myEmojis = ["👩‍💻", "💃", "🤑"]
const emojiContainer = document.getElementById("emojiContainer")
const pushButton = document.getElementById("push-btn")
const inputValue = document.getElementById("emoji-input") 
const unshiftBtn = document.getElementById("unshift-btn")

function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushButton.addEventListener("click", function() {
    if (inputValue.value) {
        myEmojis.push(inputValue.value)
        inputValue.value = "";
        emojiContainer.innerHTML = ""
        renderEmojis()
    }

})

unshiftBtn.addEventListener("click", function() {
    if(inputValue.value) {
        myEmojis.unshift(inputValue.value)
        inputValue.value = "";
        emojiContainer.innerHTML = ""
        renderEmojis()
        console.log("click")
    }
})