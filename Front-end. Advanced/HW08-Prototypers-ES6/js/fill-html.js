const placeForNameStudents = document.querySelectorAll(".info__name");
const placeForUniversity = document.querySelectorAll(".info__university");
const placeForCourse = document.querySelectorAll(".info__course");
const placeForMarks = document.querySelectorAll(".info__marks");
const placeForAverageMark = document.querySelectorAll(".average-mark-place");
const btnForCountAverageMark = document.querySelectorAll(".average-mark-btn");
const placeForScholarship = document.querySelectorAll(".info__scholarship");
const cards = document.querySelectorAll(".card-body");

const valueNewMark = document.querySelectorAll(".new-mark");
const btnDismiss = document.querySelectorAll(".dismiss");
const btnRecover = document.querySelectorAll(".recover");
const formAddMark = document.querySelectorAll(".form");

const studentsArray = [];
const bodyHTML = document.body;

bodyHTML.classList.add('loaded_hiding');
window.setTimeout(function () {
    bodyHTML.classList.add('loaded');
    bodyHTML.classList.remove('loaded_hiding');
}, 1500);

studentsArray[0] = new BudgetStudents("Institute of Avengers", 4, "Robert John Downey Jr.");
studentsArray[1] = new BudgetStudents("Hogwarts", 5, "Alan Sidney Patrick Rickman");
studentsArray[2] = new BudgetStudents("Midtown High School", 2, "Krysten Alyce Ritter");
studentsArray[3] = new BudgetStudents("Medical College in New York", 4, "Benedict Cumberbatch");
studentsArray[4] = new BudgetStudents("Los Angeles Center for Advanced Sciences", 3, "Leonardo Wilhelm DiCaprio");
studentsArray[5] = new BudgetStudents("University of Zurich", 10, "Albert Einstein");

studentsArray.forEach((student, index) => {
    placeForNameStudents[index].innerHTML = studentsArray[index].fullName;
    placeForUniversity[index].innerHTML = studentsArray[index].university;
    placeForCourse[index].innerHTML = studentsArray[index].course;
    placeForMarks[index].innerHTML = studentsArray[index].getMarks;
    placeForScholarship[index].innerHTML = studentsArray[index].scholarshipAmount;

    btnForCountAverageMark[index].addEventListener("click", () => {
        placeForAverageMark[index].innerHTML = `Average mark for ${studentsArray[index].fullName} is ${studentsArray[index].getAverageMark()}`;
        btnForCountAverageMark[index].style.display = "none";
    });

    btnDismiss[index].addEventListener("click", () => {
        studentsArray[index].dismiss();
        btnRecover[index].disabled = false;
        btnDismiss[index].disabled = true;
        cards[index].classList.toggle("card-dismiss");
        placeForScholarship[index].innerHTML = studentsArray[index].startScholarship();
    })

    btnRecover[index].addEventListener("click", () => {
        btnRecover[index].disabled = true;
        btnDismiss[index].disabled = false;
        studentsArray[index].recover();
        cards[index].classList.toggle("card-dismiss");
        placeForScholarship[index].innerHTML = studentsArray[index].startScholarship();  
    })

    formAddMark[index].addEventListener('submit', (event) => {
        studentsArray[index].setNewMarks = Number(valueNewMark[index].value);
        placeForMarks[index].innerHTML = studentsArray[index].getMarks;

        if (btnForCountAverageMark[index].style.display === "none")
            placeForAverageMark[index].innerHTML = `Average mark for ${this.fullName} is ${studentsArray[index].getAverageMark()}`;

        placeForScholarship[index].innerHTML = studentsArray[index].startScholarship();  
        event.preventDefault();
    })
})
