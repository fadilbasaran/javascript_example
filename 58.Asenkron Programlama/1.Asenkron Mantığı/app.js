/**
 * *1--Javascript senkron bir şekilde çalışmaktadır.
-------ASENKRON ÇALIŞAMASINA İZİN VERİLENLER----------------------------------------------------------------

//* 1-Timming function
//* 2-Evenets(Olaylar)
//* 3-HTTP Requests(İstekleri)

//? ---CALLBACK - PROMISE - ASYNC & AWAIT---
-----> Asenkorn yapıları senkron yapıla çevirerek kullanılıyoruz.


 */
// selamla();
// console.log(1);
// console.log(2);
// console.log("Fadıl");

// function selamla() {
//     console.log("Selamla");
// }     


// setTimeout(() => {
    
// }, timeout);

console.log("Fadıl");

setTimeout(() => {
    console.log("1000 ms sonra çalıştı");
}, 1000);
setTimeout(() => {
    console.log("750 ms sonra çalıştı");
}, 750);

setTimeout(() => {
    console.log("500 ms sonra çalıştı");
}, 500);

console.log("Başaran");
