// class Matematik{
//     static language=20;

//     constructor(isim){
//         this.isim=isim;
//     }

//     showInfo(){
//         console.log(this.isim,this.language);
//     }

//     topla(a,b){
//         console.log(a+b);
//     }
//     cikar(a,b){
//         console.log(a-b);
//     }
//     carp(a,b){
//         console.log(a*b);
//     }
//     static bol(a,b){
//         console.log(a/b);
//     }

// }

// let mat = new Matematik();

// mat.topla(2,3);
// Matematik.bol(2,3);//Sadece sınıf üzerinden erişimi var
// let mat2 = new Matematik("Ali");
// mat2.showInfo(); //Language değişkeni static olduğundan nesne üzerinden erişim yapılamıyor


 class StringUIUtil{
    static isNull(object){
        if (object==null) {
            console.log("Null");
        } else {
            console.log("Null değildir");
        }
    }
    static getCharacterLength(char){
        console.log(char.length);
    }
 }

StringUIUtil.getCharacterLength("Beni anla")
StringUIUtil.isNull("");
