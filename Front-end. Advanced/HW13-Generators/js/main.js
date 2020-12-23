const main = document.querySelector(".wrapper");
const NUMBER_SWEETS = 10;
const numberSweets = document.querySelector("#numbers-sweets");
const screenWidth = window.innerWidth - 300;
const screenHeight = window.innerHeight - 200;
const blockTextSmile = document.querySelector(".text-for-smile");
const blockTextSmileRules = document.querySelector(".smile__rules");
const textForStart = document.querySelector("#text-start");
const styleText = window.getComputedStyle(blockTextSmileRules);
const fontSizeText = parseInt(styleText.fontSize);
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const sweetsPlace = document.querySelector(".sweets");
const resultText = document.querySelector(".result");

const btnUpFontSize = document.querySelector("#plus");
const btnDownFontSize = document.querySelector("#minus");

function* createIdGenerator(start) {
    let result = start;
    while (true) yield result++;
};

const starCount = createIdGenerator(1);
function* newFontGenerator(action) {
    let newSize = action;
    while (true) {
        const char = yield newSize;
        switch (char) {
            case "+":
                console.log("+");
                yield newSize = newSize + 2;
                break;
            case "-":
                console.log("-");
                yield newSize = newSize - 2;
                break;
            default:
                yield newSize;
        }
    }
};
const changeFontSize = newFontGenerator(fontSizeText);
for (let i = 0; i < NUMBER_SWEETS; i++) {
    const div = document.createElement("div");
    const imgSweets = document.createElement("img");
    div.style.position = "absolute";
    imgSweets.src = `img/sweets/${getRandomNumber(1, 11)}.svg`;
    imgSweets.classList.add("img-cookies");
    imgSweets.id = i;
    div.style.cssText = `left: ${Math.random() * screenWidth}px; top: ${Math.random() * screenHeight}px; position: absolute;`;
    sweetsPlace.append(div);
    div.append(imgSweets);
}

sweetsPlace.addEventListener("click", (event) => {
    const idElement = event.target.id;
    const imgClicked = document.getElementById(idElement);

    resultText.style.display = "block";
    numberSweets.innerHTML = starCount.next().value;
    imgClicked.style.display = "none"

    if (+numberSweets.innerHTML === NUMBER_SWEETS) {
        resultText.style.display = "none";
        textForStart.style.display = "none";
        blockTextSmile.style.display = "block";
    }
})

btnUpFontSize.addEventListener("click", () => {
    blockTextSmileRules.style.fontSize = `${changeFontSize.next("+").value}px`;
})

btnDownFontSize.addEventListener("click", () => {
    blockTextSmileRules.style.fontSize = `${changeFontSize.next("-").value}px`;
})