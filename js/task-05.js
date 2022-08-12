const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
// output.textContent="assad"; działa
input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
  });