/* Em seguida, crie em outro arquivo chamado Conta, que modela uma conta bancária de um Cliente com os 
seguintes atributos:

- saldo;
- cliente;
- agência;

Crie os seguintes metódos com os seus requisitos: 

- sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 15% sobre o valor sacado;
- depositar () -> o cliente poderá depositar a quantia que quiser; */

import { Cliente } from "./Cliente.js";

export class Conta extends Cliente {
  constructor(nome, cpf, agencia) {
    super(nome, cpf);
    this.saldo = 0;
    this.agencia = agencia;
  }

  sacar(saque) {
    const taxa = this.saldo * (1.5 / 100);
    const novoSaldo = this.saldo - taxa - saque;
    this.saldo = novoSaldo;
    return `Qantidade sacada: $${saque} | Taxa: $${taxa} | Novo saldo: $${this.saldo}`;
  }

  depositar(deposito) {
    const novoSaldo = this.saldo + deposito;
    this.saldo = novoSaldo;
    return `Quantidade depositada: $${deposito} | Novo saldo: $${this.saldo}`;
  }
}
