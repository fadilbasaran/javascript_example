//* HTML Elementler Üzerinde Gezinme

const todo = document.querySelector(".list-group-item ")
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)")
// const card= document. getElementsByClassName("card")[0];
const card = document.querySelector(".card");
const row = document.querySelector(".row")
const container = document.querySelector(".container");
// console.log(card);

let value;

//* Anneden çocuklara erişmek

value = todoList.children;
value=todoList.children[0];
value=todoList.children[3];
value=todoList.children[todoList.children.length - 1];
value=todoList.children[3].textContent="Değişti"

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// });


//* Çocuktan Anneye erişmek

value = todo;

ul = todo.parentElement;
cardBody = ul.parentElement;
cardElement = cardBody.parentElement;
// row = cardElement.parentElement;
// container = row.parentElement;

//* Kardeşler arasında gezinmek

value = todo.nextElementSibling.nextElementSibling.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling

value =  todoLastChild.previousElementSibling.
previousElementSibling.nextElementSibling;

value = row.children[0].children[3].children[0].textContent="Todo Listesi Güncellendi";

let todo3 = container.children[0].children[0].children[3].children[2].children[2];
todo3.textContent="Değişen dünya Todo3";
todo3.style.backgroundColor = " lightgreen";
todo3.style.color = "white";

console.log(value);