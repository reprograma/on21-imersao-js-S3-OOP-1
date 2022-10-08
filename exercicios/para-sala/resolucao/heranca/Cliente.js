/*Escreva uma classe chamada Cliente com os seguintes atributos:

- nome;
- cpf;
- email;
- senha;

A classe Cliente deverá ter um método para retornar apenas o nome do cliente;


*/


class Cliente {
    constructor(nome, cpf, email, senha) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.senha = senha
    }

    getNome(){
        return this.nome
    }
}

module.exports = Cliente