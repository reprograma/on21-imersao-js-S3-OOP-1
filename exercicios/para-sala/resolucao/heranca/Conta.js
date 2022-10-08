// Em seguida, crie em outro arquivo um metódo Conta, que modela uma conta bancária de um Cliente com os 
// seguintes atributos:

import Cliente from "./Cliente";

// - saldo;
// - cliente;
// - agência;

// Crie os seguintes metódos com os seus requisitos: 

// - sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado;
// - depositar () -> o cliente poderá depositar apenas R$ 700,00 por dia.



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
