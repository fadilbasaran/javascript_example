// *-----DİYALOG KUTULARIT -----
/*
1--ALERT 
2-- Propt
3--Confirm

*/


//alert("bilgi vermek için kullanılır.");

let isim = prompt("İsminizi giriniz : ");
let yas = prompt("İsminizi giriniz : "); 

alert(`İsminiz : ${isim} yas : ${yas}`);

let yanit = confirm("Silmek istediğinize emin misiniz?")
console.log(yanit?"Silindi!":"İptal edildi");