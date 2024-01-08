//* Destraction

// let langs =["c#","java","python"]

// let [a,b,c] = langs



const hesapla = (a,b,c) => {
const toplam=a+b;
const carp=a*b;
const bol=a/b;

const dizi=[toplam,carp,bol];
return dizi;
}

let [a, b, c]  = hesapla(1,2,3);

console.log(a,b,c)

let person ={
    firstName:"john",
    lastName: "Max",
    age:34
}
// let isim=person.firstName;
// let soyisim=person.lastName;
// let yas=person.age;

let {firstName:isim,lastName:soyIsım,age:yas} = person;
console.log(isim, soyIsım, yas);