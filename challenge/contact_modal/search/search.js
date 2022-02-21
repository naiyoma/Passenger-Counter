
let searchInput = document.getElementById("searchInput")
let allUsers = document.getElementsByClassName("name")


searchInput.addEventListener("keyup", function(event) {
    let userName = event.target.value.toLowerCase();
    
    for (let counter = 0; counter < allUsers.length; counter ++) {
        const currentUser = allUsers[counter].textContent.toLocaleLowerCase();
        
        if (currentUser.includes(userName)) {
            allUsers[counter].style.display = "block";
        } else {
            allUsers[counter].style.display = "none";
        }
    }

})

