

export class Cliente {
    constutor ( nome, cpf, email, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha
    }

    getNome() {
        return `O nome do Cliente é ${this.nome}`
    }
}