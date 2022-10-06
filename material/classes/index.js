// como criar uma "classificação da nossa entidade para modelar os nossos atributos"
// class User {}

//Como atribuimos valores a nossa classe?

class User {

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName(){
    return `seja bem vinda, ${this.name}`
  }

  getNameLength(){
    return `o tamanho do seu primeiro nome é ${this.name.length}`
  }

}

const user1 = new User("Valenthina", "temudo.valenthina@gmail.com", "senha12#");
const user2 = new User("Valenthina", "temudo.valenthina@gmail.com", "senha12#");
const user3 = new User("Valenthina", "temudo.valenthina@gmail.com", "senha12#");

// const createUser = [{
//   name: "Valenthina",
// }]

// createUser.map( user => {
//   const createPerfil = new User(user)

//   return createPerfil
// })

// console.log(user1, user2, user3)
console.log(user1.getNameLength())