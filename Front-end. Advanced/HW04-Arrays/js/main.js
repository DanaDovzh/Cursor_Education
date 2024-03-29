const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const femaleNames = ["Олена", "Іра", "Світлана"];
const maleNames = ["Олександр", "Ігор", "Олексій"];

const placeTeamStudent = document.querySelectorAll(".team-students");
const placeTeamTheme = document.querySelectorAll(".theme-for-team");
const placeMarkTeam = document.querySelectorAll(".mark-for-team");
const placeNameStudent = document.querySelectorAll(".student");
const placeMarkStudent = document.querySelectorAll(".mark-for-student");
const styleForLog = ['padding: 3px;',
    'border-radius: 5px;',
    'background: linear-gradient(101deg, rgba(39,85,4,0.5340511204481793) 0%, rgba(35,157,22,0.5088410364145659) 100%);',
    'color: black;'].join('');

const createStudentPairs = (names) => {
    let studentsPairs = [];
    const numberOfPairs = Math.ceil((students.length)/2);
    for (let i = 0; i < numberOfPairs; i++) {
        studentsPairs[i] = [];
    };
    let indexNewStudent = 0;
        divideIntoGenders(maleNames, 0);
        indexNewStudent = 0;
        divideIntoGenders(femaleNames, 1);

        function divideIntoGenders(gender, mainIndex) {
            for (const name of students) {
                if  (gender.includes(name)) {
                    studentsPairs[indexNewStudent][mainIndex] = name;
                    indexNewStudent++;
                }
            }
        }
        return studentsPairs;
};

const themesForTeamsStudents = (pairsStudents, themesForTeam) => {
    const pairsStudentsWithThemes = [];
    for (let i = 0; i < themes.length; i++) {  
        pairsStudentsWithThemes.push([pairsStudents[i].join("\u00A0і\u00A0"),themesForTeam[i]]);
    };
    return pairsStudentsWithThemes;
};

const getRandomNumber = function (min = 1, max = 5) {
    return Math.floor(Math.random()* (max - min) + min);
}

const marksTeamsStudents = (marksProject) => {
    const marksAndTeams = JSON.parse(JSON.stringify(marksProject));
    for (let i = 0; i < marksAndTeams.length; i++) {
        marksAndTeams[i].push(getRandomNumber(1,5));
    }
    return marksAndTeams;
};

const markOneStudent = (students, markToStudent) => {
    const markStudent = [];
    for (let i = 0; i < students.length; i++) {
        markStudent.push([students[i], markToStudent[i]]);
    };
    return markStudent;
};

const teamsStudents = createStudentPairs (students);
const themesAndStudents = themesForTeamsStudents(teamsStudents, themes);
const marksForTeams = marksTeamsStudents(themesAndStudents);
const markForStudent = markOneStudent(students, marks);

const makePairStudentsForLog = (arrayForTransform) => {
    const arrayTransformed = [];
    for (let i = 0; i < arrayForTransform.length; i ++) {
        arrayTransformed.push({  "Пари студентів" : `${arrayForTransform[i]}`});
        placeTeamStudent[i].innerHTML = arrayForTransform[i];
        placeTeamStudent[i+3].innerHTML = arrayForTransform[i];
        placeTeamStudent[i+6].innerHTML = arrayForTransform[i];
    }
    return arrayTransformed;
};

const makePairsThemesForLog = (arrayForTransform) => {
    const arrayTransformed = [];
    for (let i = 0; i < arrayForTransform.length; i ++) {
        arrayTransformed.push({  "Студенти" : `${arrayForTransform[i][0]}`, "Тема проєкту" : `${arrayForTransform[i][1]}` });
    }
    return arrayTransformed;
};

const makePairsThemesMarksForLog = (arrayForTransform) => {
    const arrayTransformed = [];
    for (let i = 0; i < arrayForTransform.length; i ++) {
        arrayTransformed.push({  "Студенти" : `${arrayForTransform[i][0]}`,
        "Тема проєкту" : `${arrayForTransform[i][1]}`, "Оцінка" : +`${arrayForTransform[i][2]}` });
        placeMarkTeam[i].innerHTML = arrayForTransform[i][2];
        placeTeamTheme[i].innerHTML = arrayForTransform[i][1];
    }
    return arrayTransformed;
};

const makeMarkStudent = (arrayForTransform) => {
    const arrayTransformed = [];
    for (let i = 0; i < arrayForTransform.length; i ++) {
        arrayTransformed.push({  "Студент" : `${arrayForTransform[i][0]}`, "Успішність" : +`${arrayForTransform[i][1]}` });
        placeNameStudent[i].innerHTML = arrayForTransform[i][0];
        placeMarkStudent[i].innerHTML = arrayForTransform[i][1];
    }
    return arrayTransformed;
};

const consolResult = (tablePrint, arrayPrint, messagePrint) => {
    console.group('%c%s', styleForLog, messagePrint);
    console.table(tablePrint);
    console.log(arrayPrint);
    console.groupEnd();
};

consolResult(makePairStudentsForLog(teamsStudents), teamsStudents, "Пари студентів");
consolResult(makePairsThemesForLog(themesAndStudents), themesAndStudents, "Теми проектів для пар студентів");
consolResult(makePairsThemesMarksForLog(marksForTeams), marksForTeams, "Оцінки парам за проекти");
consolResult(makeMarkStudent(markForStudent), markForStudent, "Оцінки студенту");
