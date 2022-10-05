class Cliente() {
    constructor(nome, email, cpf, senha)
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.senha = senha;
}

getNome() {
    return this.nome;
}

module.export = Cliente