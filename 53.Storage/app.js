//* Storage

//Seesion Storage değer ekleme

// sessionStorage.setItem("1","Ahmet");
// sessionStorage.setItem("2","Ali");
// sessionStorage.setItem("3","Mert");

// //* Değer silme

// sessionStorage.removeItem("1");
// sessionStorage.removeItem("2");

// //* Değer getirme

// let yourNames=sessionStorage.getItem("3df");
// console.log(yourNames==null?"değer yok":yourNames);

// sessionStorage.clear(); 

//* Storage - Array eklme

// let names=["Ali","Mert","Veli","Vedat"];

// sessionStorage.setItem("names",JSON.stringify(names));

// let getNames=JSON.parse(sessionStorage.getItem("names"));
// console.log(typeof getNames);
// console.log(getNames);

// getNames.forEach(function(name){
//     console.log(name);
// });

//* Local Storage 

//* Değer Ekleme
// localStorage.setItem("23","Elazığ");
// localStorage.setItem("35","İzmir");

// //* Değer Alma

// let getCity = localStorage.getItem("23");

// console.log(getCity);

// //* Değer Silme 

// localStorage.removeItem("35");

// //* Bütün değer silme

// localStorage.clear();
let cities= ["Londra","Şikago","Tokyo"];
localStorage.setItem("cities",JSON.stringify(cities))

let getCities = JSON.parse(localStorage.getItem("cities"));

console.log(getCities);

getCities.forEach(function(city){
    console.log(city);
});

localStorage.clear();