let washButton = document.getElementById("wash-btn")
let wash_price = 10;

washButton.addEventListener("click", function() {
    wash_price += wash_price;
    console.log(wash_price)
})