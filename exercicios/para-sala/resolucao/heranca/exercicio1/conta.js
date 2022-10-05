import { Cliente } from './cliente.js';

export class Conta extends Cliente{
    constructor(nome, cpf, email, senha, saldo, agencia){
        super(nome, cpf,email, senha)
        
        this.saldo = 0;
        this.agencia = agencia;
    }


    sacar(valor){
        let taxa = valor * 0.015;
        let saida = valor + taxa;
        
        return this.saldo -= saida;
    }

    depositar(valor){
        return this.saldo += valor;
    }
}
