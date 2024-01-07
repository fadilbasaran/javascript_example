//* Mouse Events

// const todoClearButton = document.querySelector("#todoClearButton");

// todoClearButton.addEventListener("click", changeTitle);

// function changeTitle(e){
// console.log(e.target);
// console.log(e.target.className);
// console.log(e.target.textContent);
// console.log(e.type);//Event's type (click) 
// e.target.textContent="Ali"
// console.log(e.target.textContent);
//}
// function changeTitle() {
//     document.querySelectorAll(".card-title")[1].textContent="Başlık Değişti";

// }
// console.log(todoClearButton);

//* Mouse Events

/**
 **  DomContentLoaded:Sayfa yüklendiğinde
 * * load
 * * click
 * * dblclick
 * * mouseover
 * * mouseout
 * * mouseenter
 * * mouseleave
 * 
 */

//  document.addEventListener("DOMContentLoaded",()=>{
//     console.log("Sayfa yüklendi...");
//  });
//  window.addEventListener("load",()=>{
//     console.log("load Sayfa yüklendi...");
//  });


const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// console.log(cardTitle);
// cardTitle.addEventListener("click",run);
// cardTitle.addEventListener("dblclick",run);

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);//?Sadece tanımlanan etiket için çalışır

function run(e) {
    console.log(e.type);
}