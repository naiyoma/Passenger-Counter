let contactBtn = document.getElementById("open-modal")
let closeBtn = document.getElementById("close-modal")

contactBtn.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block"
})

closeBtn.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none"
})