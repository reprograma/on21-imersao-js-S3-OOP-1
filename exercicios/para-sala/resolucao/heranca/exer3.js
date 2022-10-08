/*Crie uma classe Person com os atributos:

- Nome;
- Endereço;
- Data de Nascimento;

Em seguida, crie uma classe Student que terá as informações de Person com os atributos adicionais:

- Turma;
- Temas estudados;

Para finalizar, crie uma classe Teacher que também terá as informações de Person com os atributos:

- Grade;
- Turmas; */


class Person {
    constructor(nome, endereco, dataNascimento){
        this.nome = nome
        this.endereco = endereco
        this.dataNascimento = dataNascimento

    }
}

class Student extends Person {
    constructor(nome, endereco, dataNascimento, turma, temasEstudados){
        super(nome, endereco, dataNascimento)
        this.turma = turma
        this.temasEstudados = temasEstudados
    }
}

class Teacher extends Person {
    constructor(nome, endereco, dataNascimento, grade, turmas){
        super(nome, endereco, dataNascimento)
        this.grade = grade
        this.turmas = turmas
    }
}