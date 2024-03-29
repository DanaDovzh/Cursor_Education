const BOX_NUMBERS = 25;
const TIME_TASK = 1000;
const TIME_GAME = 1000;
const TIME_LOADED = 2000;
const maxNumberArray = 7,
      minNumberArray = 1;
const BLACK_COLOR = '#111111';

const wrapper = document.querySelector("main");
const mainBlock = document.createElement("div");
const btns = document.querySelector(".btns");
const btnTask = document.querySelector("#btn-task");
const btnPlay = document.querySelector("#btn-play");
const bodyHTML = document.body;

let blocksCreated = [];
let createTime;
let audio = new Audio();

const generateColor = () => {
  let newColor = '#' + Math.random().toString(16).substr(2,6);
  if (newColor !== BLACK_COLOR)
    return newColor;
  else generateColor();
}

bodyHTML.classList.add('loaded_hiding');
window.setTimeout(function () {
    bodyHTML.classList.add('loaded');
    bodyHTML.classList.remove('loaded_hiding');
}, TIME_LOADED);

const resetForNewMenu = () => {
  mainBlock.innerHTML = '';
  document.body.style.background = "";
}

const createBlocks = () => {
  mainBlock.innerHTML = '';
  for (let i = 0; i < BOX_NUMBERS; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.background = generateColor();
    mainBlock.append(block);
  }
}
btns.before(mainBlock);

// ---------------------------Main task--------------------------- //

btnTask.addEventListener('click', () => {
  resetForNewMenu();
  btnPlay.disabled = false;
  createTime = setInterval(createBlocks, TIME_TASK)
  mainBlock.classList.add("blocks");
})
// --------------------------------------------------------------- //
const gamesResult = (numberSquare) => {
  let ruleAsk = document.createElement("div");
  const blockAnswer = document.createElement("div");
  const inputAnswer = document.createElement("input");
  const btnAnswer = document.createElement("button");

  resetForNewMenu();  
  mainBlock.classList.remove("blocks");
  mainBlock.classList.add("wrapper");

  ruleAsk.innerHTML = "How many black squares have you seen?";
  ruleAsk.classList.add('question');
  ruleAsk.style.margin = "10px";

  mainBlock.append(ruleAsk);
  
  blockAnswer.style.display = "flex";
  blockAnswer.style.alignItems = "baseline";
  mainBlock.append(blockAnswer);
  
  inputAnswer.type = "number";
  inputAnswer.value = "0";
  blockAnswer.append(inputAnswer);
  
  btnAnswer.innerHTML = "OK";
  btnAnswer.style.fontSize = "16px"
  blockAnswer.append(btnAnswer);

  btnAnswer.addEventListener('click', () => {
    if (+inputAnswer.value === numberSquare) {
      ruleAsk.innerHTML = "WIN";
      ruleAsk.classList.add("win");
      audio.src = 'audio/win.mp3'; 
    } else {
      ruleAsk.classList.add("loss");
      ruleAsk.innerHTML = "Game Over";
      audio.src = 'audio/loss.mp3'; 
    }
    bodyHTML.style.background = BLACK_COLOR;
    audio.play();
    audio.volume = 0.4;
    btnPlay.disabled = false;
    btnTask.disabled = false;
    blockAnswer.style.display = "none";
  })
}

btnPlay.addEventListener('click', () => {
  let lengthArray = Math.floor(Math.random() * (maxNumberArray - minNumberArray)) + minNumberArray;
  let arrayPlay = [];

  resetForNewMenu();
  createBlocks();
  blocksCreated = document.querySelectorAll('.block');
 
  btnPlay.disabled = true;
  btnTask.disabled = true;
  clearInterval(createTime);
  mainBlock.classList.add("blocks");
  
  for (let i = 0; i < lengthArray; i++) {
    let valueArray = (Math.floor(Math.random() * BOX_NUMBERS + 1));
    if (!arrayPlay.includes(valueArray)) 
      arrayPlay.push(+valueArray);
  }

  arrayPlay.forEach(index => {
    blocksCreated[index].style.backgroundColor = BLACK_COLOR;
  });

  setTimeout(gamesResult, TIME_GAME, lengthArray);
})
