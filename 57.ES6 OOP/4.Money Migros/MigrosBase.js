class MigrosBase {

    indirimOrani = 20;

    constructor(isim, soyIsim, kartVarMi, urunler) {
        this.isim = isim;
        this.soyIsim = soyIsim;
        this.kartVarMi = kartVarMi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;

        if (this.urunKontrol(this.urunler)) {
            if (this.kartVarMi) {
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani)) / 100;
                });
            } else {
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                });
            }

        } else {
            alert("Lütfen en az bir tane ürün sprariş ediniz");
        }

        return odenecekTutar;

    }
    urunKontrol(urunler) {
        if (urunler == null || urunler.length < 0) {
            return false;
        } else {

            return true;
        }
    }
}
