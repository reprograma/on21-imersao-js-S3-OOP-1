const { Cliente } = require('./exercicio1/Cliente.js')

class Conta extends Cliente {
  constructor(nome, cpf, email, senha, saldo, agencia){
    super(nome, cpf, email, senha);

    this.saldo = saldo;
    this.agencia = agencia;
    
  }

  sacar(valor){
    const saque = (valor + (valor * 1.5))

    const saldoAtual = this.saldo - saque

    return `saque realizado: ${saque} / saldo atual: ${saldoAtual}`
  }

  depositar(valor) {
    const saldoAtual = this.saldo + valor

    return `saldo atual: ${saldoAtual}`
  }
}

module.exports = Conta;