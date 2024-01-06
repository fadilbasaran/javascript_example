//Değişkenler Var Let Const

//Değişkenler sadece var, let ve const olarak tanımlamaktadır.

// var/let/const degiskenAdi = degiskenDegeri


//var : function scope ---Bellekte en çok yer kaplar
//let/const :block scope ---Bellekte daha az yer kaplar


// function selamVer() {
//     var selam="Herkese selam";
//     if (true) {
//         console.log(selam);
//         var sayi=3;
//         let l="let";
//         const c="const";
//         console.log(l);
//         console.log(c);
//     }
//     console.log(sayi);//var tanımlandığı için her hangi bir hata vermez.
//      // console.log(l);//l is not defined tanımlanmadı hatası verir.
// }

// selamVer();

// var a=0;
// var a=23;
// console.log(a);

// if (true) {
//     let a=3;
//     //let a=2;//Identifier 'a' has already been declared böyle bir hata ile karşılaşılır aynı değişkeni birden fazla tanımlanamaz.

// }

//  let a=5;
//  a=0;
// const b=4;
// //b=0;//Assignment to constant variable böyle bir hata ile karşılaşırız sabit bir değişkene atama gerçkeleştirilmez.

// const users={
// username:"ali",
// password:123
// };

// users.username ="fadıl";
//yapılır fakar değişken içeriğinin değiştirilmesine izin verilmez.
//let olarak tanımlama yapılsaydı içeriğinin değiştirilmesine olanak sağlardı.
