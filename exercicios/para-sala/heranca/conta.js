const Cliente = require('./Cliente')

export class Conta extends Cliente {
    constructor(nome, cpf, email, senha, saldo, agencia) {
        super(nome, cpf, email, senha)
        this.saldo = saldo
        this.agencia = agencia
    }

    sacar(valorSaque) {
        let taxa = valorSaque * 0.015
        let saida = valorSaque + taxa;
        let novoSaldo = this.saldo -= saida
        return novoSaldo
    }

    depositar(valorDeposito) {
        
        return this.saldo += valorDeposito
    }
}

const novaConta = new Conta('Rosana', 123456, 'rosana@rosana.com', 15485, 380, 12)

console.log(novaConta)