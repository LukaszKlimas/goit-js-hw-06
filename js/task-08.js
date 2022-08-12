const form = document.querySelector('.login-form');
//console.log(form.childElementCount, form.attributes);
//console.log(form.getElementsByTagName("email"));
//console.log(document.getElementsByName('email'));
//console.log(form.firstElementChild.firstElementChild);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
    
    if(email.value==0 || password.value==0){
        alert("wszystkie pola powinny zostać wypełnione!");
    }else{
        console.log(email.name, email.value,password.name, password.value);
        email.value="";
        password.value="";
    }
  });