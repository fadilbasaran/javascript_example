//* Selectors(Seçiciler) - Style Özellikleri

//* class, id, tag name

//* getelementById: ID'ye göre elementi yakalar.
//* getelementByClassName: Class adına göre elementi yakalar.
//* getelementByTagName: Etkitek ismine göre elementi yakalar.

// const button = document.getElementById("todoAddButton");

// console.log(button);

// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi=button.classList[3];
// const classListesi=button.classList[2];

// const classListesi=button.classList

// classListesi.forEach(function(className){
//     console.log(className);
// });

// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);
// button.textContent="<b>To Do ekleyin</b>";//HTML etkiketelerini görmemektedir.
// button.innerHTML = "<b>To Do ekleyin</b>";//HTML etiketlerini gömektedir


// const todoList = Array.from(document.getElementsByClassName("list-group-item"));


// todoList.forEach(function (todo) {
//     console.log(todo.textContent);
// });

// console.log(todoList);

// const forms=Array.from(document.getElementsByTagName("form"));

// forms.forEach(function (form) {
//     console.log(form);
// })

// console.log(forms[0].id);

//  const listItem=document.getElementsByTagName("button");

//  console.log(listItem);

 //* getElementById -getElementByClassName- getElementByTagName

 //* quarySelector - quarySelectorAll

//  const clearButton=document.querySelector("#todoClearButton");//id için # kullanılır.

//  console.log(clearButton);

// const todoList=document.querySelector(".list-group");

// console.log(todoList); 

// const todoListList=document.querySelectorAll(".list-group-item");//Bütün hepsi gelmektedir.
// const todoListList=document.querySelectorAll(".list-group-item")[0];//0 indexteki elemanı getirmek için kullanılır.
// const todoListList=document.querySelectorAll("li:nth-child(odd)");//tek olan elemanları getirmek için kullanılır.
const todoListList = Array.from(document.querySelectorAll("li:nth-child(even)"));//çift olan elemanları getirmek için kullanılır.

todoListList.forEach(function (todo) {
    todo.style.backgroundColor="lightgrey" ;
});
// console.log(todoListList);

