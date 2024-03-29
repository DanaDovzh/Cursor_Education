const INTERVAL_DELAY_LOAD = 2000;
const INTERVAL_DELAY_LATVIA_SALARY = 2000;
const INTERVAL_DELAY_LITHUANIA_SALARY = 2500;
const INTERVAL_DELAY_UKRAINE_SALARY = 1500;

const salaryForProgrammer = document.querySelectorAll(".salary");
const taxesForProgrammer = document.querySelectorAll(".taxes");
const profitForProgrammer = document.querySelectorAll(".profit");
const showArrow = document.querySelectorAll(".arrow");
const numbersSpecialist = document.querySelectorAll(".number-specialist");
const placeForTaxesFromSalary = document.querySelectorAll(".taxes-salary");
const placeForTotalTaxes = document.querySelectorAll(".total-taxes");
const placeForCurrentSalary = document.querySelectorAll(".current-salary");
const bodyHTML = document.body;


bodyHTML.classList.add('loaded_hiding');
window.setTimeout(function () {
    bodyHTML.classList.add('loaded');
    bodyHTML.classList.remove('loaded_hiding');
}, INTERVAL_DELAY_LOAD);

function printNumberSpecialist(index) {
    numbersSpecialist[index].innerHTML = this.vacancies;
};
printNumberSpecialist.call(latvia, 0);
printNumberSpecialist.call(litva, 1);
printNumberSpecialist.call(ukraine, 2);

function printCard(countryForSalary, indexForCountry, addForIndex) {
    let currentSalary = 0;
    let currentTaxes = 0;
    let currentProfit = 0;
    let infoCard;
    let country = countryForSalary;
    function fillHTML() {
        const salaryBigger = (index, indexAdd) => {
            showArrow[index + indexAdd + 0].innerHTML = "&#8679;";
            showArrow[index + indexAdd + 0].classList.remove("arrow-bad");
            showArrow[index + indexAdd + 0].classList.add("arrow-good");
        };
        const salarySmaller = (index, indexAdd) => {
            showArrow[index + indexAdd + 0].innerHTML = "&#8681;";
            showArrow[index + indexAdd + 0].classList.add("arrow-bad");
            showArrow[index + indexAdd + 0].classList.remove("arrow-good");
        }
        infoCard = getMySalary.bind(country)();

        if (infoCard.salary >= currentSalary) {
            salaryForProgrammer[indexForCountry].innerHTML = infoCard.salary;
            salaryBigger(indexForCountry, addForIndex);
        } else {
            salaryForProgrammer[indexForCountry].innerHTML = infoCard.salary;
            salarySmaller(indexForCountry, addForIndex);
        };
        currentSalary = infoCard.salary;
        placeForCurrentSalary[indexForCountry].innerHTML = infoCard.salary;
        placeForTaxesFromSalary[indexForCountry].innerHTML = getMyTaxes.call(country, infoCard.salary);
        if (infoCard.taxes >= currentTaxes) {
            taxesForProgrammer[indexForCountry].innerHTML = infoCard.taxes;
            salaryBigger(indexForCountry, addForIndex + 1);
        } else {
            taxesForProgrammer[indexForCountry].innerHTML = infoCard.taxes;
            salarySmaller(indexForCountry, addForIndex + 1);
        };
        currentTaxes = infoCard.taxes;
        if (infoCard.profit >= currentProfit) {
            profitForProgrammer[indexForCountry].innerHTML = infoCard.profit;
            salaryBigger(indexForCountry, addForIndex + 2);
        } else {
            profitForProgrammer[indexForCountry].innerHTML = infoCard.profit;
            salarySmaller(indexForCountry, addForIndex + 2);
        };
        currentProfit = infoCard.profit;
        placeForTotalTaxes[indexForCountry].innerHTML = getTotalTaxes.call(country);
    };
    return fillHTML;
};

let prLatvia = printCard(latvia, 0, 0);
let prLithuania = printCard(litva, 1, 2);
let prUkraine = printCard(ukraine, 2, 4);

setInterval(prLatvia, INTERVAL_DELAY_LATVIA_SALARY);
setInterval(prLithuania, INTERVAL_DELAY_LITHUANIA_SALARY);
setInterval(prUkraine, INTERVAL_DELAY_UKRAINE_SALARY);
