/*como criar uma "classificação" da nossa entidade para modelar os nossos atributos.
classe vem de classificação 
class User {}*/

// como atribuimos valores a nossa classe?
class User {
  constructor(name, email, password) {
    /* função que toda classe pode ter para passar atributos para a minha classe
     modelar minha entidade user
     this serve para contexto, referencia para os atributos do constructor */
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName() {
    return `Seja bem vinde, ${this.name}`;
  }

  getNameLength() {
    return `${this.name}, o tamanho do seu primeiro nome é ${this.name.length}`;
  }
}

const user1 = new User("Cláudia", "claudiamary.santos@gmail.com", "senha12#");
console.log(user1.getName());
console.log(user1.getNameLength());
/* const createUser = [{
    name: "Jéssica",
    email: "teste@teste.com",
    senha: "1234"
}, {
    name: "Mabiá",
    email: "mabia@teste.com",
    senha: "1234"
}]

createUser.map(user => {
    
})*/
