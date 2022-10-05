import { Conta } from "./Conta.js";

const conta1 = new Conta("Fer", "85174936-10", "001");
console.log(conta1.getNome());
console.log(conta1.depositar(100));
console.log(conta1.sacar(20));
