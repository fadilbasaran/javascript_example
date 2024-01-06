
let matDogru, matYanlis=0;
let turDogru, turYanlis=0;
let fenDogru, fenYanlis=0;
let sosDogru, sosYanlis=0;
let puan=0;
let okulPuan=0;

let yeniSatir="\r\n";

let mesaj="TYT puan hesaplama uygulamasına hogeldiniz."+yeniSatir+
"1-Puan hesaplama"+yeniSatir+
"2-Çıkış Yap";

let secim=prompt(mesaj);

switch (secim) {
    case "1":
        okulPuan=Number(prompt("Okul puanını giriniz:"));
        
        matDogru=Number(prompt("Matematik doğru sayısı giriniz:"));
        matYanlis =Number(prompt("Matematik yanlış sayısı giriniz:"));

        turDogru=Number(prompt("Türkçe doğru sayısı giriniz:"));
        turYanlis =Number(prompt("Türkçe yanlış sayısı giriniz:"));

        sosDogru=Number(prompt("Sosyal doğru sayısı giriniz:"));
        sosYanlis =Number(prompt("Sosyal yanlış sayısı giriniz:"));

        fenDogru=Number(prompt("Fen Bilimleri doğru sayısı giriniz:"));
        fenYanlis =Number(prompt("Fen Bilimleri yanlış sayısı giriniz:"));

        let dogruSayisi = matDogru+turDogru+sosDogru+fenDogru;
        let yanliSayisi = matYanlis+turYanlis+sosYanlis+fenYanlis;

        let toplamDogruSayisi = dogruSayisi-(yanliSayisi/4);

        let toplamPuan=(dogruSayisi*4)+100+okulPuan;

        alert("TYT puanınız : "+toplamPuan);
        break;
    case "2":
        alert("Uygulamadan çıkış yapıldı.")
        break;

    default:
        alert("Lütfen istenilen aralıkta giriniz(1-2)")
        break;
}
