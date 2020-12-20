const TIME_LOADED = 1500;
const btnForInfo = document.querySelector("#t-characters");
const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");
const row = document.createElement("tr");
const planets = document.querySelector("#planets");
const epizod = document.querySelector("#epizod");
const placePlanets = document.querySelector("#planets__list");
const placeCharecters = document.querySelector(".table-character");
const btnNextPage = document.querySelector("#next-btn");
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

function loaded (time = TIME_LOADED) {
  body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    body.classList.add('loaded');
    body.classList.remove('loaded_hiding');
}, time);
};

loaded (1000);
function createTable() { 
  const row = document.createElement("tr");
  const avatar = document.createElement("th");
  const fullName = document.createElement("th");
  const dateBirth = document.createElement("th");
  const gender = document.createElement("th");

  thead.innerHTML = "";
  thead.append(row);
  row.appendChild(avatar);
  row.appendChild(fullName);
  row.appendChild(dateBirth);
  row.appendChild(gender);

  fullName.innerHTML = "Full name";
  dateBirth.innerHTML = "Date of birth";
  gender.innerHTML = "Gender";
};

btnForInfo.addEventListener("click", () => {
  body.classList.remove('loaded');
  body.classList.add('loaded_hiding');
  loaded();
  const epizodValue = +epizod.value;
  placePlanets.style.display = "none";
  placeCharecters.style.display = "block";
  body.classList.remove("bg-for-planet");
  body.classList.add("bg-focharecters");
  thead.innerHTML = "";
  tbody.innerHTML = "";
  createTable();

  fetch(`http://swapi.dev/api/films/${epizodValue}/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.characters.forEach(url => {
        console.log(url);
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((character) => {
            const tIcon = document.createElement("td");
            const tName = document.createElement("td");
            const tBirth = document.createElement("td");
            const tGender = document.createElement("td");
            const info = [character.name, character.birth_year, character.gender];
            const imgIcon = document.createElement("img");
            let row;
            row = document.createElement("tr");
            tbody.append(row);
            imgIcon.src = characters[character.name];
            imgIcon.classList.add("avatar");
            tIcon.append(imgIcon);
            if (info[2] === "n/a" || info[2] === "none") {
              tGender.innerHTML = " - ";
            } else {
              const imgGender = document.createElement("img");
              imgGender.src = `img/${character.gender}.svg`;
              imgGender.classList.add("table__icon");
              tGender.append(imgGender);
            }

            (info[1] === "unknown") ? tBirth.innerHTML = "-" : tBirth.innerHTML = info[1];

            tName.innerHTML = info[0];
            row.appendChild(tIcon);
            row.appendChild(tName);
            row.appendChild(tBirth);
            row.appendChild(tGender);
          })
      })
    })
});

planets.addEventListener("click", () => {
  btnNextPage.disabled = false;
  placePlanets.style.display = "block";
  placeCharecters.style.display = "none";
  placePlanets.innerHTML = "";
  body.classList.add("bg-for-planet");
  body.classList.remove("bg-focharecters");
  fetch('https://swapi.dev/api/planets/')
    .then((response) => {
      return response.json();
    })
    .then((planetList) => {
      const list = document.createElement("ul");

      placePlanets.append(list);
      for (let i = 0; i < planetList.results.length; i++) {
        const item = document.createElement("li");
        localStorage.setItem(`planet ${i}`, JSON.stringify(planetList.results[i].name));
        item.innerHTML = planetList.results[i].name;
        item.style.listStyleImage = `url(img/1.ico)`;
        list.append(item);
      }
    })
});

btnNextPage.addEventListener("click", () => {
  window.location.href = "planets.html"
})