import { Conta } from './Conta.js';

const corrente = new Conta("Eliane", "12345678965", "eliane@email.com", "12345", 100, "5050")

console.log(corrente.clientName())
console.log(corrente.getSaldo())
console.log(corrente.sacar(20))
console.log(corrente.deposito(50))
console.log(corrente.sacar(20))
console.log(corrente.getSaldo())