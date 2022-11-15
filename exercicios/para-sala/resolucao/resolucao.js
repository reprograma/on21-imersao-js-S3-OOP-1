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
  
   getValue = (value) => {
      let saldo = this.saldo;
      const TAX_ = 1.5;
      const CALCULUS_RATE = value - (value * TAX_) / 100;
      if (saldo >= value) {
        saldo -= value;
  
        console.log(
          `Você sacou: ${Number(CALCULUS_RATE).toFixed(2)}, restando: ${saldo}`
        );
        return (this.saldo = saldo);
      }
      return console.log(`Seu saldo é: ${saldo}, deposite para poder sacar.`);
    };
  
    setDeposit = (value) => (this.saldo += value);
  }
  
  const conta1 = new Conta("anne", 122333356, "anne@gmail", "****", 10, 1025);
  
  console.log(conta1.setDeposit(15));
  conta1.getValue(25);
  console.log(conta1.saldo);