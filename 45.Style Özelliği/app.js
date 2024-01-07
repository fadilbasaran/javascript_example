//* Style Özelliğini Anlamak

const todo = document.querySelectorAll(".list-group-item ")[0];
const todoList = document.querySelector(".list-group");
const clearButton = document.querySelector("#todoClearButton");


todo.style.color="#fff";//Yazı rengini kırmızı yapar.
todo.style.backgroundColor="purple";//Yazı rengini kırmızı yapar.
todo.style.fontWeight="bold";
todo.style.padding="20px";
todo.style.paddingTop="30px";

todoList.style.marginTop="40px";
// todoList.style.margin="30px";

clearButton.style.backgroundColor="green";
clearButton.style.fontWeight="bold";
clearButton.style.padding="10px"
clearButton.style.borderRadius="30px"

// console.log(clearButton);  