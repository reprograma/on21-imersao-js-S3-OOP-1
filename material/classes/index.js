/*
==> como criar uma "classificação da nodda entidade para modelar os nossos atributos"

class User {} */


//como atribuir valores a nossa classe
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName() {
        return `seja bem vinde, ${this.name}`
    }

    getTamanhoName(tamanho) {
        return ` ${this.name} seu nome tem ${this.name.length} letras`
    }
}

const user1 =  new User('Bárbara','barbara@gmail.com,', '123#');
const user2 =  new User('Maurício','mau@gmail.com,', '123#');
const user3 =  new User('Ana','anaa@gmail.com,', '123#');
console.log(user1, "\n", user2, "\n", user3);
console.log(user1.getTamanhoName())

/**
 class Celular {
     constructor(name, model, type)
 }
 valores que atrubuem a partir dos atributos
parametros são o que recebemos dentro do constructor através de uma informação ()atributo) recebido do constructor
 THIS => faz a referência ao atributo, recebe o valor do próprio elemento, para atribuir qualquer tipo de valor (contexto)
 entra na classe, pega os valores e adiciona no atributo do constructor, fazendo uma referênci, para a classe conseguir acessar os atributos do objeto em questão 
 * 
 */