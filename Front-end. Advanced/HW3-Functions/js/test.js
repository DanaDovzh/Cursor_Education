const maxDigit = document.querySelector("#max-gigit");
const baseNumberForPow = document.querySelector("#base-number");
const degreeNumberForPow = document.querySelector("#degree-number");
const randomWord = document.querySelector("#random-word");
const letterForRandomWord = document.querySelector("#random-letter");
const randomWordWithoutLetter = document.querySelector("#random-word-WL");
const letterForRandomWordWithoutLetter = document.querySelector("#random-letter-WL");
const palindromWord = document.querySelector("#palindrom-word");
const sentenceDeleteDuplicate = document.querySelector("#sentence");

const inputs = document.querySelectorAll(".form__text--check");
const messages = document.querySelectorAll(".form__message-check");
const formTable = document.querySelector("#form");
const valueMaxDigit = document.querySelector("#max-gigit-answer");
const valueAnswerPow = document.querySelector("#pow-answer");
const answerCountLetters = document.querySelector("#count-letters");
const answerWordWithoutLetter = document.querySelector("#word-without-letter");
const answerPolindrom = document.querySelector("#polindrom-answer");
const answerDuplicate = document.querySelector("#aswer-duplicate");
const resultText = document.querySelector("#result");
const resultBlock = document.querySelector(".result");
const taxes = document.querySelector("#taxes");
const inputSalary = document.querySelector("#salary");
const salaryResult = document.querySelector("#convers");
const salaryWithTaxes = document.querySelector("#salaryi-with-taxes");
const btnReset = document.querySelector("input[type='reset']");
const btnSalary = document.querySelector("#btn-salary");

const arrayWords = ["Асталавіста", "гідроелектростанція", "Корпоративний","Сфотографувати","Концептуальний", "Дихлордифенілтрихлорметилметан ", 
"Щоякнайстароцерковнословянськіший", "рентгеноелектрокардіографічного","інформатика", "електромашинобудівний", "тетраметилбутан",
"Самонавіювання", "бібліотека", "флороглюцинол", "Акліматизація", "ізопропоксибутан"];
const alphabetUA = ["а", "б", "в", "г", "д","е", "є","ж", "з","и", "і","ї", "й","к", "л","м", "н","о", "п","р", "с","т",
 "у","ф", "х","ц", "ч","ш", "щ"];
 const arrayWordsPolindrom = ["кит на морі романтик", "абракадабра", "Уму мінімуму", "Балаканина", "Три психи пили Пилипихи спирт",
"Аби ріці риба", "шалаш", "Амоніфікація"];
const arraySentence = ["Бути на сьомому небі", "Бісквіт був дуже ніжним", " Вавилонське стовпотворіння", "Вискочити як Пилип з конопель",
"Десята вода на киселі", "Золоті верби ростуть", "Міняти шило на швайку", "Не чути землі під ногами"];

let error = false;
let checkPolindrom;
let correctAnswer = 0;

maxDigit.innerHTML = getRandomNumber(10, 2000000);
baseNumberForPow.innerHTML = getRandomNumber(-10, 20);
degreeNumberForPow.innerHTML = getRandomNumber(-5, 5);
randomWord.innerHTML = arrayWords[getRandomNumber(0, arrayWords.length)];
letterForRandomWord.innerHTML = alphabetUA[getRandomNumber(0, alphabetUA.length)];
randomWordWithoutLetter.innerHTML = arrayWords[getRandomNumber(0, arrayWords.length)];
letterForRandomWordWithoutLetter.innerHTML = alphabetUA[getRandomNumber(0, alphabetUA.length)];
palindromWord.innerHTML = arrayWordsPolindrom[getRandomNumber(0, arrayWordsPolindrom.length)];
sentenceDeleteDuplicate.innerHTML = arraySentence[getRandomNumber(0, arraySentence.length)];

function isError(message, i) {
    messages[i].innerHTML = message;
    messages[i].classList.remove("form__message-check--good");
    messages[i].classList.add("form__message-check--err");
    inputs[i].classList.add("form__text--err");
}
function notError(i) {
    inputs[i].classList.remove("form__text--err");
    messages[i].innerHTML = "  &#10004";
    messages[i].classList.remove("form__message-check--err");
    messages[i].classList.add("form__message-check--good");
    correctAnswer++;
}

formTable.onsubmit = function (e) {
    error  = false;
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].value === "") {
                inputs[i].classList.add("form__text--err");
                    error = true;
            } else {
                if(inputs[i].name === "func-max-gigit") {
                    (valueMaxDigit.value === getMaxDigit(+maxDigit.innerHTML)) ? notError(i) : isError("&#10007;", i);
                }
                if(inputs[i].name === "func-pow") {
                    (+valueAnswerPow.value === powNumber(+baseNumberForPow.innerHTML, +degreeNumberForPow.innerHTML)) ? notError(i) : isError("&#10007;", i);
                }
                if(inputs[i].name === "func-count-letters") {
                    (+answerCountLetters.value === countLetter(letterForRandomWord.innerHTML, randomWord.innerHTML)) ? notError(i) : isError("&#10007;", i);
                } 
                if(inputs[i].name === "func-word-without-letter") {
                    (answerWordWithoutLetter.value.toLowerCase().trim() === deleteLetters(letterForRandomWordWithoutLetter.innerHTML, randomWordWithoutLetter.innerHTML)) ? notError(i) : isError("&#10007;", i);
                }
                if(inputs[i].name === "func-polindron") {
                    if (answerPolindrom.value.toLowerCase() === "так" || answerPolindrom.value.toLowerCase() === "ні") {
                        if (answerPolindrom.value.toLowerCase() === "так") {
                            checkPolindrom = true;
                        } else if (answerPolindrom.value.toLowerCase() === "ні") {
                            checkPolindrom = false;
                        }
                        if (checkPolindrom === isPalyndrom(palindromWord.innerHTML))
                            notError(i);
                        else 
                            isError("&#10007;", i);
                    } else {
                        isError("Введіть \"так\" або \"ні\"", i);
                        error = true;
                    }
                }
                if(inputs[i].name === "func-duplicate") {

                    (answerDuplicate.value === deleteDuplicateLetter(sentenceDeleteDuplicate.innerHTML)) ? notError(i) : isError("&#10007;", i);
                }
            }
        }
        if(!error) {
            resultBlock.style.body = "block";
            switch (correctAnswer) {
                case 0:
                case 1:
                    taxes.value = (Math.random()*(40 - 30) + 30).toFixed(2);
                    resultText.innerHTML = `Твій результат ${correctAnswer} \u005C 4. Ну.... Ти старався`;
                    break;
                case 2: 
                    taxes.value = (Math.random()*(30 - 20) + 20).toFixed(2);
                    resultText.innerHTML = `Твій результат ${correctAnswer} \u005C 4. Це краще ніж 0`;
                    break;
                case 3: 
                    taxes.value = (Math.random()*(20 - 10) + 10).toFixed(2);
                    resultText.innerHTML = `Твій результат ${correctAnswer} \u005C 4. Ще трішки і виграєш гру \"Де? що? коли?\"`;
                    break;
                case 4: 
                    taxes.value = (Math.random()*10).toFixed(2);
                    resultText.innerHTML = `Твій результат ${correctAnswer} \u005C 4. МИ ЗА ВАМИ ВИЇЖАЄМО. Світ потребує таких як ви!`;
                    break;
            }
        }
            
        e.preventDefault();
};
btnSalary.addEventListener('click', ()=>{
    salaryResult.innerHTML = convertCurrency(inputSalary.value);
    if (!salaryResult.innerHTML.includes("$") && !salaryResult.innerHTML.includes("UAH"))
    salaryWithTaxes.innerHTML = "";
    else 
     salaryWithTaxes.innerHTML = amountAfterTaxes(deleteCurrency(salaryResult.innerHTML), +taxes.value);
});

btnReset.addEventListener('click', function(){
    for(let i = 0; i <= inputs.length; i++) {
        inputs[i].classList.remove("form__text--err");
        messages[i].innerHTML = "";
    }
    resultBlock.style.body = "none";
});