//exercicios feitos pela profa aqui

//como criar uma "classificação" da nossa entidade para modelar os nossos atributos. 
//como criar uma "classificação" da nossa entidade para modelar os nossos atributos.

/* class User {
} */

//Como atribuimos valores a nossa classe?

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

    getName(){
        return `Seja bem vinde, ${this.name}`
    }

    getNameLength(){
        return `${this.name} o tamanho do seu primeiro nome é ${this.name.length}`
    }
  getName() {
    return `Seja bem vinde, ${this.name}`;
  }

  getNameLength() {
    return `${this.name} o tamanho do seu primeiro nome é ${this.name.length}`;
  }
}
