document.getElementById("activity-name").textContent = `

👻Activity Finder👻
`

document.getElementById("button").addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("title").textContent = `${data.activity}`
    })
})