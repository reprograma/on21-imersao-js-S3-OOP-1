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
      this.saldo = this.saldo - saqueTaxa;
      return this.saldo;
    } else {
      return "Não é possível fazer o saque";
    }
  }

  depositar(valorDeposito) {
    if (valorDeposito) {
      this.saldo = this.saldo + valorDeposito;
      return this.saldo;
    } else {
      return "Não é possível fazer depósito";
    }
  }
}

const Claudia = new Conta("Cláudia", 123, "teste", 123, 100, "Bradesco");
Claudia.sacar(10);
console.log(Claudia);
