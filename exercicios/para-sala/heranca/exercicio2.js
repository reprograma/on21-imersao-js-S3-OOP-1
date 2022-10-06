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
    constructor(nome, endereco, dataDeNascimento){
        this.nome = nome,
        this.endereco = endereco,
        this.dataDeNascimento = dataDeNascimento
    }
}

class Student extends Person{
    constructor(nome, endereco, dataDeNascimento, turma, temasEstudados){
        super(nome, endereco, dataDeNascimento)
        this.turma = turma
        this.temasEstudados = temasEstudados
    }
}