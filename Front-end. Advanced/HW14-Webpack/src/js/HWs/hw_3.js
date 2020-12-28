const isPalyndrom = function (wordPal = "Я несу гусеня") {
    const wordWithoutSpace = wordPal.split(' ').join('').toLowerCase();
    const newString =  wordWithoutSpace.split('').reverse().join('');
    return wordWithoutSpace === newString; 
};

const getRandomNumber = (min = 1, max = 100) =>  Math.floor(Math.random()* (max - min) + min);

export {isPalyndrom, getRandomNumber}