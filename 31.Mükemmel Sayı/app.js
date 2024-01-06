
//Mükemmel sayı bulma
// 6 - 28 - 496

// 6= 1-2-3-6-=12 = 6*2 bölünenlerin toplammının 2 katı olarak gelmektedir.

let sayi=Number(prompt("Bir sayı giriniz: "));

isPerfectNumber(sayi);

function isPerfectNumber(gelenSayi) {
    let toplam=0;

    for (let i = 2; i <= gelenSayi/2; i++) {
        if (gelenSayi%i == 0) {
            toplam+=i;
        }
        
    }
    toplam+=1+gelenSayi;

  if (toplam==gelenSayi*2) {
    console.log("Mükemmel sayı.");
  } else {
    console.log("Mükemmel sayı değildir.");
  }

}