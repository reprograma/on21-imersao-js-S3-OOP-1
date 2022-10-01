// Como criar uma "Classificação" da nossa entidade para modelar os nosso atributos

/**
 * class User {
 * }
 */

//Como atribuimos valores a nossa classe?

class User{
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName(){
        return `Seja bem vinda, ${this.name}`
    }

    getTamanhoNome(){
        this.name = tamanho
        return `O tamanho do nome é, ${this.name.lenght}`
    }
}

const user1 = new User("eliane", "elianevia@gmail.com", "senh@58")
const user2 = new User("'eliane', 'elianevia@gmail.com', 'senh@58'")
const user3 = new User("'eliane', 'elianevia@gmail.com', 'senh@58'")

console.log(user1.getName())
console.log(user1.getTamanhoNome())
console.log()