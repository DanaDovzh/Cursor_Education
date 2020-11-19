const getMaxDigit = function (numberGive) {
    const array = String(numberGive).split('');
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        (max < array[i]) ?  max = array[i] : max;
    }
    return max;
} 

const powNumber = function (number, degree) {
    let powNum = 1;
    if (degree === 0)
        return powNum;
    else if (degree > 0) {
        for (let i = 1; i <= degree; i++) powNum *= number;
        return powNum;
    }
    else if (degree < 0) {
        for(let i=0; i < Math.abs(degree);i++) powNum/=number;
        return powNum;
    }
    
}

const upperFisrtLetter = function (name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

const amountAfterTaxes = function (salary = 1000, taxes = 19.5) {
    return (salary - (salary*taxes)/100);
}


const getRandomNumber = function (min = 1, max = 10) {
    return Math.floor(Math.random()* (max - min) + min);
}


const countLetter = function (findLetter = "А", world = "Асталавіста") {
    const array = world.toLowerCase().split('');
    let cnt = 0;

    findLetter = findLetter.toLowerCase();
    for (let i = 0; i < array.length; i++) {
        findLetter === array[i] ? cnt++ : cnt;
    }
    return cnt;
}

const getRandomPassword = function (passwordLength = 8) {
    let newPassword = [];
    const maxDigitPass = 10;
    for (let i = 0; i < passwordLength; i++) {
        newPassword.push(Math.floor(Math.random()*maxDigitPass));
    }
    return newPassword.join('');
}

const deleteLetters = function (letterDel = "a", wordForDel = "blablabla") {
    let array = wordForDel.toLowerCase().split('');
    let indLetterDel;
    while (array.indexOf(letterDel) !== -1) {
        indLetterDel = array.indexOf(letterDel);
        array.splice(indLetterDel, 1);
    }
    return array.join('');
}

const isPalyndrom = function (wordPal = "Я несу гусеня") {
    const wordWithoutSpace = wordPal.split(' ').join('').toLowerCase();
    const newString =  wordWithoutSpace.split('').reverse().join('');
    return wordWithoutSpace === newString; 
}

const deleteDuplicateLetter = function (sentence = "Бісквіт був дуже ніжним") {
    const sentenceWithoutSpace = sentence.split(' ').join('').toLowerCase();
    const array = sentenceWithoutSpace.split('');
    let newArray = [];
    let currentIndex, nextIndex;
    for (let i = 0; i < array.length; i++) {
        currentIndex = array.indexOf(array[i]);
        if (currentIndex != -1) {
            nextIndex = array.indexOf(array[i], currentIndex+1);
            if(nextIndex == -1)
                newArray.push(array[i]);
        }
    }
    return newArray.join('');
}

const convertCurrency = function (currency = "100 UAH") {
    const DOLLAR_COEF = 28;
    const UAH_COEF = 30;
    if (!currency.includes("$") && (!currency.includes("UAH")) && (!currency.includes("uah")))
        return "Введіть коректно валюту. Вкінці суми має бути $/UAH"
    else {
        if (currency.includes("UAH")) {
            indexTypeCurrency = currency.indexOf("UAH");
            return +currency.slice(0, indexTypeCurrency)/UAH_COEF + " $"
        } else {
            indexTypeCurrency = currency.indexOf("$");
            return +currency.slice(0, indexTypeCurrency)*DOLLAR_COEF + " UAH"
        }
    }
}

const deleteCurrency = function (currency = "100 UAH") {
        if (currency.includes("UAH")) {
            indexTypeCurrency = currency.indexOf("UAH");
            return +currency.slice(0, indexTypeCurrency)
        } else {
            indexTypeCurrency = currency.indexOf("$");
            return +currency.slice(0, indexTypeCurrency)
        }
}