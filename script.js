let inputs = document.querySelectorAll("input[type='number']");
let btn = document.querySelector("button");
btn.disabled = true;

let result = document.querySelector("p");
let success = result.querySelector("#success")
let error = result.querySelector("#error");


inputs[0].addEventListener("input", validarButton)
inputs[1].addEventListener("input", validarButton)

btn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(success, error);
    
    if (inputs[0].value < inputs[1].value) {
        success.innerHTML = `O número ${inputs[1].value} é maior que o número ${inputs[0].value}.`;
        success.style.display = "block";
        error.style.display = "none";
    }
});


function validarButton() {
    if (inputs[0].value < inputs[1].value) {
        btn.disabled = false;
        success.style.display = "none";
        error.style.display = "none";
    } else {
        success.style.display = "none";
        error.style.display = "block";
        btn.disabled = true;
    }
}