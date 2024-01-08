
//* OOP

class Insan{

    constructor(isim, soyIsim, maas) {
        this.isim = isim;
        this.soyIsim = soyIsim;
        this.maas = maas;
    }

    bilgileriGetir() {
        console.log(`
        İsim: ${this.isim} 
        Soyadı: ${this.soyIsim} 
        Maaş: ${this.maas}`);
    }
}

let insan1 = new Insan("Fadıl","Başaran",23000);
let insan2 = new Insan("Mert","Başaran",24000);
insan1.bilgileriGetir();
insan2.bilgileriGetir();