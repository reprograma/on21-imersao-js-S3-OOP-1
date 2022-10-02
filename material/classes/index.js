//po  como criar uma "classificação" para nossa entidade para modelar os nossos atributos.

class User {
    //modelando objeto
    // this vai entrar na nossa classe, pegar ps valores que recebeu e colocar nos atributos do constructor (referencia aos atributos do constructor)
    // this, referencia ao nosso atributo, o constructor precisa receber essa referencia pra 
    //O this.name é como se fosse uma variável dentro da classe, não é o mesmo do parâmetro 
    // this.name está parametrizando, no = name, está sendo atribuindo o que vem do constructor
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }
    getName() {
        return `Welcome, ${this.name}`
    }
   
    getNameLength() {
        return `${this.name}, your name's length is ${this.name.length}`
    }
}

// instanciando a classe User
const user1 = new User('Renata', 'renata@email.com', 'senha123')
const user2 = new User('Jéssica', 'jessica@email.com', 'senha123')
console.log(user1, user2)
console.log(user1.getName())
console.log(user1.getNameLength())
