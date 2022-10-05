const Cliente = require("./Cliente");

class Conta extends Cliente {
    constructor(nome, cpf, email, senha, saldo, agencia) {
        super(nome, cpf, email, senha);
        this.saldo = saldo;
        //this.cliente = cliente; perguntar se é necessário
        this.agencia = agencia;
    }

    sacar(valorSaque) {
        const saqueTaxa = valorSaque + valorSaque * 0.015;
        if (saqueTaxa <= this.saldo) {
            this.saldo -= saqueTaxa;
            return this.saldo;
        } else {
            return "Não é possível fazer o saque";
        }
    }

    depositar(valorDeposito) {
        if (valorDeposito) {
            this.saldo += valorDeposito;
            return this.saldo;
        } else {
            return "Não é possível fazer depósito";
        }
    }
}

const conta = new Conta("Angelica", "468.755.444.44", "ang@gmail.com", "123", 100, "alguma agência")
