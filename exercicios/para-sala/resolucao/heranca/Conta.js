/*Escreva uma classe chamada Cliente com os seguintes atributos:

- nome;
- cpf;
- email;
- senha;

A classe Cliente deverá ter um método para retornar apenas o nome do cliente;

Em seguida, crie em outro arquivo um metódo Conta, que modela uma conta bancária de um Cliente com os 
seguintes atributos:

- saldo;
- cliente;
- agência;

Crie os seguintes metódos com os seus requisitos: 

- sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado;
- depositar () -> o cliente poderá depositar apenas R$ 700,00 por dia.

*/

//import { Cliente } from './Cliente';
const Cliente = require('./Cliente.js');

class Conta extends Cliente{
    constructor(nome,cpf,email,senha,saldo,agencia){
        super(nome,cpf,email,senha)
        this.saldo = saldo;
        this.agencia= agencia;
        this.saldo=0;
    }

    depositar(valorDeposito){
        console.log('----------');
        console.log('----- Deposito -----');
        console.log('Saldo inicial:', this.saldo);
        console.log('Valor depósito:', valorDeposito);
        return `Saldo após deposito:${this.saldo +=valorDeposito}`;
        
    }

    sacar(valorSaque){
        console.log('----------');
        console.log('----- Saque -----');
        console.log('Saldo inicial:', this.saldo);
        console.log('Valor do saque:', valorSaque);
        const taxa = valorSaque*0.015;
        console.log('Valor da taxa de saque:', taxa);
        
        return `Saldo após o saque:${this.saldo -=valorSaque+taxa}`;
 }
}
const novaConta = new Conta('Anna', '123456789', 'teste@gmail.com', '2345', 0, 13)
console.log(novaConta)
console.log(novaConta.GetNome())
console.log(novaConta.depositar(200))
console.log(novaConta.sacar(100))

