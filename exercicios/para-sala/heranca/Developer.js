const Person = require("./Person.js")

 class Developer extends Person {
    constructor(name, email, cel, skills) {
      super(name, email, cel);
      this.skills = skills;
    }
  }
  module.exports = Developer;