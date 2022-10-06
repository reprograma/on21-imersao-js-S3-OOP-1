// class User{

// }

class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getName(){
        return `Seja em vindo, ${this.name}`
    }

    getNameLength(){
        return `${this.name} o tamanho do seu primeiro nome é ${this.name.length}`
    }
    
}

const user1 = new User("Anna Maria", "amrodrigues1307@gmail.com", "senha123");

//console.log(user1)

console.log(user1.getName())
console.log(user1.getNameLength())
