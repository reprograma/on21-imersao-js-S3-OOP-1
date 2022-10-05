const { Person } = require("./Person");

class Student extends Person {
    constructor(nome, endereco, dataNascimento, turma, temasEstudados) {
        super(nome, endereco, dataNascimento);
        this.turma = turma;
        this.temasEstudados = temasEstudados;
    }
}

module.exports = Student;