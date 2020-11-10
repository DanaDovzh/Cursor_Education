const placeFinalAmount = document.querySelector("#final-amount");
const placeFinalAmountWithoutCoins = document.querySelector("#final-amount-withoutCoins");
const wandPriceSelector = document.querySelector("#wand-price");
const stonePriceSelector = document.querySelector("#stone-price");
const cloakPriceSelector = document.querySelector("#cloak-price");
const btnBuyHallows = document.querySelector("#btn-buyHallows");
const btnBuyWithoutCoins = document.querySelector("#btn-buyHallows-withoutCoins");
const btnDiscount = document.querySelector("#btn-discount");
const spaceForDiscount = document.querySelector("#discount");
const spaceForPriceDiscount = document.querySelector("#final-amount-with-discount");
const calcilationsSelector = document.querySelector("#calcilations");

const PRICE_OF_WAND = 15.678;
const PRICE_OF_STONE = 123.965;
const PRICE_OF_CLOAK = 90.2345;
const finalAmount = PRICE_OF_WAND + PRICE_OF_STONE + PRICE_OF_CLOAK;
const finalAmountWithoutCoins = Math.trunc(PRICE_OF_WAND) +  Math.trunc(PRICE_OF_STONE) + Math.trunc(PRICE_OF_CLOAK);
const discount = Math.trunc(Math.random()*25);
const finalAmountWithDiscount = (finalAmount - (discount*finalAmount)/100).toFixed(2);
const maxPrice = Math.max(PRICE_OF_CLOAK, PRICE_OF_STONE, PRICE_OF_WAND);
const minPrice = Math.min(PRICE_OF_CLOAK, PRICE_OF_STONE, PRICE_OF_WAND);
const roundedFinalAmount = Math.floor(finalAmountWithoutCoins/100)*100;
const textResult = `
Maximum price: ${maxPrice};
Minimum price: ${minPrice};
Total cost: ${finalAmount};
Total cost without coins: ${finalAmountWithoutCoins};
Total cost without coins and rounded: ${roundedFinalAmount};

Is the sum of all goods an even number? - ${(roundedFinalAmount & 1 ? false : true)};
If the customer pays 500, the rest will be ${500 - finalAmount};
Mean value of price, rounded to another sign: ${(finalAmount/[PRICE_OF_WAND, PRICE_OF_STONE, PRICE_OF_CLOAK].length).toFixed(2)};

Discount: ${discount}%;
Amount with discount: ${finalAmountWithDiscount};
The price is less on ${(finalAmount - finalAmountWithDiscount).toFixed(2)};
Cost of goods(собівартість): ${(Math.trunc(finalAmountWithDiscount/2))};
Net profit: ${Math.trunc(finalAmountWithDiscount/2 - (finalAmount - finalAmountWithDiscount))};
`;

wandPriceSelector.innerHTML = PRICE_OF_WAND;
stonePriceSelector.innerHTML = PRICE_OF_STONE;
cloakPriceSelector.innerHTML = PRICE_OF_CLOAK;

btnBuyHallows.addEventListener('click', function(){
    placeFinalAmount.innerHTML = finalAmount;
});

btnBuyWithoutCoins.addEventListener('click', function(){
    placeFinalAmountWithoutCoins.innerHTML = finalAmountWithoutCoins;
});

btnDiscount.addEventListener('click', function(){
    spaceForDiscount.innerHTML = `Your discount is ${discount}%.`;
    spaceForPriceDiscount.innerHTML = `Amount with discount is  ${finalAmountWithDiscount}!`;
});

document.querySelector("#btn-show-calcilations").addEventListener('click', function(){
    calcilationsSelector.classList.add("other-calcilations__text");
    calcilationsSelector.innerHTML = textResult;
});

console.log(textResult);

