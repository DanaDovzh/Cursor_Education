export const generateCombinations = (word="man") => {
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