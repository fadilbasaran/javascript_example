//* Element değiştirme

const cardBody =document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.innerHTML="Yeni Todo Listesi";

 cardBody.replaceChild(newTitle,cardBody.childNodes[1])

// console.log(cardBody.childNodes);