const checkOnString = (arrayForCheck) => {
    for (let i = 0; i < arrayForCheck.length; i++) {
        return (typeof(arrayForCheck[i]) === "string") ? i : -1;
    };
};
const makeArrayForFunctions = (arrayForTransform) =>  {
        let arrayInteger = [];
        arrayInteger = arrayForTransform.split(" ").join("").split(",");
        const result = arrayInteger.filter(number => (Number.isInteger(+number) && number !== "")).map((num) => num).join(",");
        const arrayNumbers = result.split(",").map((element) => parseInt(element));
        return arrayNumbers;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArray = (length, min, max) => {
    const arrayRandomNumber = [];
    for(let i = 0; i < length; i++) {
        arrayRandomNumber.push(getRandomNumber(min, max));
    }
    return arrayRandomNumber;
};

const getAverage = (numbers) => {
    // const arrayNumbers = numbers.split(",").map((element) => parseInt(element));
    console.log(numbers);
    const sumNumberOfArray = numbers.reduce((total, number) => 
                        total + number, 0)/numbers.length; 
    return sumNumberOfArray;
};

const getMedian = (numbers) => {    
    // const arrayNumbers = numbers.split(",").map((element) => parseInt(element));
    const sortArray = numbers.sort((start, next) => start - next);
    const indexHalfArray = Math.floor(sortArray.length/2);
    return (sortArray.length % 2) ? sortArray[indexHalfArray] : 
                                    ((sortArray[indexHalfArray] + sortArray[indexHalfArray-1]) / 2.0);
};

const getModa = (numbers) => {
    // const arrayNumbers = numbers.split(",").map((element) => parseInt(element));
    let modaArray = 0;
    let cntItems = 0;
    let result = numbers.map((element) => {
            if(cntItems < numbers.filter(item => item === element).length) {
                cntItems = numbers.filter(item => item === element).length;
                modaArray = element;
            };
            return element;
    });
    return modaArray;
};

// const generateCombinations = (word = "man") => {
   
// };
// generateCombinations();
// console.log(getModa(6, 2, 55,55, 555, 555, 555, 555,555, 555, 555, 555, 23, 11, 78, 2, 55, 77, 57, 87, 23,23, 2,23, 56,23, 3, 2, 2, 23));
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
                    // console.log(i, newInitialWord, newComb);
                    createAnagrams(newInitialWord, newComb);
                    newComb = newComb.slice(0, newComb.length - 1);
                    // console.log("2 ", newComb, i);
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

const placeForAnswers = document.querySelectorAll(".slider__answer");
const formsFunctions =  document.querySelectorAll(".form");
const btnGetAnswers = document.querySelectorAll(".btns-get-answers");
const inputLengthArray = document.querySelector(".length-field");
const minMaxForRandArray = document.querySelectorAll("input[name='min-max']");
const arrayForAverage = document.querySelector("#average");
const arrayForMediana = document.querySelector("#mediana");
const arrayForModa = document.querySelector("#moda");
const arrayOnlyOdd = document.querySelector("#odd-array");
const arraForFilterPositive = document.querySelector("#positive-number");
const arrayForDividedFife = document.querySelector("#divided-5");
const numbersLettersInparts = document.querySelector("#number-letters");
const wordForDivided = document.querySelector("#word-for-divided");
const sentenceBadWords = document.querySelector("#hide-BW");
const wordForAnagrams = document.querySelector("#anagrams");

minMaxForRandArray[0].addEventListener('input', (event) => {
    minMaxForRandArray[1].min = +minMaxForRandArray[0].value + 1;
});

numbersLettersInparts.addEventListener('input', (event) => {
    numbersLettersInparts.max = (wordForDivided.value).length;
});
formsFunctions[8].addEventListener('submit', (e) => {
    const newString = sentenceBadWords.value.trim();
    console.log(typeof(newString));
    placeForAnswers[8].innerHTML = `Your sentence without bad words: <br/>
    ${replaceBadWords(newString)}`;
    placeForAnswers[8].classList.add("answer-ready");
    e.preventDefault();
});
formsFunctions[9].addEventListener('submit', (e) => {
    const newString = wordForAnagrams.value.trim();
    placeForAnswers[9].innerHTML = `Combinations of the word "${newString}": <br/>
    [${generateCombinations(newString)}]`;
    placeForAnswers[9].classList.add("answer-ready");
    e.preventDefault();
});



console.log(formsFunctions);
formsFunctions[0].addEventListener('submit', (event) => {
    placeForAnswers[0].innerHTML = `Array of random values: <br/>
    [${getRandomArray(+inputLengthArray.value, +minMaxForRandArray[0].value, 
        +minMaxForRandArray[1].value)}]`;
    placeForAnswers[0].classList.add("answer-ready");
    event.preventDefault();
});

formsFunctions[1].addEventListener('submit', (e) => {
    const newArray = makeArrayForFunctions(arrayForAverage.value);
    placeForAnswers[1].innerHTML = `Averege of array [${newArray}] is ${getAverage(newArray)}`;
    placeForAnswers[1].classList.add("answer-ready");
    e.preventDefault();
});

formsFunctions[2].addEventListener('submit', (e) => {
    const newArray = makeArrayForFunctions(arrayForMediana.value);
    placeForAnswers[2].innerHTML = `Median of array [${newArray}] is ${getMedian(newArray)}`;
    placeForAnswers[2].classList.add("answer-ready");
    e.preventDefault();
});

formsFunctions[3].addEventListener('submit', (e) => {
    const newArray = makeArrayForFunctions(arrayForModa.value);
    placeForAnswers[3].innerHTML = `Moda of array [${(newArray)}] is ${getModa(newArray)}`;
    placeForAnswers[3].classList.add("answer-ready");
    e.preventDefault();
});

formsFunctions[4].addEventListener('submit', (e) => {
    const newArray = makeArrayForFunctions(arrayOnlyOdd.value);
    placeForAnswers[4].innerHTML = `Initial array: [${(newArray)}]. <br/> Array only with odd numbers: ${filterEvenNumbers(newArray)}`;
    placeForAnswers[4].classList.add("answer-ready");
    e.preventDefault();
});

formsFunctions[5].addEventListener('submit', (e) => {
    const newArray = makeArrayForFunctions(arraForFilterPositive.value);
    placeForAnswers[5].innerHTML = `The number of positive numbers in the array <br/> 
                [${(newArray)}] is ${countPositiveNumbers(newArray)}`;
    placeForAnswers[5].classList.add("answer-ready");
    e.preventDefault();
});

formsFunctions[6].addEventListener('submit', (e) => {
    const newArray = makeArrayForFunctions(arrayForDividedFife.value);
    placeForAnswers[6].innerHTML = `Initial array: [${(newArray)}]. <br/>
    Array of numbers divided by 5 ${getDividedByFive(newArray)}`;
    placeForAnswers[6].classList.add("answer-ready");
    e.preventDefault();
});

formsFunctions[7].addEventListener('submit', (e) => {
    const newString = wordForDivided.value.trim();
    placeForAnswers[7].innerHTML = `The word "${(newString)}" will be divided into parts of 
    ${numbersLettersInparts.value} letters. <br/>
    Array of divided word [${divideByThree(newString, +numbersLettersInparts.value)}]`;
    placeForAnswers[7].classList.add("answer-ready");
    e.preventDefault();
});


