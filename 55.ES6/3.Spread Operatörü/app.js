//* Spread Operatörü...

// let numbers = [1, 2, 3];

// let add =(a,b,c)=> {console.log(a+b+c);}

//*Eskiden

// add(numbers[0],numbers[1],numbers[2])
//...numbers ---->numbers[0],numbers[1],numbers[2]
// add(...numbers);

// let dizi=["a", "b", "c", "d", "e"]
// let dizi2=["a", "b", "c", "d",...dizi];
// console.log(dizi2);

// let numbers = [1, 2, 3, 4, 5, 6, 7]

// let [a,b, ...kalanlar] = numbers
// console.log(a,b,kalanlar);

const dizi1 = ["a", "b", "c", "d", "e"]

// dizi1[0] =dizi2[0]
// dizi1[1] =dizi2[1]
// dizi1[2] =dizi2[2]
// dizi1[3] =dizi2[3]

const dizi2 =[...dizi1];
