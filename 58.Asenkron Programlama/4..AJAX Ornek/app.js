
function prepareURL(url, id) {

    if (id == null) {
        return url;
    } else {
        return `${url}?postId=${id}`;
    }
}

function getComments(url, id) {
    let newUrl = prepareURL(url, id);

    const xhr = new XMLHttpRequest();
    document.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })
    xhr.open("GET", newUrl);
    xhr.send();

}

function getData(url) {
    const xhr = new XMLHttpRequest();
    document.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.statusText);
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", url); 
    xhr.send();

}
getData("https://jsonplaceholder.typicode.com/users");

getComments("https://jsonplaceholder.typicode.com/comments", 1);