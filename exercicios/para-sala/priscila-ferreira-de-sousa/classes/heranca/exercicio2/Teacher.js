const { Person } = require("./Person");
class Teacher extends Person {
    constructor(nome, endereco, dataNascimento, grade, turmas) {
        super(nome, endereco, dataNascimento);
        this.grade = grade;
        this.turmas = turmas;
    }
}

module.exports = Teacher;