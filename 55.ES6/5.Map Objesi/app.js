//* Map Key --- Value(değer)

let map1 = new Map();


//SET Method


// let value;

//GET Method

// value =map1.get(1);
// value =map1.get(6);


//SIZE Property olduğundan () kullanılmaz

// value = map1.size;

//DELETE Method

// value = map1.delete(1);
// value =map1.size;

//HAS Property

// value = map1.has(1);
// value = map1.has(6);

//For OF ile Map üzerinden dönebiliriz

// for([key,value] of map1){//? Destructing yapılıyor
//     console.log(key,value);
// }
// for(value of map1){
//     console.log(value);//? Dizi içinde dönmektedir
// }

// let keys = Array.from(map1.keys());
// keys.forEach((key) => {
// console.log(key, map1.get(key));
// });
// console.log(value); 

// for(key of map1.keys()){
// console.log(key);
// }

// for(value of map1.values()){
//     console.log(value);
// }


// * ARRAY TO MAP
// let array = Array.from(map1);
// console.log(array);

// array.forEach((value) => {
//     console.log(value[0],value[1]);
// });

//* MAP TO ARRAY

// let array2 = [
//     [1, "Adana"],
//     [34, "İstanbul"],
//     [35, "İzmir"],
// ]

// let map = new Map(array2);
// console.log(map);
// let myArray = Array.from(map);
// console.log(myArray);

let arrayKey= [1,2,3];
map1.set(1,"Adana");
map1.set(34,"İstanbul");
map1.set(35,"İzmir");
map1.set(6,"Ankara");
map1.set(arrayKey,"Array");

console.log(map1.get(arrayKey));
