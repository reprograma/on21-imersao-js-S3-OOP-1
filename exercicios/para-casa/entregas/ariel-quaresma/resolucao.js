class InvoiceItem{
    constructor(id, description, quantity, unitPrice){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    getId(){
        return this.id;
    }

    getDescription(){
        return this.description;
    }

    getQuantity(){
        return this.quantity;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }

    getUnitPrice(){
        return this.unitPrice;
    }

    setUnitPrice(unitPrice){
        this.unitPrice = unitPrice;
    }

    getTotal(){
        return this.unitPrice*this.quantity;
    }

    toString(){
        return `InvoiceItem\n[id = ${this.getId()},\n descrição = ${this.getDescription()},\n quantidade = ${this.getQuantity()},\n preço unitário= ${this.getUnitPrice()}]`
    }


}