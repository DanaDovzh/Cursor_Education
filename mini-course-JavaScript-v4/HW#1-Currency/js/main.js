window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1500);
    let currencyUsd = 28.38;
    let currencyEur = 33.45;
    let currencyPln = 7.26;
    let currencyRub = 0.36;
    let newCurrencyUsd, newCurrency, currentCurrency, coefForCurrency, 
    newCurrencySell, currentCurrencySell, currentCurrencyBuy, spanBuy, spanSell;

    const usdBuy = document.querySelector("#usdBuy");
    const eurBuy = document.querySelector("#eurBuy");
    const plnBuy = document.querySelector("#plnBuy");
    const rubBuy = document.querySelector("#rubBuy");

    const usdSell = document.querySelector("#usdSell");
    const eurSell = document.querySelector("#eurSell");
    const plnSell = document.querySelector("#plnSell");
    const rubSell = document.querySelector("#rubSell");

    setInterval(calcCurrency, 3000, currencyUsd, currencyUsd * 1.007, usdBuy, usdSell); 
    setInterval(calcCurrency, 3500, currencyEur, currencyEur * 1.012, eurBuy, eurSell);
    setInterval(calcCurrency, 4000, currencyPln, currencyPln * 1.011, plnBuy, plnSell);
    setInterval(calcCurrency, 4500, currencyRub, currencyRub * 1.006, rubBuy, rubSell);

    function calcCurrency (currentCurrencyBuy, currentCurrencySell, spanBuy, spanSell) {
        newCurrency = Math.abs(currentCurrencyBuy + (Math.random()*2)-1);
        if (currentCurrencyBuy < newCurrency) {
            spanBuy.innerHTML = (newCurrency).toFixed(2) + "&#8679;";
        } else if (currentCurrencyBuy > newCurrency) {
            spanBuy.innerHTML = (newCurrency).toFixed(2) + "&#8681;";
        }

        if (newCurrency > 33) {
            currentCurrencyBuy = 28;
        }  else {
            currentCurrencyBuy = newCurrency;
        }

        coefForCurrency = Math.random()*(1.2-1) + 1;
        newCurrencySell = newCurrency * coefForCurrency;
        if (newCurrencySell > currentCurrencySell) {
            spanSell.innerHTML = newCurrencySell.toFixed(2)+ "&#8679;"; 
        } else if (newCurrencySell < currentCurrencySell){
            spanSell.innerHTML = newCurrencySell.toFixed(2)+ "&#8681;"; 
        }
    };

}