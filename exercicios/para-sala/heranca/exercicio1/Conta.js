const Cliente = require("./Cliente");
class Conta extends Cliente {
  constructor(nome, cpf, email, senha, saldo, agencia) {
    super(nome, cpf, email, senha);
    this.saldo = saldo;
    this.agencia = agencia;
  }

  sacar(valorSaque) {
    const saqueMaisTaxa = valorSaque + valorSaque * 0.015;
    if (saqueMaisTaxa <= this.saldo) {
      this.saldo -= saqueMaisTaxa;
      return `Valor sacado de ${saqueMaisTaxa}, seu novo saldo é de R$${this.saldo}`;
    } else {
      return "Não é possível fazer o saque";
    }
  }

  depositar(valorDeposito) {
    if (valorDeposito) {
      this.saldo += valorDeposito;
      return `Valor depositado de ${valorDeposito}, seu novo saldo é de R$${this.saldo}`;
    } else {
      return "Não é possível fazer depósito";
    }
  }
}

const Claudia = new Conta("Cláudia", 123, "teste", 123, 100, "Bradesco");

console.log(Claudia.sacar(10));
console.log(Claudia.depositar(11));
console.log(Claudia.getNome());
