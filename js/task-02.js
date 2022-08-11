const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list=document.querySelector("#ingredients");
ingredients.every((ele)=>{
let listElement=document.createElement("li");
listElement.innerText=ele;
console.log(ele);
list.append(listElement);
return true;
});