import { Client } from "./CustormerBank.js";

export class Account extends Client {
  constructor(name, cpf, email, password, balance, agency) {
    super(name, cpf, email, password);

    this.balance = balance;
    this.agency = agency;
  }

  sacar(value) {
    let taxa = value * 0.015;
    let total = this.balance - taxa;
    return `Saque ${value}\nTaxa ${taxa}\n\nSaldo ${total}`;
  }
}
