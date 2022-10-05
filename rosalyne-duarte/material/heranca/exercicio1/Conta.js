import { Cliente } from './Cliente'

export class Conta extends Cliente {
    constructor(nome, cpf, email, senha, saldo, agencia) {
        super(nome, cpf, email, senha);

        this.saldo = 0;
        this.agencia = agencia;
    }

    depositar(value) {
        return this.saldo += value
    }


    sacar(value) {
        const taxa = value * 0.15;
        const saida = value + taxa
        const novoSaldo = this.saldo - saida
       // this.saldo =- taxa;

        return `Saque ${value}\n Taxa ${taxa} \n Saldo ${novoSaldo}`
    }

}

const createContaNicas = new checkingConta("Nicolas", "123.457.357-20", "nicolas@gmail.com", "123456", "4741")

console.log(createContaNicas.depositar(200))
console.log(createContaNicas.sacar(100))