const TIME_LOADED = 1500;
const COLUMN_FOR_INFO = 4;
const btnForInfo = document.querySelector("#t-characters");
const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");
const row = document.createElement("tr");
const planets = document.querySelector("#planets");
const epizod = document.querySelector("#epizod");
const placePlanets = document.querySelector("#planets__list");
const placeCharecters = document.querySelector(".table-character");
const btnNextPage = document.querySelector("#next-btn");
const btnTranslate = document.querySelector("#translate");
const body = document.body;
const characters = {
  "Luke Skywalker": "img/lukeskywalker.png",
  "C-3PO": "img/c-3po.png",
  "R2-D2": 'img/r2-d2.png',
  "Obi-Wan Kenobi": "img/obi-wan-kenobi.png",
  "Anakin Skywalker": "img/anakin-skywalker.png",
  "Padmé Amidala": "img/padme-amidala.png",
  "Barriss Offee": "img/barriss-offee.png",
  "Ayla Secura": "img/ayla-secura.png",
  "Jabba Desilijic Tiure": "img/jabba-desilijic-tiure.png",
  "Darth Vader": "img/darth-vader.png",
  "Yoda": "img/yoda.png",
  "Boba Fett": "img/boba-fett.png",
  "Palpatine": "img/palpatine.png",
  "Shmi Skywalker": "img/shmi-skywalker.png",
  "Ki-Adi-Mundi": "img/ki-adi-mundi.png",
  "Jar Jar Binks": "img/jar-jar-binks.png",
  "Nute Gunray": "img/nute-gunray.png",
  "Watto": "img/watto.png",
  "Poggle the Lesser": "img/poggle-the-lesser.png",
  "Mace Windu": "img/mace-windu.png",
  "Cliegg Lars": "img/cliegglars.png",
  "Kit Fisto": "img/kitfisto.png",
  "Lama Su": "img/lama-su.png",
  "Dexter Jettster": "img/dexter-jettster.png",
  "Luminara Unduli": "img/luminara-unduli.png",
  "Taun We": "img/taun-we.png",
  "Jocasta Nu": "img/jocasta-nu.png",
  "Beru Whitesun lars": "img/BeruCardTrader.png",
  "Mas Amedda": "img/mas-amedda.png",
  "Plo Koon": "img/plo-koon.png",
  "San Hill": "img/san-hill.png",
  "Wat Tambor": "img/wat-tambor.png",
  "R4-P17": "img/R4-P17.png",
  "R5-D4": "img/r5-d4.png",
  "Zam Wesell": "img/zam-wesell.png",
  "Leia Organa": "img/leia-organa.png",
  "Wilhuff Tarkin": "img/wilhuffTarkin.png",
  "Greedo": "img/greedo.png",
  "Biggs Darklighter": "img/biggsDarklighter.png",
  "Jek Tono Porkins": "img/jekTonoPorkins.png",
  "Han Solo": "img/hanSolo.png",
  "Chewbacca": "img/chewbacca.png",
  "Wedge Antilles": "img/wedgeAntilles.png",
  "Raymus Antilles": "img/raymusAntilles.png",
  "Owen Lars": "img/OwenLars.png",
  "IG-88": "img/IG-88.png",
  "Bossk": "img/bossk.png",
  "Lobot": "img/Lobot_SWDR.png",
  "Lando Calrissian": "img/landoCalrissian.png",
  "Ackbar": "img/ackbar.png",
  "Wicket Systri Warrick": "img/wicket-systri-warrick.png",
  "Arvel Crynyd": "img/arvel-crynyd.png",
  "Mon Mothma": "img/monMothma.png",
  "Nien Nunb": "img/nienNunb.png",
  "Bib Fortuna": "img/bibFortuna.png",
  "Qui-Gon Jinn": "img/qui-GonJinn.png",
  "Roos Tarpals": "img/roosTarpals.png",
  "Finis Valorum": "img/finisValorum.png",
  "Rugor Nass": "img/rugorNass.png",
  "Sebulba": "img/sebulba.png",
  "Ric Olié": "img/ric-olie.png",
  "Ben Quadinaros": "img/BenQuadinaros.png",
  "Quarsh Panaka": "img/QuarshPanaka.png",
  "Dud Bolt": "img/DudBolt.png",
  "Ratts Tyerel": "img/RattsHS.png",
  "Darth Maul": "img/DarthMaul.png",
  "Gasgano": "img/GasganoSTAR_ WARS.png",
  "Adi Gallia": "img/AdiGallia.png",
  "Saesee Tiin": "img/SaeseeTiin.png",
  "Eeth Koth": "img/Eeth_Koth.png",
  "Yarael Poof": "img/YaraelPoof.png",
  "Plo Koon": "img/PloKoon.png",
  "Gregar Typho": "img/GregarTypho.png",
  "Bail Prestor Organa": "img/BailPrestorOrgana.png",
  "Dormé": "img/Dorme.png",
  "Jango Fett": "img/JangoFett.png",
  "Dooku": "img/Dooku.png",
  "Cordé": "img/Cord.png",
  "Sly Moore": "img/sly-moore.png",
  "Shaak Ti": "img/ShaakTi.png",
  "Tion Medon": "img/TionMedon.png",
  "Tarfful": "img/Tarfful.png",
  "Grievous": "img/Grievous.png"
};

function loaded(time = TIME_LOADED) {
  body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    body.classList.add('loaded');
    body.classList.remove('loaded_hiding');
  }, time);
};

loaded(1000);
function createTable() {
  const row = document.createElement("tr");
  const arrayTh = Array(COLUMN_FOR_INFO).fill(1).map(el => document.createElement("th"));
  thead.innerHTML = "";
  thead.append(row);
  arrayTh.forEach((el, index) => {
    row.appendChild(arrayTh[index]);
  });
  arrayTh[1].innerHTML = "Full name";
  arrayTh[2].innerHTML = "Date of birth";
  arrayTh[3].innerHTML = "Gender";
};

btnForInfo.addEventListener("click", function () {
  body.classList.remove('loaded');
  body.classList.add('loaded_hiding');
  loaded();
  fetch(`http://swapi.dev/api/films/${+epizod.value}/`)
    .then((response) => response.json())
    .then((data) => {

      placePlanets.style.display = "none";
      placeCharecters.style.display = "block";
      body.classList.remove("bg-for-planet");
      body.classList.add("bg-focharecters");
      thead.innerHTML = "";
      tbody.innerHTML = "";
      createTable();
      data.characters.map(url => {
        fetch(url)
          .then((response) => response.json())
          .then((character) => {
            const arrayInfo = Array(COLUMN_FOR_INFO).fill(1).map(el => document.createElement("td"));
            const info = [character.name, character.birth_year, character.gender];
            const imgIcon = document.createElement("img");
            let row = document.createElement("tr");
            tbody.append(row);
            imgIcon.src = characters[character.name];
            imgIcon.classList.add("avatar");
            arrayInfo[0].append(imgIcon);
            if (info[2] === "n/a" || info[2] === "none") {
              arrayInfo[3].innerHTML = " - ";
            } else {
              const imgGender = document.createElement("img");
              imgGender.src = `img/${character.gender}.svg`;
              imgGender.classList.add("table__icon");
              arrayInfo[3].append(imgGender);
            };

            arrayInfo[2].innerHTML = (info[1] === "unknown") ? "-" : info[1];
            arrayInfo[1].innerHTML = info[0];
            arrayInfo.forEach((el, index) => {
              row.append(arrayInfo[index]);
            });
          })
      })
    })
});

planets.addEventListener("click", function () {
  fetch('https://swapi.dev/api/planets/')
    .then((response) => {
      return response.json();
    })
    .then((planetList) => {
      createPlaceForPlanets();
      const list = document.createElement("ul");
      placePlanets.append(list);
      for (let i = 0; i < planetList.results.length; i++) {
        const item = document.createElement("li");
        localStorage.setItem(`planet ${i}`, JSON.stringify(planetList.results[i].name));
        item.innerHTML = planetList.results[i].name;
        item.style.listStyleImage = `url(img/1.ico)`;
        list.append(item);
      };
    })
});


btnNextPage.addEventListener("click", () => {
  window.location.href = "planets.html"
});


btnTranslate.addEventListener("click", () => {
  fetch('https://swapi.dev/api/planets/?format=wookiee')
    .then(response => response.text())
    .then(planets => {
      console.log(planets);
      createPlaceForPlanets();
      plenats = JSON.parse(planets.replace(/whhuanan/g, '"whhuanan"'));
      const list = document.createElement("ul");
      placePlanets.append(list);
      for (let i = 0; i < plenats.rcwochuanaoc.length; i++) {
        const item = document.createElement("li");
        item.innerHTML = plenats.rcwochuanaoc[i].whrascwo;
        localStorage.setItem(`planet ${i}`, JSON.stringify(plenats.rcwochuanaoc[i].whrascwo));
        item.style.listStyleImage = `url(img/2.ico)`;
        list.append(item);
      }
    })
});

function createPlaceForPlanets() {
  btnNextPage.disabled = false;
  placePlanets.style.display = "block";
  placeCharecters.style.display = "none";
  placePlanets.innerHTML = "";
  body.classList.add("bg-for-planet");
  body.classList.remove("bg-focharecters");
};
