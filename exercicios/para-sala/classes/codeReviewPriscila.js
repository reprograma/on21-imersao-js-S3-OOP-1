
// review feito no codigo da Priscila

/*
Modifique a classe InvoiceItem, criada no exercício 2 (realizado em sala), 
conforme o diagrama de classe.
 */

class InvoiceItem {
    constructor(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }

    getId() {
        return this.id;
    }

    getDesc() {
        return this.desc;
    }

    getQty() {
        return this.qty;
    }

    setQty(qty) {
        this.qty = qty;
    }

    getUnitPrice() {
        return this.unitPrice;
    }

    getTotal() {
        return this.unitPrice != null && this.qty != null ? this.unitPrice * this.qty : 0;
    }

    getMensagemTotal() {
        return `Total do ${this.desc}: R$${this.getTotal()};`
    }

    toString() {
        return `InvoiceItem[ id = ${this.id}, desc = ${this.desc}, qty = ${this.qty}, unitPrice = ${this.unitPrice} ]`;
    }
}

const mousepad = new InvoiceItem(1, "Mousepad", 6, 3.5);
const teclado = new InvoiceItem(2, "Teclado mecânico", 12, 150);

console.log(mousepad.toString());
console.log(`${mousepad.getMensagemTotal()} \n`);


console.log(teclado.toString());
console.log(teclado.getMensagemTotal());
teclado.setQty(15);

console.log("\n ***** Alterando as propriedados do teclado **** \n");
console.log(teclado.toString());
console.log(teclado.getMensagemTotal() + "\n");