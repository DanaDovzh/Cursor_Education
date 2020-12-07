class Students {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = Array.from({length: 4}, () => Math.floor(Math.random() * (5 - 1 + 1)) + 1);
    this.isDismiss = false;
  }

  get getInfo() {
    return `${this.course} year students of ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    if (this.isDismiss) 
      return `This student is not studying`;

    return  this.marks.length ? `${this.marks.join(",")}` : `${this.fullName} doesnt have marks`;
  }

  set setNewMarks(newMark = 5) {
    if (this.isDismiss) 
      return `This student is not studying`;

    if (Number.isInteger(newMark)) 
      this.marks.push(newMark)
    else 
      return `Mark is not correct`;
  }

  getAverageMark () {
    if (this.isDismiss) 
      return `This student is not studying`;
    const averageMark = Number((this.marks.reduce((total, mark) => total + mark, 0)/this.marks.length).toFixed(2));
    return (!averageMark.length) ? 
      `Sorry, but this student doesnt have any marks` : 
      `${averageMark}`;
  }

  dismiss() {
    this.isDismiss = true;
    return `${this.fullName} dismissed`;
  }

  recover() {
    this.isDismiss = false;
    return `${this.fullName} recovered`;
  }
}

class BudgetStudents extends Students {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    this.markForMoney = 4;
    this.scholarshipAmount = this.startScholarship();
    setInterval(this.getScholarship.bind(this), 1000);
  }

  getScholarship() {
    (Number(this.getAverageMark()) >= this.markForMoney) ? this.scholarshipAmount = 1400 : this.scholarshipAmount = 0;
  }

  startScholarship() {
    return (Number(this.getAverageMark()) >= this.markForMoney) ? 1400 : 0;
  }

  dismiss() {
    super.dismiss();
    this.scholarshipAmount = 0;
  }

  recover() {
    super.recover();
    this.getScholarship();
  }
}

const student = new BudgetStudents("Institute of Avengers", 4, "Robert John Downey Jr.");
const styleHeading = ["font-size: 16px;", "color:#68200a;"].join("");
const styleCenter = ["font-size: 16px;", "color:#a0a0a0;", "padding-left: 40px;"].join("");
const sizeInfo = ["font-size: 14px;", "padding-left: 20px;"].join("");

console.log("%c%s", styleHeading, "Створюємо студента:");
console.log(student);

console.log("%c%s", styleHeading,"Порахуємо його середній бал");
console.log("%c%s", sizeInfo, '-> ' + student.getAverageMark());

console.log("%c%s", styleCenter, "ВІДРАХУВАННЯ СТУДЕНТА");
student.dismiss();
console.log("%c%s", styleHeading,"Які оцінки у відрахованого студента?");
console.log("%c%s", sizeInfo, '-> ' + student.getMarks);

console.log("%c%s", styleCenter,"Зробимо подарунок студенту! Повернемо його");
student.recover();
console.log("%c%s", styleHeading,"Давайте поставимо  його оцінку 4");
student.setNewMarks = 4;
console.log("%c%s", sizeInfo, '-> ' + student.getMarks);

console.log("%c%s", styleHeading,"Кінцева інформація про студента");
console.log("%c%s", sizeInfo, '-> ' + student.getInfo);
console.log(student);




