/*Escreva uma classe chamada Cliente com os seguintes atributos: 
- nome; - cpf; - email; - senha; A classe Cliente deverá ter um método
 para retornar apenas o nome do cliente; Em seguida, crie em outro arquivo chamado Conta,
  que modela uma conta bancária de um Cliente com os seguintes atributos: - saldo; - cliente; -
   agência; Crie os seguintes metódos com os seus requisitos: - sacar() -> quando o cliente 
   saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado; - depositar
    () -> o cliente poder */

class Cliente {
  constructor(nome, cpf, email, senha) {
    this.nome = nome;
    this.cof = cpf;
    this.email = email;
    this.senha = senha;
  }

  getName = () => this.nome;
}

class Conta extends Cliente {
  constructor(nome, cpf, email, senha, saldo, agencia) {
    super(nome, cpf, email, senha);
    this.saldo = saldo;
    this.cliente = Cliente;
    this.agencia = agencia;
  }
  sacar = (valorDeposito) => {
    if (true) {
      this.saldo - valorDeposito;
    }
  };
}
