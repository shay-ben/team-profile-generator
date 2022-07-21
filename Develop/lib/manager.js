const Employee = require("./employee");

class Manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = this.officeNumber;
  }

  officeNumber() {
    return this.officeNumber;
  }

  getTitle() {
    return "manager";
  }
}

module.exports = manager;