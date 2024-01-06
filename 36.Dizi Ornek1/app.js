let urun1 = {
    isim: "Acer a",
    kategori: "Teknoloji",
    fiyat: 21.222
}
let urun2 = {
    isim: "Acer b",
    kategori: "Teknoloji",
    fiyat: 34.222
}
let urun3 = {
    isim: "Lenovo a",
    kategori: "Teknoloji",
    fiyat: 56.222
}
let urun4 = {
    isim: "Lenovo b",
    kategori: "Teknoloji",
    fiyat: 10.222
}
let urun5 = {
    isim: "Acer c",
    kategori: "Teknoloji",
    fiyat: 23.222
}

let urunler = [urun1, urun2, urun3, urun4, urun5];
let arananUrun = prompt("Aradığınız ürünün ismini giriniz: ");
let filterUrunler = [];
filtreliUrunleriDoldur(urunler);
filterUrunleriYazdir(filterUrunler);

function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(arananUrun.toUpperCase(), 0)) {
            filterUrunler.push(urun);
        }
    });
}
function filterUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("-------------------------------");
        console.log("|" + urun.isim + "|" + urun.kategori + "|" + urun.fiyat + "|");
        console.log("-------------------------------");
    })
}