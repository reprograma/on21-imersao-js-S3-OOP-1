const { Console } = require("console");

class InvoiceItem {
    constructor(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }

    getId() {
        return this.id
    }

    getDesc() {
        return this.desc
    }

    getQty() {
        return this.qty
    }

    setQty(newQty) {
        return this.qty = newQty
    }

    getUnitPrice() {
        return this.unitPrice
    }

    setUnitPrice(newPrice) {
        return this.unitPrice = newPrice
    }

    getTotal() {
        const Total = this.unitPrice * this.qty
        return Total
    }

    toString() {

        return `InvoiceItem[id = ${this.id}, descrição = ${this.desc}, quantidade = ${this.qty}, Valor unitário = ${this.unitPrice} ]`
    }

    toString(InvoiceItem) {

        return InvoiceItem
    }
}


const invoiceItemSetembro = new InvoiceItem(1012, "arroz", 10, 2)

console.log(invoiceItemSetembro.getId())
console.log(invoiceItemSetembro.getDesc())
console.log(invoiceItemSetembro.getQty())
console.log(invoiceItemSetembro.setQty(15))
console.log(invoiceItemSetembro.getUnitPrice())
console.log(invoiceItemSetembro.setUnitPrice(4))
console.log(invoiceItemSetembro.getTotal())
console.log(invoiceItemSetembro.toString())
console.log(invoiceItemSetembro.toString2(invoiceItemSetembro))

module.exports = {
    InvoiceItem
}


