class Cliente{
    constructor(name, cpf, email,password){
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.password = password;
    }

    getNome(){
        return `Olá ${this.name}`
    }
}

module.exports = Cliente;