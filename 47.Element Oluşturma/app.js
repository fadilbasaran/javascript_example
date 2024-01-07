//* Element oluşturma

const link = document.createElement("a");

link.id="goBlogWebSite";
link.className="btn btn-primary btn-sm mt-3";
link.href="http://kariyer.net";
link.target="_blank";
link.innerHTML="Kişisel Web siteme git";

// console.log(link);

const cardBody = document.querySelectorAll(".card-body")[1];
 cardBody.appendChild(link);
 /*
<li class="list-group-item d-flex justify-content-between">Todo 1
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>
</li>
*/
const todoList=document.querySelector(".list-group");
const todo = document.createElement("li");
todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = " Todo 5";

const a = document.createElement("a");
a.className = "delete-item";
a.href="#";

const i = document.createElement("i");
i.className = "fa fa-remove";
a.appendChild(i);
todo.appendChild(a);
todoList.appendChild(todo);


console.log(todo);