const checkOnString = (arrayForCheck) => {
    for (let i = 0; i < arrayForCheck.length; i++) {
        return (typeof(arrayForCheck[i]) === "string") ? i : -1;
    };
};

const makeArrayForFunctions = (arrayForTransform) =>  {
    const arrayInteger = arrayForTransform.split(" ").join("").split(",");
    const result = arrayInteger.filter(number => (Number.isInteger(+number) && number !== "")).map((num) => num).join(",");
    const arrayNumbers = result.split(",").map((element) => parseInt(element));
    return arrayNumbers;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArray = (length, min, max) => new Array(length).fill(1).map(number => getRandomNumber(min, max));

const getAverage = (numbers) => numbers.reduce((total, number) => total + number, 0)/numbers.length; 

const getMedian = (numbers) => {    
    const sortArray = numbers.sort((a, b) => a - b);
    const indexHalfArray = Math.floor(sortArray.length/2);
    return (sortArray.length % 2) ? sortArray[indexHalfArray] : 
                                    ((sortArray[indexHalfArray] + sortArray[indexHalfArray-1]) / 2);
};

const getModa = (numbers) => {
    let modaArray = [];
    let cntItems = 0, countModa = 0;
    let result = numbers.map((element) => {
            countModa = numbers.filter(item => item === element).length;
            if(cntItems < countModa) {
                cntItems = countModa;
                modaArray = [];
                if(!modaArray.includes(element))
                    modaArray.push(element);
                } else if
                    (cntItems === countModa) 
                    if (!modaArray.includes(element))
                        modaArray.push(element);
            return element;
    });
    return modaArray;
};

const generateCombinations = (word="man") => {
    const combinationsWord = [];
    let newInitialWord = "";
    const createAnagrams = (initialWord, newComb) => {
        if (!initialWord) {
            if (!combinationsWord.includes(newComb)) {
                combinationsWord.push(newComb);
            };
            return;
        } else {
                for (let i = 0; i < initialWord.length; i++) {
                    newComb += initialWord[i];
                    newInitialWord = initialWord.substring(0, i) + initialWord.substring(i + 1);
                    createAnagrams(newInitialWord, newComb);
                    newComb = newComb.slice(0, newComb.length - 1);
            };
        };
    };
    createAnagrams(word, "");
    return combinationsWord;
};
console.log(generateCombinations());

const filterEvenNumbers = (numbers) => numbers.filter(number => number&1);
const countPositiveNumbers = (numbers) => numbers.filter(number => number > 0).length;
const getDividedByFive = (numbers) => arrayDividedByFive = numbers.filter(number => number%5 === 0);

const replaceBadWords = (string = "Are you fucking kidding?") => {
    const badWords = ["shit", "fucking", "fuck"];
    const regexpForBW = new RegExp( `${badWords.join("|")}`, 'gi');
    const withoutBW = string.replace(regexpForBW, "***");
    return withoutBW;
};

const divideByThree = (word, n) =>word.match(new RegExp( '.{1,' + n + '}', 'g'));