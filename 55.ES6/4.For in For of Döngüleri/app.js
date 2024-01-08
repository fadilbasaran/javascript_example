let isimler =["Ali","Ahmet","Mehmet"]

for(isim in isimler){

    console.log(isim, isimler[isim]);
}

for(isim of isimler){
    console.log( isimler.indexOf(isim),isim);
}