/*
Modifique a classe InvoiceItem, criada no exercício 2 (realizado em sala), 
conforme o diagrama de classe.
 */

class InvoiceItem {
    constructor(id, description, quantity, price) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    getId() {
        return this.id;
    }

    updateDescription() {
        return this.description;
    }

    getQtuantity() {
        return this.quantity;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    getUnitPrice() {
        return this.unitPrice;
    }

    getTotal() {
        return this.unitPrice != null && this.quantity != null ? this.unitPrice * this.quantity : 0;
    }

    getMensagemTotal() {
        return `Total do ${this.description}: R$${this.getTotal()};`
    }

    toString() {
        return `InvoiceItem[ id = ${this.id}, description = ${this.description}, quantity = ${this.quantitty}, unitPrice = ${this.unitPrice} ]`;
    }
}

const Computador = new InvoiceItem(1, "Computador", 50, 100);
console.log(newProduct.updateDescription("Computador LG All in One Quad Core 4GB"));

const newProduct = new InvoiceItem(2, "Notebook", 50, 100);
console.log(newProduct.updateDescription("Notebook Samsung Book Intel Celeron 4GB 500GB"));

console.log(monitor.toString());
console.log(`${monitor.getMensagemTotal()} \n`);
monitor.setQuantity(80);



    
