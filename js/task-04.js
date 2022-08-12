
/* alternatywna bezpieczna wersja usuwa child i dodaje nowego spam
var span = document.getElementById('someID');

while( span.firstChild ) {
span.removeChild( span.firstChild );
}
span.appendChild( document.createTextNode("some new content") );
*/
//document.getElementById('value').textContent="5";
let currentValue=0;
const decrementBtn = document.querySelector("#counter").firstElementChild;
//console.log(button);
const incrementBtn = document.querySelector('button[data-action="increment"]');

function Click1(){
    currentValue-=1;
    document.getElementById('value').textContent=currentValue;
    console.log(currentValue);
};
//musiałem NAPISAĆ drugą funcje, bo pierwszej niechciało się przekazać parametru
const Click2=()=>{
    currentValue+=1;
    document.getElementById('value').textContent=currentValue;
    console.log(currentValue);
};
decrementBtn.addEventListener("click",Click1);
incrementBtn.addEventListener("click",Click2);
