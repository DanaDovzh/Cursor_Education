const btnPreviousPage = document.querySelector("#back-btn");
const placeListPlanets = document.querySelector("#list-planets");
const rowPlanets = document.querySelectorAll(".planets");


function showPlanets() {
    let i = 0;
    let cntRow = 0;
    let newPlanet = JSON.parse(localStorage.getItem(`planet ${i}`));
    while (true) {
        if (newPlanet === null) {
            break
        } else {
            if (cntRow === 3) {
                cntRow = 0;
            } else {
                const item = document.createElement("div");
                const imgItem = document.createElement("img");

                imgItem.src = `img/planets/${newPlanet.substr(0, 1)}.png`;
                item.innerHTML = `${newPlanet}`;
                rowPlanets[cntRow].append(item);
                imgItem.classList.add("planet-img");
                item.append(imgItem);
                cntRow++;
            }
            i++;
            newPlanet = JSON.parse(localStorage.getItem(`planet ${i}`));
        }
    }
};

showPlanets();
btnPreviousPage.addEventListener("click", () => {
    window.location.href = "index.html";
});