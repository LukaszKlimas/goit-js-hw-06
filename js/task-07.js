const input = document.querySelector('#font-size-control');
//console.log(input.value);
const text = document.querySelector('#text');
function zmiana(){
    //text.setAttribute("value", input.value);
    text.style.fontSize =input.value+"px";
}
input.addEventListener("change", zmiana);