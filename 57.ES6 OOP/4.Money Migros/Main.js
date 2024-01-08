
let mesaj = 
`MoneyClub kartnınız var mı?
1-Evet
2-Hayır
`;

let cevap = confirm(mesaj);
let urunler = [
    {
        urunAdi: "Su",
        fiyat: 10
    },
    {
        urunAdi: "Kuşbaşı",
        fiyat:220
    },
    {
        urunAdi:"Bebek bezi",
        fiyat:150
    }
];

let odenecekTutar;

if (cevap) {
    let isim = prompt("Adınızı giriniz: ");
    let soyIsim = prompt("Soyisminizi giriniz: ");
    const musteri = new Musteri(isim,soyIsim,cevap,urunler);

     odenecekTutar = musteri.hesapla();

     alert(`
     ${isim}
     ${soyIsim}
     Ödenecek tutar:${odenecekTutar} 
     `);
} else {
    const musteri = new Musteri(null,null,cevap,urunler);

    odenecekTutar = musteri.hesapla();

    alert(`
   ${odenecekTutar} 
    `);

    
}