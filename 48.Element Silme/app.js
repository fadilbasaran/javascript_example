//* Element Silme
const todoList = document.querySelector(".list-group");
const todos =document.querySelectorAll(".list-group-item");
const todo1 = document.querySelector(".list-group-item");

console.log(todos);
// todo1.remove();
// todos[2].remove();
// todos[todos.length-1].remove();//4 silinece

// todoList.removeChild(todo1);
// todoList.removeChild(todos[todos.length-1]);
todoList.removeChild(todoList.lastElementChild);



// console.log(todo1);