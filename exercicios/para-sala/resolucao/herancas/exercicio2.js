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
    constructor(name, address, brith_date){
        this.name = name;
        this.address = address;
        this.brith_date = brith_date;
    }
}

class Student extends Person{
    constructor(team, subjects){
        this.team = team;
        this.subjects = subjects;
    }
}
