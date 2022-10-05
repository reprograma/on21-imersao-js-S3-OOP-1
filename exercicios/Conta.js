// Em seguida, crie em outro arquivo um metódo Conta, que modela uma conta bancária de um Cliente com os 
// seguintes atributos:

// - saldo;
// - cliente;
// - agência;

// Crie os seguintes metódos com os seus requisitos: 

// - sacar() -> quando o cliente saca o dinheiro, ele terá que pagar uma taxa de 1, 5 sobre o valor sacado;
// - depositar () -> o cliente poderá depositar apenas R$ 700,00 por dia.

const Cliente = required('../Cliente')

class Conta extends Cliente() {
    constructor(saldo, cliente, agencia)
    this.saldo = saldo;
    this.cliente = cliente;
    this.agencia = agencia;
}

sacar(valorSaque) {
    const saque = this.saldo - valorSaque
    return saque
}

depositar(valorDeposito) {
    const novoSaldo = this.saldo + valorDeposito
    return novoSaldo
}

const novaConta = new Conta()