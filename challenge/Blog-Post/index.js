let postsArray = []
const form = document.getElementById("form")

function renderPosts() {
    let blogHtml = ""
    for(let post of postsArray) {
        blogHtml += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = blogHtml
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(data => {
    postsArray = data.slice(0, 5)
    console.log(postsArray)
    renderPosts()

})

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    
    const title = document.getElementById("post-title").value;
    const body = document.getElementById("post-body").value;
    const data = {
        title: title,
        body: body
    }


    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        postsArray.unshift(data)
        renderPosts()
        console.log(postsArray)
        form.reset()
    })
})