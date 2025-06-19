// Fetch API
const url = "https://jsonplaceholder.typicode.com/12"

fetch(url)
.then((response) => {
    console.log(response); // 404
    return response.json(); // 200
})
.then((data) => {
    console.log(data); // Array of comments
})