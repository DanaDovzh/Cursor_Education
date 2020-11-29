const namesStudents = document.querySelectorAll(".name-student");
const coursesStudents = document.querySelectorAll(".course-student");
const subjectsStudents = document.querySelectorAll(".subjects-students");
const subjectModal = document.querySelectorAll(".subject");
const subjectBtnModal = document.querySelectorAll(".btn-marks");
const marksModal = document.querySelectorAll(".marks");
const countAverage = document.querySelector(".btn-average-count");
const averageMark = document.querySelector(".average-mark");
const closeModal = document.querySelectorAll(".btn-close-modal");
const cardBestStudent = document.querySelectorAll(".card-img");
const btnForBest = document.querySelector("#best");

for (let i = 0; i < students.length; i++) {
  namesStudents[i].innerHTML = students[i].name;
  btnForBest.addEventListener("click", () => {
    if (namesStudents[i].innerHTML === getBestStudent(students)) {
      cardBestStudent[i].classList.add("card-best");
      namesStudents[i].classList.add("best-star");
    };
    btnForBest.style.display = "none";
  });
  coursesStudents[i].innerHTML = students[i].course;
};

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students.length; j++)
      subjectsStudents[i].innerHTML += `${(getSubjects(students[i]))[j]} <br/>`;
};

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", () => {
    averageMark.innerHTML = " ";
  });
}
for (let i = 0; i < subjectBtnModal.length; i++) {
  subjectBtnModal[i].addEventListener("click", () => {
    fillHTMLStudentInfo(i);
  })
};

const fillHTMLStudentInfo = (indexStudent) => {
  for (let i = 0; i < students.length; i++) {
    subjectModal[i].innerHTML = (getSubjects(students[indexStudent]))[i];
    marksModal[i].innerHTML = (Object.values(students[indexStudent].subjects))[i];
  };
  countAverage.addEventListener("click", () =>{
    averageMark.innerHTML = getAverageMark(students[indexStudent]);
  });
};