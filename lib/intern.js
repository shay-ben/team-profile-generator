const employee = require("./employee");

class ntern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getTitle() {
    return "intern";
  }
}

module.exports = intern;