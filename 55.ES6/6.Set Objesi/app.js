//* SET Kullanımı

let set= new Set();

set.add("ali");
set.add(23);
set.add(23);
set.add(23);
set.add(23);
set.add([1,2,3,4,5,6,7,8]);
set.add({ad:"ali",soyad:"veli"});

//Size
// console.log(set.size);

//has
// console.log(set.has(23));

//Array to set

let array= Array.from(set);

console.log(array);

//Delete
set.delete(23);
console.log(set.size);

//Set to Array

let arr=[1,2,3,4,5,true,[234,3]];
let set1= new Set(arr);
console.log(set1);


