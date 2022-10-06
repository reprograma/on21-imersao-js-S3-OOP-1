const { Person } = require('./Person.js')

class Student extends Person {
  constructor(nome, endereço, nascimento){
    super(nome, endereço, nascimento);

    this.turma = turma;
    this.temas = temas;
    
  }
}

module.exports = Student