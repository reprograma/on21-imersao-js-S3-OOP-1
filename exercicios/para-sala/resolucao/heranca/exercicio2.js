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
    constructor(nome, endereco, nascimento){
        this.nome = nome;
        this.endereco = endereco;
        this.nascimento = nascimento;
    }

    getName(){
        return `Seu nome: ${this.nome}`;
    }
}

class Student extends Person{
    constructor(nome, endereco, nascimento, turma, temasEstudados){
        super(nome, endereco, nascimento)
        
        this.turma = turma;
        this.temasEstudados = temasEstudados;
    }

    getClass(){
        return `Estudante da turma: ${this.turma}`;
    }

}

class Teacher extends Person {
    constructor(nome, endereco, nascimento, turma, temasEstudados, grade, turmas){
        super(nome, endereco, nascimento, turma, temasEstudados)
        
        this.grade = grade;
        this.turmas = turmas;
    }
}

const criarEstudante1 = new Student("Evelin", "rua dos devs", "07/01", "imersão Javascript", ["testes", "Orientação a Objetos"]);
