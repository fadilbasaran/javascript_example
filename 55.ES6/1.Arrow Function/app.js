//* Arrow functions

// function yazdir(isim) {
//     console.log(`Merhaba ${isim}`);
// }


const yazdir = (isim) => {console.log(`Merhaba ${isim}`)};
const yazdir1 = (isim,soyad) => {console.log(`Merhaba ${isim} ${soyad}`);};
const yazdir2 = isim => console.log(`Merhaba ${isim}`);
const mesaj = () => console.log("Mesaj geldi");
mesaj();
yazdir1("Fadıl","Başaran");

