const btnGeneration = document.querySelector("#generation-btn");
const selectGeneration = document.querySelector("#generation-length");
const fieldPassword = document.querySelector("#password");
const formTable = document.querySelector("#form");
const fieldName = document.querySelector("#first-name");
const fieldSurname = document.querySelector("#last-name");
const inputs = document.querySelectorAll(".form__text--check");
const messages = document.querySelectorAll(".form__message-check");
const btnNext = document.querySelector("#btn-next");
let error = false;
let cntNameError = 0;

const errorHandler = (message, i, isError) => {
    if (isError) {
        messages[i].innerHTML = message;
        messages[i].classList.remove("form__message-check--good");
        messages[i].classList.add("form__message-check--err");
        inputs[i].classList.add("form__text--err");
    } else {
        inputs[i].classList.remove("form__text--err");
        messages[i].innerHTML = "";
        messages[i].classList.remove("form__message-check--err");
        messages[i].classList.add("form__message-check--good");
    }
}
btnGeneration.addEventListener('click', ()=>{
    if (Number.isInteger(+selectGeneration.value))
        fieldPassword.value = getRandomPassword(+selectGeneration.value);
    else 
        fieldPassword.value = getRandomPassword();
});

formTable.onsubmit = function (e) {
    error  = false;
    cntNameError = 0;
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].value === "") {
                inputs[i].classList.add("form__text--err");
                    error = true;
            } else {
                if ((inputs[i].name === "first-name" || inputs[i].name === "last-name")) {
                    if (inputs[i].value.search(/\d/) != -1) {
                        errorHandler("  Enter without numbers", i, true); 
                        error = true;
                        cntNameError++;
                    } else {
                        fieldName.value = upperFisrtLetter(fieldName.value);
                        fieldSurname.value = upperFisrtLetter(fieldSurname.value);
                        errorHandler("", i, false); 
                        if (cntNameError === 2)
                            error = false;
                    }

                }
                if (inputs[i].name === "password")
                    inputs[i].classList.remove("form__text--err");
            }
        }
        if(!error) {
            btnNext.style.display = "block";
        }
        
        e.preventDefault();
        
};

document.querySelector("input[type='reset']").addEventListener('click', function(){
    tnNext.style.display = "none";
    for(let i = 0; i <= inputs.length; i++) {
        inputs[i].classList.remove("form__text--err");
        messages[i].innerHTML = "";
    }
});


