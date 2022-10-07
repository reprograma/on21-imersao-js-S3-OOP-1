const Person = require("./Person");
class Teacher {
  constructor(nome, endereco, dataNasc, grade, turmas) {
    super(nome, endereco, dataNasc);
    this.grade = grade;
    this.turmas = turmas;
  }
}
