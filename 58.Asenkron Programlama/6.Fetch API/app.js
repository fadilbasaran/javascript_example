
function getData(url) {
    return fetch(url)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}
 
getData("students.json");
getData("https://jsonplaceholder.typicode.com/posts/1");


function saveStudents(params) {
    fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({})
    });
}