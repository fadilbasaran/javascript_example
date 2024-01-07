//* Input Events
/**
 * *focus
 * *blur
 * *copy
 * *paste
 * *cut
 * *select
 */

const input = document.querySelector("#todoName") ;

input.addEventListener("focus",run);
input.addEventListener("blur",run);
input.addEventListener("copy",run);
input.addEventListener("cut",run);
input.addEventListener("paste",run);
input.addEventListener("select",run);

function run(e) {
    console.log(e.type);
}