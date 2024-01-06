
let dizel=24.53, benzin=22.25, lpg=11.11;

const yeniSatir= "\r\n";

const yaktiMetni = "1-Dizel "+yeniSatir+"2-Benzin"+
yeniSatir+"3-Lpg"+yeniSatir+" Yakıt türünü giriniz:";

let yakitTipi = prompt(yaktiMetni);

let yakitLitresi=Number(prompt("Yakıt Litresini giriniz:"));
let bakiye = Number(prompt("Bakiyenizi giriniz:"));


if (yakitTipi=="1") {
    let odenecekTutar=dizel*yakitLitresi;
    if (odenecekTutar<bakiye) {

        //Başarılı
        bakiye-=odenecekTutar;
        alert("Yakıt alma işlemi başarılı."
        +yeniSatir+"Son bakiye: "+bakiye);

    } else {
        //Başarısız

        alert("Yakıt alma işlemi başarısız."+yeniSatir+"Eksik bakiye: "+(odenecekTutar-bakiye))
    }
} else if(yakıtTipi=="2") {
    //Benzin
    let odenecekTutar=benzin*yakitLitresi;
    if (odenecekTutar<bakiye) {

        //Başarılı
        bakiye-=odenecekTutar;
        alert("Yakıt alma işlemi başarılı."
        +yeniSatir+"Son bakiye: "+bakiye);

    } else {
        //Başarısız

        alert("Yakıt alma işlemi başarısız."+yeniSatir+"Eksik bakiye: "+(odenecekTutar-bakiye))
    }
}else{
//Lpg
let odenecekTutar=lpg*yakitLitresi;
    if (odenecekTutar<bakiye) {

        //Başarılı
        bakiye-=odenecekTutar;
        alert("Yakıt alma işlemi başarılı."
        +yeniSatir+"Son bakiye: "+bakiye);

    } else {
        //Başarısız

        alert("Yakıt alma işlemi başarısız."+yeniSatir+"Eksik bakiye: "+(odenecekTutar-bakiye))
    }
}