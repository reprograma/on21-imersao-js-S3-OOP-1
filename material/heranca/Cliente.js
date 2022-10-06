/*Escreva uma classe chamada Cliente com os seguintes atributos:

- nome;
- cpf;
- email;
- senha;

A classe Cliente deverá ter um método para retornar apenas o nome do cliente;*/

class Cliente{
    constructor(nome, cpf, email, senha){
        this.nome=nome;
        this.cpf=cpf
        this.email=email;
        this.senha=senha;
    }
     getName(){
        return this.name
    }
}

class Conta {
    constructor(saldo, cliente, agencia){
        this.saldo=saldo
        this.cliente=cliente
        this.agencia=agencia
    }
    depositar(value){
        this.saldo+=value
    }

    sacar(value){
        let taxa = (value * 1.5)/100;
        return this.saldo-=value+taxa
    }
} 

const conta1=new Conta;

conta1.saldo = 0;
conta1.cliente = "Camila";
conta1.agencia = 0001;

conta1.depositar(200); 
conta1.sacar(100);

console.log(conta1.saldo)


 

