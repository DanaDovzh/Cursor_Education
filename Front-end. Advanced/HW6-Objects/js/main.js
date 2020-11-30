const styleForSubject = ['color: #202b23;', 'font-size: 16px;', 'font-weight: 600;', 
  'margin-left: 30%;', 'text-shadow: 5px 5px 3px #ffd800;'].join('');
const styleForInfo = ['color: #041f69;', 'font-size: 16px;', 'font-weight: 600;', 
  'margin-left: 30%;', 'text-shadow: 5px 5px 3px #28a745;'].join('');
const styleForWords = ['color: #630070;', 'font-size: 14px;'].join('');
const wordForCount = ["text", "opportunity", "peace", "array", "challenge"];
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  const getSubjects = (student) => {
      const nameSubjects = Object.keys(student.subjects);
      const arraySubject = new Array();

      nameSubjects.forEach(subject => {
        arraySubject.push(subject.slice(0,1).toUpperCase() + 
                  subject.slice(1).toLowerCase().replace(/_/g, " "));
      });
      return arraySubject;
  };

const getAverageMark = (studentSubject) => {
  const markForSubjects = Object.values(studentSubject.subjects).flat(Infinity);
  const totalAverageMark = markForSubjects.reduce((total, mark) => total + mark, 0)/markForSubjects.length;
  return totalAverageMark.toFixed(2);
};

const getStudentInfo = (studentInfo) => {
  const { name, course } = studentInfo; 
  const infoCard = {name, course, averageMark: +getAverageMark(studentInfo)};
  return infoCard;
};
const getStudentsNames = (studentsInfo) => studentsInfo.map(nameStudent => nameStudent.name).sort();

const getBestStudent = (students) => {
  const sortByMarks = (array) => array.sort((a, b) => b.averageMark - a.averageMark);
  let array = [];
  for (student of students) {
    array.push(getStudentInfo(student));
  };
  sortByMarks(array);
  return array[0].name;
};

const calculateWordLetters = (word) => {
  const arrayLetters = word.toLowerCase().split("");
  let calcLetters = {};
  for (letter of arrayLetters) {
    (calcLetters.hasOwnProperty(letter)) ? 
      calcLetters[letter] += 1 : calcLetters[letter] = 1;
  };
  return calcLetters;
};

for (student of students) {
  console.groupCollapsed('%c%s', styleForSubject, `Subjects for ${student.name}`);
  console.table(getSubjects(student));
  console.groupEnd();
};

for (student of students) {
  console.groupCollapsed('%c%s', styleForInfo, `Info card for ${student.name}`);
  console.table(getStudentInfo(student));
  console.groupEnd();
};

console.groupCollapsed('%c%s', styleForWords, "Words for function  calculateWordLetters()");
for(let i = 0; i < wordForCount.length; i++) {
  console.log(calculateWordLetters(wordForCount[i]));
};
console.groupEnd();
