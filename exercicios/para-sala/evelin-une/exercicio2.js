/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

class InvoiceItem {
    constructor(id, description, quantity, price){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;

    }

    getId(){
        return this.id;
    }

    updateDescription(){
        this.description = this.description
        return `a nova descrição do produto é ${this.description}`
    }

}

const newProduct = new InvoiceItem(1, 'all star n35', 10, 100.00);
console.log(newProduct.updateDescription('nova descrição'));
