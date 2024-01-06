//Girilen metinde kaç taner harf geçtiğini bulan uygulama

let metin = "Beni anla hallerim var benim bitanem."


let harf = prompt("Lütfen bir tane harf giriniz");
let sonuc = harfBul(harf);

alert("Metinde " + sonuc + " geçmektedir.")
function harfBul(harf) {
    let toplam = 0;

    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase() == harf.toLowerCase()) {
            toplam++;
        }
    }

    return toplam;
}


