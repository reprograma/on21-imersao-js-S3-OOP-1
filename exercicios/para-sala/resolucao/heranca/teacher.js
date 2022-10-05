const Person = require('./person')

class Teacher extends Person {
  constructor(name, address, birth_date, grade, classes) {
    super(name, address, birth_date)
    
    this.grade = grade
    this.classes = classes
  }
}

module.exports = Teacher