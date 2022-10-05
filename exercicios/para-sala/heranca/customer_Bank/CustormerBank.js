/*Escreva uma classe chamada Cliente com os seguintes atributos: - nome; - cpf; - email; - senha; A classe Cliente deverá ter um método para retornar apenas o nome do cliente; Em seguida, crie em outro arquivo um metódo Conta, que modela uma conta bancária de um Cliente com os seguintes atributos: - saldo; - cliente; - agência; Crie os seguintes metódos com os seus requisitos: - sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado; - depositar () -> o cliente poderá depositar apenas R$ 700,00 por dia. */ 

export class Client {
    constructor(name, cpf, email, password){
        this.name = name
        this.cpf = cpf
        this.email = email
        this.password = password
    }

    getName(){
        return this.name
    }
}

