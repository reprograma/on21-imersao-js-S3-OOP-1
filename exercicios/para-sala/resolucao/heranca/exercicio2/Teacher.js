/*Para finalizar, crie uma classe Teacher que também terá as informações de Person com os atributos:

- Grade;
- Turmas; */

import { Person } from "./Person.js";

export class Teacher extends Person {
  constructor(nome, endereco, dt_nascimento, grade, turmas) {
    super(nome, endereco, dt_nascimento);
    this.grade = grade;
    this.turmas = turmas;
  }
}
