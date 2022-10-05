

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
    constructor(name,adress, birthDate) {
      this.name = name;
      this.adress = adress;
      this.birthDate = birthDate;
    }
  
}

class Student extends Person {
    constructor(team, subject) {
        this.team = team;
        this.subject = subject;

    }   
  
}

class Teacher extends Person {
    constructor(teams, class_schedules) {
        this.teams = teams;
        this.class_schedules = class_schedules;

    }   
  
}

