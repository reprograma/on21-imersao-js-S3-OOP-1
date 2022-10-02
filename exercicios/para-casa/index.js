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
}

    