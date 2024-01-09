// ? ---PROMİSS----



// const promise= new Promise((resolve, reject) => {
//     if (check) {
//         resolve("Promise Başarılı");
//     } else {
//         reject("Promise Başarısız");
//     }
// });

// console.log(promise);
// let check=false;

// function createPromise() {
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Başarılı");
//         } else {
//             reject("Sıkıntı büyük");
//         }
//     });
// }

// createPromise()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);

//     })
//     .finally(() => console.log("Her durumda çalışır"));



//? PORMIS & XMLHttpRequest


// function readStudent(url) {

//     return new Promise((resolve, reject) => {
//         let xhr=new XMLHttpRequest();

//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState == 4 && xhr.status == 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }else if(xhr.status==404){
//                     console.log("404");
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }
//         xhr.open("GET",url);
//         xhr.send();
//     });
// }

// readStudent("students.json")
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });

// function getUsers(url) {//? 1.Sorulcak
//     return new Promise((resolve,reject)=>{
//         let xhr = new XMLHttpRequest();
//         try {
//             document.addEventListener("readystatechange",()=>{
//                 if (xhr.readyState == 4 && xhr.status == 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             });
//         } catch (error) {
//             reject(error);
//         }
//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// function getCommentsByUserId(url) {//?2. Sorulacakkk
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         try {
//             document.addEventListener("readystatechange",()=>{
//                 if (xhr.readyState  == 4 && xhr.status == 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             });
//         } catch (error) {
//             reject(error);
//         }
//         xhr.open("GET",url);
//         xhr.send();
//     })
// }



// getUsers("https://jsonplaceholder.typicode.com/users/3")
//     .then((data) => {
//          console.log(data);
//         getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments`).then((res)=>{console.log(res);})
//     })
//     .catch(err => console.log(err));

// getUsers("https://jsonplaceholder.typicode.com/users/3")//? 3. Sorulacak
// .then((data)=>{
//     console.log(data);

//     return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`);
// })
// .then((res)=>console.log(res))
// .catch((err)=>{console.log(err);})
// ;

     //console.log(data.id);
    //  return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
    //  .then(res=>console.log(res)).catch((err)=>{console.log(err);});
//  getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/3`)
//  .then((res)=>console.log(res))
//  ;


const p1 = Promise.resolve("1. Promis başarılı")
const p2 = Promise.resolve("2. Promis başarılı");
const p3 = new Promise((resolve,reject)=>{
    resolve("3. Promis başaralı ");
});
const p4 =  Promise.reject("Hata");//Sadec bir tane reject olduğunda hata fırlatır.

// const p4 = new Promise.reject("Hata var başkan");

Promise.all([p1,p2,p3,p4])
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

