export class Cliente{
    constructor(nome, cpf, email, senha){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    getName(){
        return `Olá ${this.nome}`;
    }
}