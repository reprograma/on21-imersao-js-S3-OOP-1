class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName(){
        return `Seja bem vinde, ${this.name}`; 
    }

    getTamanhoNome(){
        return `O tamanho do seu nome é ${this.name.length}`
    }
}

const user1 = new User("Evelin", "email@email.com", "senha123")
const user2 = new User("Diego", "diego@email.com", "980923")
const user3 = new User("Emily", "emily@email.com", "senha10997")

console.log(user1, user2, user3);
