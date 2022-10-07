class InvoiceItem{
    constructor(id, description, quantity, price){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
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

    getPrice= () => { return this.unitPrice }; 
    setPrice(newPrice){ return this.price = newPrice }

    getString() {
        return `
        ID: ${this.getId()}\n
        Description: ${this.getDescription()}\n
        Quantity: ${this.getQuantity()}\n
        Unit: ${this.getUnit()}`
    }

    getTotal() {
        return `
        ${this.quantity * this.price}`
    }
};
