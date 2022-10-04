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

    getDesc() {
        return this.description;
    }
    getQty() {
        return this.quantity;
    }

    setQty(qty) {
        this.quantity = quantity;
    }

    getUnitPrice() {
        return this.unitPrice;
    }

}

    
