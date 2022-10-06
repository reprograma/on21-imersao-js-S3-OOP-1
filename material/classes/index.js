class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName(){
        return  `Seja bem vinda, ${this.name}`
    }

    getNameLength(){
        return `${this.name}`
    }


}

//criando um objeto 
//new serve para instanciar uma classe = Seria como criar uma cópia de uma classe existente.
const user1 = new User("Maria", "aparecidasousanunes@gmail.com", "senha1234")

console.log(user1)