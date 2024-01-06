//Amstrong sayısı bulma
//153 - 370  - 407

let sayi = prompt("Bir sayı giriniz: ");
toplam = 0;
for (let i = 0; i < sayi.length; i++) {
    let rakam = sayi.charAt(i);
    toplam += rakam ** 3;
}
if (Number(sayi) == toplam) {
    alert(sayi + " Amstrong sayısıdır.");
} else {
    alert(sayi + " sayısı Amstrong  değildir.");
}