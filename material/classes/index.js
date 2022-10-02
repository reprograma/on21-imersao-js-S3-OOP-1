//como criar uma classificação da nossa entidade para modelar os nossos artributos 

// class User {

// }

// Como construitmos valores a nossa classe? 

class User{
    constructor(name, email, password) {    
         this.name = name;
         this.email = email; 
         this.password = password
    }
    
    getName() { 
        return `Seja bem vinda, ${this.name}`; 
    }

    getNameLength(){
        return `Your name's length = ${this.name.length} `
    }
    
    getEmail() { 
        return this.email; 
    }
}

//instanciando uma classe para pegar um objeto
const user1 = new User("Jéssica", "teste@exemplo.com", "senha123");

console.log(user1.getName());