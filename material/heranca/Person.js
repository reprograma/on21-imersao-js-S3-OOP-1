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

class Person{
    constructor(nome, endereco, nascimento){
        this.nome=nome
        this.endereco=endereco
        this.nascimento=nascimento
    }
}

class Student extends Person{
    constructor(nome, endereco, nascimento, grade, turmas){
        super(nome, endereco, nascimento)
        this.grade=grade
        this.turmas=turmas
    }
}

const aluno1 = new Student ("Caio", "rua di crichê", "28/08/1997", "Grade TI 1", "Turma 1"); 

console.log(aluno1)
