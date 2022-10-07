const Person = require("./Person");
class Student {
  constructor(nome, endereco, dataNasc, turma, temas) {
    super(nome, endereco, dataNasc);
    this.turma = turma;
    this.temasEstudados = temas;
  }
}
