class Cliente {
  constructor(nome, cpf, email, senha) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
  }

  getNome() {
    return `Seu nome é ${this.nome}`;
  }
}

module.exports = Cliente;
