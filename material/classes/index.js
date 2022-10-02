class User {
    constructor(name, email, password){
        this.name   = name
        this.email = email
        this.password = password
    }

    getName(){
        return `Seja bem vinda ${ this.name}`
    }

    getNameLength(){
        return `Your name's length = ${this.name.length} `
      }
    
}

const newUser1 = new User ('Gabriela', 'gabis@gmail.com', 'senha123')
const newUser2 = new User ('Gabriel', 'gabriel@gmail.com', 'senha124')
const newUser3 = new User ('Gael', 'gael@gmail.com', 'senha125')

// console.log(newUser1, newUser2, newUser3)

console.log(newUser1.getNameLength())