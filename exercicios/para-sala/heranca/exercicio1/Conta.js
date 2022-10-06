const Cliente = require("./Cliente.js");

class Conta extends Cliente {
  constructor(name, cpf, email, password, agency, balance) {
    super(name, cpf, email, password);
    this.balance = 0;
    this.agency = agency;
  }
  depositar(value) {
    return (this.balance += value);
  }

  sacar(value) {
    const taxa = value * 0.015;
    const saida = value + taxa;
    const novoSaldo = this.balance - saida;

    return novoSaldo;
  }
}

const criarConta = new Conta(
  "Jéssica",
  "000000",
  "jessica@gmail.com",
  "44444",
  "0002"
);

console.log(criarConta);
console.log(criarConta.depositar(200));

console.log(criarConta.sacar(100));
console.log(criarConta.balance);

module.exports = Conta;
