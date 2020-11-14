let nameUser = prompt("Привіт, друже. Як тебе звати?");

const btnCalculate = document.querySelector("#btn-calculate");
const changeNumber = document.querySelector("#change-numbers");
const arrayGamesBtn = document.querySelectorAll(".game__random-btn");
const GameBtns =  document.querySelector("#extra");
const textLoss = document.querySelector("#game-lost");
const btnReset = document.querySelector("input[type='reset']");
let firstNumber = +document.querySelector('[name="first-number"]').value;
let secondNumber = +document.querySelector('[name="second-number"]').value;
let isEven = document.querySelector('#choose-even');
let countEven = +isEven.querySelector("input:checked").value;
let constrolSum = 0;
let saveSum;
let firstDeviationBtn, secondDeviationBtn, thirdDeviationBtn;
let randNumBtnFirst, randNumBtnSecond, randNumBtnThird; 
let numberRightBtn;
if (nameUser) document.querySelector("#greating-name").innerHTML = nameUser

btnCalculate.addEventListener('click', function(e) {
    firstNumber = +document.querySelector('[name="first-number"]').value;
    secondNumber = +document.querySelector('[name="second-number"]').value;
    countEven = +isEven.querySelector("input:checked").value;
    textLoss.style.display = "none";
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        changeNumber.innerHTML = "Потрібно ввести ціле число";
        changeNumber.classList.add("form__error");
    }
        
    if (firstNumber >= secondNumber) {
        changeNumber.classList.add("form__error");
        changeNumber.innerHTML = ("Здається ти зробив помилку! Перше число має бути менше за друге! А ну давай, введи без помилок!");
    } else {
        changeNumber.classList.remove("form__error");
        changeNumber.innerHTML = "";
        for (let i = firstNumber; i <= secondNumber; i++) {
            if ((!countEven) && i&1) {
                constrolSum += i; 
            }
            else if(countEven) {
                constrolSum += i;
            }
        }
        firstDeviationBtn = Math.trunc(Math.random(2)*25);
        secondDeviationBtn = Math.trunc(Math.random(2)*35);
        thirdDeviationBtn = Math.trunc(Math.random(5)*45);
        randNumBtnFirst = Math.trunc((constrolSum - (firstDeviationBtn*constrolSum)/100).toFixed(2));
        randNumBtnSecond = Math.trunc((constrolSum + (secondDeviationBtn*constrolSum)/100).toFixed(2));
        randNumBtnThird = Math.trunc((constrolSum + (thirdDeviationBtn*constrolSum)/100).toFixed(2));
        arrayGamesBtn[0].value = randNumBtnFirst;
        arrayGamesBtn[1].value = randNumBtnSecond;
        arrayGamesBtn[2].value = randNumBtnThird;

        numberRightBtn = Math.floor(Math.random() * (2));
        arrayGamesBtn[numberRightBtn].value = constrolSum;
        GameBtns.style.display = "block";
        saveSum = constrolSum;
        constrolSum = 0; 
    }
    e.preventDefault();
 });

 btnReset.addEventListener('click', function(){
    changeNumber.innerHTML = "";
    GameBtns.style.display = "none";
    textLoss.style.display = "none";
});

function checlBtn(idBtn) {
   if (document.getElementById(idBtn).value == saveSum) {
    window.open('https://www.stb.ua/bitva/ua/anketa-uchastnika-bitva-e-kstrasensov-18/', '_blank');
   }
   else {
    GameBtns.style.display = "none";
    textLoss.style.display = "block";
   }
}