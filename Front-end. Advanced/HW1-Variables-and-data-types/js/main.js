let priceOfWand = 15.678;
let priceOfStone = 123.965;
let priceOfCloak = 90.2345;
let finalAmount = priceOfWand + priceOfStone + priceOfCloak;
let finalAmountWithoutCoins, discount, finalAmountWithDiscount;
let placeFinalAmount = document.querySelector("#final-amount");
let placeFinalAmountWithoutCoins = document.querySelector("#final-amount-withoutCoins");

let maxPrice = Math.max(priceOfCloak, priceOfStone, priceOfWand);
let minPrice = Math.min(priceOfCloak, priceOfStone, priceOfWand);

finalAmountWithoutCoins = Math.trunc(priceOfWand) +  Math.trunc(priceOfStone) + Math.trunc(priceOfCloak);
let roundedFinalAmount = Math.floor(finalAmountWithoutCoins/100)*100;

discount = Math.trunc(Math.random()*25);
finalAmountWithDiscount = (finalAmount - (discount*finalAmount)/100).toFixed(2);

document.querySelector("#wand-price").innerHTML = priceOfWand;
document.querySelector("#stone-price").innerHTML = priceOfStone;
document.querySelector("#cloak-price").innerHTML = priceOfCloak;

document.querySelector("#btn-buyHallows").addEventListener('click', function(){
    placeFinalAmount.innerHTML = finalAmount;
});

document.querySelector("#btn-buyHallows-withoutCoins").addEventListener('click', function(){
    placeFinalAmountWithoutCoins.innerHTML = finalAmountWithoutCoins;
});

document.querySelector("#btn-discount").addEventListener('click', function(){
    document.querySelector("#discount").innerHTML = `Your discount is ${discount}%.`;
    document.querySelector("#final-amount-with-discount").innerHTML = `Amount with discount is  ${finalAmountWithDiscount}!`;
});


document.querySelector("#btn-show-calcilations").addEventListener('click', function(){
    document.querySelector("#calcilations").classList.add("other-calcilations__text");
    document.querySelector("#calcilations").innerHTML = `
    Maximum price: ${maxPrice};
    Minimum price: ${minPrice};
    Total cost: ${finalAmount};
    Total cost without coins: ${finalAmountWithoutCoins};
    Total cost without coins and rounded: ${roundedFinalAmount};
    
    Is the sum of all goods an even number? - ${(roundedFinalAmount & 1 ? false : true)};
    If the customer pays 500, the rest will be ${500 - finalAmount};
    Mean value of price, rounded to another sign: ${(finalAmount/[priceOfWand, priceOfStone, priceOfCloak].length).toFixed(2)};
    
    Discount: ${discount}%;
    Amount with discount: ${finalAmountWithDiscount};
    The price is less on ${(finalAmount - finalAmountWithDiscount).toFixed(2)};
    Cost of goods(собівартість): ${(Math.trunc(finalAmountWithDiscount/2))};
    Net profit: ${Math.trunc(finalAmountWithDiscount/2 - (finalAmount - finalAmountWithDiscount))};
    `;
});

console.log(`
Maximum price: ${maxPrice};
Minimum price: ${minPrice};
Total cost: ${finalAmount};
Total cost without coins: ${finalAmountWithoutCoins};
Total cost without coins and rounded: ${roundedFinalAmount};

Is the sum of all goods an even number? - ${(roundedFinalAmount & 1 ? false : true)};
If the customer pays 500, the rest will be ${500 - finalAmount};
Mean value of price, rounded to another sign: ${(finalAmount/[priceOfWand, priceOfStone, priceOfCloak].length).toFixed(2)};

Discount: ${discount}%;
Amount with discount: ${finalAmountWithDiscount};
The price is less on ${(finalAmount - finalAmountWithDiscount).toFixed(2)};
Cost of goods(собівартість): ${(Math.trunc(finalAmountWithDiscount/2))};
Net profit: ${Math.trunc(finalAmountWithDiscount/2 - (finalAmount - finalAmountWithDiscount))};
`)

