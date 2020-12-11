const KEY_CODE = "Key";
const snowmans = document.querySelectorAll(".snowman");
const soundLetter = ["A", "D", "F", "J", "O", "R", "S", "T", "W", "C"];
const textNotLetter = document.querySelector(".board-text");

let audio = new Audio();

const randomNumber = (min = 1, max = 11) => Math.floor(Math.random() * (max - min)) + min;
const playSound = (nameSound) => {
  audio.src = `sounds/${nameSound}.mp3`;
  textNotLetter.style.display = "none";
  audio.play();
  audio.volume = 0.6;
  document.querySelector(`#${nameSound}`).style.boxShadow = "60px 20px 40px 20px #428305";
  document.querySelector(`#${nameSound}`).style.backgroundColor = "#9c9b9b";
}

document.addEventListener('keydown', (event) => {
  const keyName = event.code;
  const enterLetter = keyName[3];
  if (keyName.startsWith(KEY_CODE)) {
    (soundLetter.includes(enterLetter)) ? playSound(enterLetter) : textNotLetter.style.display = "block";
  }
}, false);

snowmans.forEach((snowman, index) => {
  snowmans[index].addEventListener('click', () => {
    if (snowmans[index].closest(`.${soundLetter[index]}`)) {
      playSound(soundLetter[index])
    } else {
      textNotLetter.style.display = "block";
    }
  })
})


snowmans.forEach((snowman, index) => {
  snowmans[index].addEventListener('mouseenter', () => {
    if (snowmans[index].closest(`.${soundLetter[index]}`)) {
      snowmans[index].querySelector(`#${soundLetter[index]}`).src = `img/change_${randomNumber()}.svg`;
    } 
  })

  snowmans[index].addEventListener('mouseleave', () => {
    if (snowmans[index].closest(`.${soundLetter[index]}`)) {
      snowmans[index].querySelector(`#${soundLetter[index]}`).src = `img/${index+1}.svg`;
    } 
  })
})

