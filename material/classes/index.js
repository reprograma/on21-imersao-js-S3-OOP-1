/* //criar uma classificação da nossa entidade para modelar os nossos atributos
class User {

}
*/

//como atribuimos valores a classe?

class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName(){
        return 'Seja bem vinda, ${this.name}'
    }

    getTNameLenght(){
        return 'tamanho do seu prmeiro nome:' ${this.name.lenght}

    }

}

const user1 = new User("Maya", "maya@gmail.com", "Senha1@");
const user2 = new User("Alice", "alice@gmail.com", "Senha2@");
const user3 = new User("Mariana", "mariana@gmail.com", "Senha3@");

//console.log(user1, user2, user3)

console.log(user1.getNameLenght())