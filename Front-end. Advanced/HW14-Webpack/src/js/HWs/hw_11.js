import {getRandomNumber} from './hw_3';
export const makeChineseWord = () => {
    const newDate = Date.now();
    const sign = String.fromCharCode(newDate.toString().slice(-5));
    return sign;
}

const PICTURES = ['&#127801;', '&#127800;', '&#128144;', '&#127797;', '&#128062;',
'&#128034;', '&#128293;', '&#9829;']
export async function makeCharacter(lengthWord) {
 const getRandomChinese = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(makeChineseWord());
      },
      200);
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
      result = PICTURES[getRandomNumber(0, PICTURES.length-1)];
      console.log(result);
    }
}
  return result;
}