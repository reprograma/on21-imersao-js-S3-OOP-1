const {Cliente} = require ('./Cliente.js')

class ContaBancaria extends Cliente{
    constructor(saldo, cliente, agencia){
        super(nome, cpf, email, senha)

        this.saldo = saldo;
        this.cliente = cliente;
        this.agencia = agencia;
    }
}