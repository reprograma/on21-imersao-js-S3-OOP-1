import { Conta } from './conta.js';
const createAccountEvelin = new Conta("Evelin", "12345678-99", "teste@email.com", "12234", "0001")


console.log(createAccountEvelin.depositar(200))

console.log(createAccountEvelin.sacar(100))
console.log("total: ", createAccountEvelin.saldo)