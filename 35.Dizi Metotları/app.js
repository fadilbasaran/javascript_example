//Dizi Methods

let cars=["bwm","honda","ford","mercedes","opel"];
// let cars2=["hundai","toyota"];
console.log(cars);
// PUSH METHOD
// let arrayLen=cars.push("renault");
// console.log(arrayLen);//?Give us the length of the array
// console.log(cars);

// UNSHIFT METHOD
// cars.unshift("wolsvagen")//?Head of array added wolsvagen and give us the length of the array
// console.log(cars);

// POP METHOD
// let arryLastE=cars.pop();//?Removes the last element from an array and returns it.
// console.log(cars);
// console.log(arryLastE);

//SHIFT METHOD
// let deletesElemant=cars.shift();//? Removes the first element from an array and returns it.
// console.log(cars);
// console.log(deletesElemant);

//SPLICE METHOD

// cars.splice(3,0,"hundai");//? Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(cars);

// cars.splice(1,2);//Start with 1 delete 2 elements
// console.log(cars);

// cars.splice(2,2,"hundai");// Ford and mercedes dleleted and added to hundai
// console.log(cars);

//TOSTRING METHOD
// let toS=cars.toString();
// console.log(typeof toS);
// console.log(toS);

//JOIN METHOD
// let carsJ =cars.join("-");//?Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(carsJ);
// console.log(typeof carsJ);

//CONCAT METHOD
// let carsC = cars.concat(cars2);
// console.log(carsC);//Cars2 array concat elements with the cars

//SCLICE METHOD
// let carsS= cars.slice(2);//2 then clice and added to new array
// console.log(carsS);

//LENGTH METHOD
//cars.length;

//REVERSE METHOD
// let carsR = cars.reverse();//? Reverese the array
// console.log(carsR);

//SPLIT METHOD
// let names="Ali,Veli,Meli";

// let splitedArray=names.split(",");
// console.log(splitedArray);

//INDEXOFF METHOD
let index=cars.indexOf("ford");
console.log(index);//?Give us the index of ford car

//INCLUDES METHOD
let carsIn=cars.includes("ford");
console.log(carsIn?"eleman var ":"eleman yok");
