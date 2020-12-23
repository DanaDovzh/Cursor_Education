const DELAY_LOADED = 2500;
const bodyHTML = document.body;

bodyHTML.classList.add('loaded_hiding');
window.setTimeout(function () {
  bodyHTML.classList.add('loaded');
  bodyHTML.classList.remove('loaded_hiding');
}, DELAY_LOADED);

const thoughtHeros = document.querySelectorAll(".thought");
const TIME_FOR_PROMISE = 200;
const SMILE = ['^_^', '(╯°□°）╯', 'ヾ(´〇`)ﾉ♪♪♪' , '＼( °□° )／', 'ಠ_ಠ', '(｡◕‿◕｡)', '(づ｡◕‿‿◕｡)づ', '(. ❛ ᴗ ❛.)', 'ʕ •ᴥ•ʔ', '=＾● ⋏ ●＾=', '╮ (. ❛ ᴗ ❛.) ╭'];
const getRandomNumber = (min = 1, max = 10) => Math.floor(Math.random() * (max - min)) + min;

const makeChineseWord = () => {
    const newDate = Date.now();
    const sign = String.fromCharCode(newDate.toString().slice(-5));
    return sign;
}

async function makeCharacter(lengthWord) {
 const getRandomChinese = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(makeChineseWord());
      },
      TIME_FOR_PROMISE);
  }) 
  let i = 0;
  let result = "";
  let character = "";
  while (i !== lengthWord) {
    character = await getRandomChinese(); 
    if ((character >= String.fromCharCode(13312)) && (character <= String.fromCharCode(40891))
    || ((character >= String.fromCharCode(44032)) && (character <= String.fromCharCode(55203))) 
    || ((character >= String.fromCharCode(63744)) && (character <= String.fromCharCode(64106)))) {
      result += character;
      i ++;
    } else {
      i = lengthWord;
      result = SMILE[getRandomNumber(0, SMILE.length)];
    }
}
  return result;
}

async function fillThoughts () {
try {
    thoughtHeros.forEach(async (e, i) => {
      thoughtHeros[i].innerHTML = await makeCharacter(getRandomNumber());
    })
  }
  catch {
    console.log("Error");
  }
}
fillThoughts();
setInterval(fillThoughts, TIME_FOR_PROMISE * thoughtHeros.length**2);
