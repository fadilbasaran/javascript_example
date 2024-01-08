//* Tüm Elementlerin Seçilmesi

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCard = document.querySelectorAll(".card-body")[0];
const secondCard = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");
let todos;
runEvent();

function runEvent() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCard.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodosEverywhere);
    filterInput.addEventListener("keyup", filter);

}

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item ");
    console.log(todoListesi.length);
    if (todoListesi.length > 0) {
      
        todoListesi.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important");
            }
        });
    } else {
        showAlert("warning", "Filtreleme yapmak için ekranda en az bir todo olmalıdır.")
    }
}

function allTodosEverywhere() {
    const todoListesi = document.querySelectorAll(".list-group-item ");

    if (todos.length > 0) {
        //?Ekrandan silindi
        todoListesi.forEach(function (todo) {
            todo.remove();
        });
        //?Storage silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarılı bir şekilde silindi...");
    } else {
        showAlert("warning", "Silmek için en az bir todo olmalıdır.")
    }

    console.log(todoListesi);
}

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function removeTodoToUI(e) {

    if (e.target.className == "fa fa-remove") {
        //*Ekrandan Silme
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        //* Storage Silme
        removeTodoToStorage(todo.textContent);
        showAlert("success", "Todo başarıyla silindi");
    }

}

function removeTodoToStorage(removeTodo) {
    checkTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (removeTodo === todo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {

    const inputText = addInput.value.trim();

    if (inputText == "" || inputText == null) {
        showAlert("warning", "Lütfen bir değer giriniz!");
    } else {
        //*Aryüze ekleme
        addTodoToUI(inputText);
        addTodoStorage(inputText);
        showAlert("success", "Todo eklendi :) ");
    }

    e.preventDefault();

}
function showAlert(type, massage) {
    /* <div class="alert alert-warning" role="alert">
   A simple warning alert—check it out!
     </div>*/

    let div = document.createElement("div");
    //    div.className = "alert alert-"+type;
    div.className = `alert alert-${type}`//literal tapmlate
    //div.role = "alert";
    div.textContent = massage;
    console.log(div);
    firstCard.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 2500);

}

function addTodoStorage(newTodo) {
    checkTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));

}
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
function addTodoToUI(newTodo) {


    /* <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>
    </li>
    */

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    let a = document.createElement("a");
    a.href = "#"
    a.className = "delete-item";

    let i = document.createElement("i");
    i.className = "fa fa-remove";
    todoList.appendChild(li);
    li.appendChild(a);
    a.appendChild(i);
    addInput.value = "";

}