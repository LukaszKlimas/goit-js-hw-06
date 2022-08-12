const input = document.querySelector('#validation-input');
console.log(input.dataset.length);
input.addEventListener("blur", () => {
   // console.log(input.value.length, input.dataset.length);
    if(input.value.length==input.dataset.length){
        input.classList.add("valid");
    }else{
        input.classList.add("invalid");
    }

  });