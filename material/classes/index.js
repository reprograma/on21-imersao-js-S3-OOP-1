//  POO cria entidades

// Class - classifica a entidade a ser inserida e depois será um objeto

// como criar uma classificação da nossa entidade para modelar os nosso atributos


//  atributos são características atriuidas as classes
//  como atribuimos valorres a noss classe?
//  constructor recebe os atributos
//  this contextualiza um  - faz uma referencia ao atributos do constructor 
// é como se fosse uma variável dentro da classe, não é o mesmo do parâmetro
//  a classe é um molde
class User {
    constructor(nome, email, password){
        this.name = nome;
        this.email = email;
        this.password = password;
    }
    //  método é a ação que eu vou fazer com os dados que eu tenho

    getName(){
        return `Seja bem vinda, ${this.name}`
    }

    getTamanhoNome(){
        
        return `O tamanho do seu primeiro nome é , ${this.name.length}`
    }

    // getTamanhoNome(){
    //     const tamanho = this.name
    //     return `O tamanho do nome é ${tamanho.length}`
    // }
}


// instanciar/ chmar  a classe para criar o objeto


const user1 = new User("Jaqueline","barrildobrado@gmail.com", "senha13");
const user2 = new User("Jaqueline","barrildobrado@gmail.com", "senha13");
const user3 = new User("Jaqueline","barrildobrado@gmail.com", "senha13");

console.log(user1,user2,user3)

console.log(user1.getName())

console.log(user1.getTamanhoNome())

// Get retorna o atributo

//  usa o this como paranetri