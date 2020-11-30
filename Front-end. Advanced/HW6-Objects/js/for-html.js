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

const fillHTMLStudentInfo = (indexStudent) => {
  students.forEach((el, index) => {
    subjectModal[index].innerHTML = (getSubjects(students[indexStudent]))[index];
    marksModal[index].innerHTML = (Object.values(students[indexStudent].subjects))[index];
  });
  countAverage.addEventListener("click", () =>{
    averageMark.innerHTML = getAverageMark(students[indexStudent]);
  });
};

students.forEach((el, index) => {
  namesStudents[index].innerHTML = students[index].name;
  btnForBest.addEventListener("click", () => {
    if (namesStudents[index].innerHTML === getBestStudent(students)) {
      cardBestStudent[index].classList.add("card-best");
      namesStudents[index].classList.add("best-star");
    };
    btnForBest.style.display = "none";
  });
  coursesStudents[index].innerHTML = students[index].course;
  });

students.forEach((el, index) => {
  students.forEach((el, j) => {
      subjectsStudents[index].innerHTML += `${(getSubjects(students[index]))[j]} <br/>`;
  });
});

closeModal.forEach((el, index) => {
  closeModal[index].addEventListener("click", () => {
    averageMark.innerHTML = " ";
  });
});

subjectBtnModal.forEach((el, index) => {
  subjectBtnModal[index].addEventListener("click", () => {
    fillHTMLStudentInfo(index);
  });
});


