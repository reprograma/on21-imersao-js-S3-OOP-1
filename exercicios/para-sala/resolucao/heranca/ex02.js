class Person {
    constructor(name, endereco, dataNascimento) {
        this.name = name;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
    }
}

class Stundant extends Person {
    constructor(turma, temasdeStudo) {
        super(name, endereco, dataNascimento)
        this.turma = turma;
        this.temasdeStudo = temasdeStudo;
    }
}


class Teacher extends Person {
    constructor(grade, turma) {
        super(name, endereco, dataNascimento)
        this.grade = grade;
        this.turma = turma;
    }
}