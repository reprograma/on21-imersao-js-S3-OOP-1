/*Em seguida, crie uma classe Student que terá as informações de Person com os atributos adicionais:

- Turma;
- Temas estudados;
*/

import { Person } from "./Person.js";

export class Student extends Person {
  constructor(nome, endereco, dt_nascimento, turma, temas) {
    super(nome, endereco, dt_nascimento);
    this.turma = turma;
    this.temas = temas;
  }
}
