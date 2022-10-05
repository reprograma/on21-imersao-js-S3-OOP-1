//como criar uma "classificação" da nossa entidade para modelar os nossos atributos

/*class User{

}*/

//Como atribuimos valores a nossa classe?

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName(){
        return `Seja bem-vindo, ${this.name}`;
    }
}

const user1 = new User("Jéssica", "oskojedd@gmail.com", "senha12#");
const user2 = new User("Jéssica", "oskojedd@gmail.com", "senha12#");
const user3 = new User("Jéssica", "oskojedd@gmail.com", "senha12#");

console.log(user1, user2, user3);
console.log(user1.getName());