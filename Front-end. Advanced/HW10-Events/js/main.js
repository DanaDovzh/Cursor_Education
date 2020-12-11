const KEY_CODE = "Key";
const TIME_LOADED = 2000;
const snowmans = document.querySelectorAll(".snowman");
const soundLetter = ["A", "D", "F", "J", "O", "R", "S", "T", "W", "C"];
const textNotLetter = document.querySelector(".board-text");
const bodyHTML = document.body;
let audio = new Audio();

bodyHTML.classList.add('loaded_hiding');
window.setTimeout(function () {
  bodyHTML.classList.add('loaded');
  bodyHTML.classList.remove('loaded_hiding');
}, TIME_LOADED);

const randomNumber = (min = 1, max = 11) => Math.floor(Math.random() * (max - min)) + min;
const playSound = (nameSound) => {
  audio.src = `sounds/${nameSound}.mp3`;
  textNotLetter.style.display = "none";
  audio.play();
  audio.volume = 0.6;
  document.querySelector(`#${nameSound}`).style.cssText = "box-shadow: 60px 20px 40px 20px #428305; background-color: #9c9b9b;";
}

document.addEventListener('keydown', (event) => {
  const keyName = event.code;
  const enterLetter = keyName[3];
  if (keyName.startsWith(KEY_CODE)) {
    if (soundLetter.includes(enterLetter))
      playSound(enterLetter)
    else {
      audio.pause();
      textNotLetter.style.display = "block";
    }
  }
}, false);

snowmans.forEach((snowman, index) => {
  snowmans[index].addEventListener('click', () => {
    (snowmans[index].closest(`.${soundLetter[index]}`)) ? playSound(soundLetter[index]) : textNotLetter.style.display = "block";
  })
})

snowmans.forEach((snowman, index) => {
  snowmans[index].addEventListener('mouseenter', () => {
    snowmans[index].querySelector(`#${soundLetter[index]}`).src = `img/change_${randomNumber()}.svg`;
  })

  snowmans[index].addEventListener('mouseleave', () => {
    snowmans[index].querySelector(`#${soundLetter[index]}`).src = `img/${index + 1}.svg`;
  })
})

