let el = document.querySelector(`#categories`);
let item = document.querySelector(`.item`);
let items = document.querySelectorAll("h2");

console.log(el.childElementCount);
/*
for(i=0; i<items.length; i++){
console.log(items[i].innerText);
}
*/
items.forEach(index=>{
    console.log(index.innerText, index.nextElementSibling.childElementCount);

});