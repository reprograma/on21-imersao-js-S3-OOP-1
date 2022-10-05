const Person = require('./person')

class Student extends Person {
  constructor(name, address, birth_date, team, subjects) {
    super(name, address, birth_date)
    
    this.team = team
    this.subjects = subjects
  }
}

module.exports = Student