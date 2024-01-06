
let vize1= Number(prompt("Vize1 giriniz : "));
let vize2= Number(prompt("Vize2 giriniz : "));
let final= Number(prompt("Final giriniz : "));


let ortalama= vize1*0.3+vize2*0.3+final*0.4;

if (ortalama>65) {
    alert("Tebrikler geçtiniz. "+ortalama);

}else{
    alert("Maalesef kaldınız. "+ortalama);
}