function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body=document.body;
btn.addEventListener("click",(event)=>{
  //console.log("wbiłem");
  let colorHex=getRandomHexColor();
  span.textContent=colorHex;
  body.style.backgroundColor=colorHex;
});