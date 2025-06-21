// Fetch API
const url = "https://jsonplaceholder.typicode.com/comments"

fetch(url)
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response); // 404
    return response.json(); // 200
})
.then((data) => {
    console.log(data); // Array of comments
})
.catch((error) => {
    console.log(error);
});