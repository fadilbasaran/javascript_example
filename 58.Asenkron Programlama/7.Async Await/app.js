

// async function hello() {
//     return "Hello, world!";
// }

// // console.log(hello());
// hello()
// .then(mesaj=>console.log(mesaj));

// document.querySelector("#button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response)=>response.json())
//         .then((post)=>{
//             console.log(post);
//             return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//             .then((response)=>response.json())
//             .then((comment)=>console.log(comment));
//         })
    
//});


// document.querySelector("#button").addEventListener("click", async () => {
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const post = await responsePost.json();

//     const responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
//     const comments = await responseComment.json();

//     console.log(comments);

// });

document.querySelector("#button").addEventListener("click",async ()=>{
    const post= await( await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const comments=await(await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(post,comments);
});