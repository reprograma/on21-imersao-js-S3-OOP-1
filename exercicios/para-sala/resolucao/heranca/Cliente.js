class Cliente {
    constructor(nome, cpf , email, senha)
    {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha; 
    }

    GetNome(){
        return this.nome;
    }
}


module.exports = Cliente ;