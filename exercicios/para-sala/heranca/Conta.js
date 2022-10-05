const Cliente = require("./Cliente");


class Conta extends Cliente {
  constructor(nome, cpf, email, senha, saldo, agencia) {
    // é uma pesquisa de propriedades ref. a classe herdada.
    super(nome, cpf, email, senha);

    this.saldo = saldo;
    this.agencia = agencia;
  }

  depositar(valorDeposito) {
        if (valorDeposito) {
         this.saldo = this.saldo + valorDeposito;
         return this.saldo;
        } else {
         return "Não é possível fazer depósito";
        }
    }

  sacar(valorSaque) {
        const saqueTaxa = valorSaque * 0.015;
            if (saqueTaxa <= this.saldo) {
            this.saldo = this.saldo - saqueTaxa;
            return this.saldo;
        } else {
            return "Não é possível fazer o saque";
        }
    }

}

const Claudia = new Conta("Cláudia", 123, "teste", 123, 100, "Bradesco");
Claudia.sacar(10);
console.log(Claudia);


