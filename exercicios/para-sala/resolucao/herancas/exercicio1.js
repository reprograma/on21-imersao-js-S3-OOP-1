/*Escreva uma classe chamada Cliente com os seguintes atributos:

- nome;
- cpf;
- email;
- senha;

A classe Cliente deverá ter um método para retornar apenas o nome do cliente;

Em seguida, crie em outro arquivo chamado Conta, que modela uma conta bancária de um Cliente com os 
seguintes atributos:

- saldo;
- cliente;
- agência;

Crie os seguintes metódos com os seus requisitos: 

- sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado;
- depositar () -> o cliente poderá sacar a quantia que quiser;

*/

class Client{
    constructor(nome, cpf, email, senha){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.senha = senha
    }

    getNome(){
        return `Seu nome é ${this.nome}`
    }
}


class CheckingAccount extends Client {
    constructor(name, cpf, email, password, agency){
        //super é uma pesquisa de propriedades ref. a classe herdada.
        super(name, cpf, email, password);

        this.balance = 0;
        this.agency = agency;
    }

    depositar(value){
        return this.balance += value;
    }

    sacar(value){
        let taxation = value * 0.015
        return this.balance -= taxation;
    }

}

const createAccountJess = new CheckingAccount("Jéssica", "23321232-99", "oskojess@gmail.com", "27368723", "0001")


console.log(createAccountJess.depositar(200))

console.log(createAccountJess.sacar(100))
console.log("total: ", createAccountJess.balance)


