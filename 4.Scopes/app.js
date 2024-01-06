// * Let-- Var -- Const

/*
?------SCOPE-------

    ->Global Scope : Her yerden erişim imkanımız bulunmaktadır 
    ->Function Scope :  Sadece fonksiyon satıları arasında erişilebilir
    ->Block Scope

 */
// var degiskenİsmi= 10;

// console.log(degiskenİsmi);

// var a =6

// if (true) {
//     console.log(a);
// }

// function method() {
//     console.log(a);
// }
// method();


// function method() {
//     var sayi=10
// }
// console.log(sayi);

function method() {
    var a=34;//Function scope

    console.log(a);

    if (true) {
        var sayi=10;//Block scope
        console.log(sayi);
    }
    for (let i = 0; i < 20; i++) {
        
    }
    
}
method();