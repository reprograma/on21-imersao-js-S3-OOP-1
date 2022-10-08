/**
 * Em seguida, crie em outro arquivo um metódo Conta, que modela uma conta bancária de um Cliente com os 
seguintes atributos:

- saldo;
- cliente;
- agência;
 */

import { Cliente } from "./Cliente.js";

export class Conta extends Cliente {
    constructor(name, cpf, email, senha, saldo, agencia){
        super(name, cpf, email, senha)

        this.saldo = 0;
        this.agencia = agencia;
    }

    getSaldo(){
        return this.saldo
    }

    sacar(valor) {
        const saque = (valor + (valor * 0.015))

        if(this.saldo < saque) {
            return "Saldo insuficiente"
        }

        const saldoAtual = this.saldo - saque
        return `Seu saque será de ${saque} e ficará com um saldo de ${saldoAtual}`
    }

    deposito(valor){
        const newSaldo = this.saldo + valor
        return newSaldo 
    }

}

