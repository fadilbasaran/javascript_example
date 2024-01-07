//? Değer ve References Types

let a=4;
let b = a;

console.log("a: " + a+" b: " + b);
a=445;
console.log("a: " + a+" b: " + b);

//Her hangi bir değişiklik olmadı.

let dizi1=[1,2,3,4,5,6,7,8,9];
let dizi2=dizi1;

console.log(dizi1);
console.log(dizi2);
console.log("-----------");
dizi2.push(20,23);

console.log(dizi1);
console.log(dizi2);

//Değer tiğinde bir değişiklik meydana geldiğinde her ikisi içinde değişmektedir.

