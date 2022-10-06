// Criar uma "classificação" da nossa entidade para modelar os nossos atributos.
class Users {};

//Como atribuímos valores a nossa classe?
class User{
    constructor(name, email, password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
 
    //Método get - retorna o valor do parâmetro do objeto chamado
    getName(){
        return `Seja bem vinde ${this.name}`
    }

    //Método length
    getNameLength(){
        return `${this.name}, o tamanho do teu primeiro nome é ${this.name.length}`
    }
}
//Classificamos aquele objeto, criamos o modelo daquela entidade.
//O this indica o contexto, referencia para que a classe consiga criar o objeto com aquele valor. Ex.:
//Ao receber algum valor de nome, criar o objeto e inserir esse valor à propriedade nome. 

//Chamamos de instanciar o objeto a criação do objeto em si
const user1 = new User("Caroline", "caroline@gmail.com", "123456");
const user2 = new User("Gustavo", "gustavo@gmail.com", "1234567");
const user3 = new User("Prana", "praninha@gmail.com", "1234567");

//Herança: Classes "filhas" que herdam atributos da classe "mãe" 

class Person {
    constructor(name, email, cel){
        this.name = name;
        this.email = email;
        this.cel = cel;
    }
}

class Developer extends Person {
    constructor(name, email, cel, skills){
        super(name, email, cel);

        this.skills = skills;
    }
}

const createPerfilDani = new Developer("Danielle", "dani@email.com", "(11)9999-2212", ["html", "css", "Javascript"])

console.log(createPerfilDani)
