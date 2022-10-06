//como criar uma "classificação" da nossa entidade para modelar os nossos atributos. 

/* class User {

} */

//Como atribuimos valores a nossa classe?

class User{
    constructor(name, email, password){
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

}

const objLiteralUser1 = {
    name: "Jessica"
}

const objLiteralUser2 = {
    name: "Bárbara"
}

const objLiteralUser3 = {
    name: "Mabiá"
}
const user1 = new User("Jéssica", "oskojess@gmail.com", "senha12#");
const user2 = new User("Jéssica", "oskojess@gmail.com", "senha12#");
const user3 = new User("Jéssica", "oskojess@gmail.com", "senha12#");

console.log(user1.getNameLength())


