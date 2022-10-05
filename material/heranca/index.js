/*Herança: Classes filhas que herdam atributos da classe mãe*/
export class Person {
  constructor(name, email, cel) {
    this.name = name;
    this.email = email;
    this.cel = cel;
  }

  getName() {
    return `Name: ${this.name}`;
  }
}

//import { Person } from '..'
export class Developer extends Person {
  constructor(name, email, cel, skills) {
    super(name, email, cel);
    this.skills = skills;
  }
}

const dev1 = new Developer("Dani", "dani@email.com", "(11)15263425", [
  "html",
  "css",
  "javascript",
]);

console.log(dev1);
console.log(dev1.getName());
