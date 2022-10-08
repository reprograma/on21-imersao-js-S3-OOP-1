export class Cliente {
    constructor(name, cpf, email, senha) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    clientName() {
        return this.name
    }
}