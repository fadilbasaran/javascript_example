//* Keyboard Events

//* keypress:Sadece harf ve sayılarda tetiklenmektedir.

//* keydown:Bütün tuşlarda çalışır

//* keyup:Tuştan elini kladırdığında çalışır


// document.addEventListener("keydown",run);

// function run(e)  {
//     if (e.keyCode==116){
//         alert( "Sayfa yenilenmesi engellendi");
//     }
//     // console.log(e.type);
//     console.log(e.key);
//     // console.log(e.wich);
//     // console.log(e.keyCode);
//     e.preventDefault();
//} 

const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keydown",run);

function run(e){
    cardTitle.textContent=e.target.value;
    console.log(e.target.value);
}
