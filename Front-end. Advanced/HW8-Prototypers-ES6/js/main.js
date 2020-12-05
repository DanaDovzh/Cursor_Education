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
      return `${this.fullName} is not studying`;

    return this.marks.length > 0 ? `${this.marks.join(",")}` : `${this.fullName} doesnt have marks`;
  }

  set setNewMarks(newMark = 5) {
    if (this.isDismiss) 
      return `${this.fullName} is not studying`;

    if (Number.isInteger(newMark)) 
      this.marks.push(newMark)
    else 
      return `Mark is not correct`;
  }

  getAverageMark () {
    if (this.isDismiss) 
      return `${this.fullName} is not studying`;
    const averageMark = Number((this.marks.reduce((total, mark) => total + mark, 0)/this.marks.length).toFixed(2));
    return (averageMark.length === 0) ? 
      `Sorry, but ${this.fullName} doesnt have any marks` : 
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
