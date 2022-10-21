// Orientação Objeto para auxiliar em questões da vida real

// Entidade = celular
// Atributos = cor, modelo etc 
// Muitos dados variaveis do celular nao seriam legais colocar sempre em variaveis, objeto faz isso melh0r
// Classes = classificação
// Atributos = caracteristicas / ficam apenas nos parametros do constructor()
// Estancia = chamar para utilizar / criando um objeto de acordo com uma classe
// O map é um iterador que retorna um array de dados 
// Pensando numa molde, vc coloca o gesso dentro desse molde e o objeto vai sair com as caracteristicas daquele molde 

// No contructor os atributos não se coloca o tipo de cada um?  Só usa-se com prootypes(tipo typescript), no javascript ainda nao

// Como criar uma "classificação" da nossa entidade para modelar os nossos atributos
// class User {

// }

// // Como atribuimos valores a nossa classe?

class User{ // isso ainda nao é um objeto
    constructor(name, email, password) { // chamada para inserir atributos
        this.name = name; //this é um contexto fazendo referencia aos atributos do constructor / sendo possivek criar objetos com os parametros da classe
        this.email = email;
        this.password = password;
    }

    getName(){ // criando um metodo - parecido com os outros metodos qualquer
        return `Seja bem vinde, ${this.name}` // this intermedia as informações
    }

    getTamanhoNome(){
        return `Olá ${this.name} tamanho do seu primeiro nome é ${this.name.length}.`
    }
}

const user1 = new User ('Xenia Barreto', 'email@email.com', "123456") // new é estanciar, ou seja pegando uma classe para criar um objeto - estancia = chamar pars utilizar
const user2 = new User ('Jessica Osko', 'email@email.com', "123456") 
const user3 = new User ('Mabiá Priscila', 'email@email.com', "123456") 

console.log(user1, user2, user3)
console.log(user1.getName()); //para pegar o nome quando eu chamar
console.log(user2.getTamanhoNome());