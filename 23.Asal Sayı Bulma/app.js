
let giriLenSayi = Number(prompt("Bir sayı giriniz: "));
sonuc = true;
for (let i = 2; i <= Math.floor(giriLenSayi/2); i++) {

    if (giriLenSayi % i == 0) {
        sonuc = false;
        
        break;
    }
    
}

if (sonuc) {
    alert(giriLenSayi+" sayi asaldır ");
}else{
    alert(giriLenSayi+" sayi asal değildir");
}
