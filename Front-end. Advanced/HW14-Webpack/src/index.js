import './css/style.css';
import "regenerator-runtime/runtime";
import {isPalyndrom, getRandomNumber} from './js/HWs/hw_3';
import {generateRandomColor} from './js/HWs/hw_9';
import {generateCombinations} from './js/HWs/hw_5';
import {makeCharacter, makeChineseWord} from './js/HWs/hw_11';
import {playSound} from './js/HWs/hw_10';
import O from './audio/O.mp3';
import S from './audio/S.mp3';
import B from './audio/B.mp3';
import N from './audio/N.mp3';
import H from './audio/H.mp3';
import other from './audio/other.mp3';
const formPalindrom = document.querySelector("#form-p");
const formCombinations = document.querySelector("#form-c");
const answerPalindrom = document.querySelector("#answer-palindrome");
const wordPalindrom = document.querySelector("#text-palindrome");
const btnChangeBg = document.querySelector("#change-bg");
const answerCombinations = document.querySelector("#answer-combinaions");
const wordCombinations = document.querySelector("#word-combinations");
const btnMakeChinese = document.querySelector("#chinese");
const answerChinese = document.querySelector("#answer-chinese");

const textForPalindron = () => isPalyndrom(wordPalindrom.value) ? "is" : "is't";
formPalindrom.addEventListener("submit", (event) => {
    answerPalindrom.innerHTML = `This word ${textForPalindron()} palindrom!`;
    event.preventDefault();
});

formCombinations.addEventListener("submit", (event) => {
    answerCombinations.innerHTML = generateCombinations(wordCombinations.value);
    event.preventDefault();
});

btnChangeBg.addEventListener("click", (e) => {
    const mainBlock = e.target.closest('.carousel-item');
    mainBlock.style.backgroundImage = `radial-gradient( circle farthest-corner at 10% 20%,  ${generateRandomColor()} 1.1%, ${generateRandomColor()} 43.7%, ${generateRandomColor()} 89.7% )`;
});

btnMakeChinese.addEventListener("click", async ()=> {
    answerChinese.innerHTML = await makeCharacter(getRandomNumber(1, 10));
});
const audio = new Audio();
document.addEventListener('keydown', (event) => {
    const keyName = event.code;
    const enterLetter = keyName[3];
    if (keyName.startsWith("Key")) {
    switch (enterLetter) {
        case "O":
            audio.pause();
            playSound(audio, O);
            break;
        case "S":
            audio.pause();
            playSound(audio, S);
            break;
        case "B":
            audio.pause();
            playSound(audio, B);
            break;
        case "N":
            playSound(audio, N);
            break;
        case "H":
            playSound(audio, H);
            break;
        default:
            playSound(audio, other);
        
    };
};
  }, false);





