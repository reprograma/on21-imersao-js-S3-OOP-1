/* Escreva uma classe chamada InvoiceItem, que modela um 
item de uma compra, com id, description, quantity e price. */

class InvoiceItem {
    constructor(id, item, description, price, quantity) {
        this.id = id;
        this.item = item;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    getId() {
        return this.id;
    }

    getItem() {
        return this.item;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }

    getTotal() {
        return this.quantity * this.price;
    }

    updateQuantity(quantity) {
        this.quantity = quantity;
    }
}

const invoiceItem1 = new InvoiceItem(
    1,
    1,
    "Coffee",
    30,
    6
);

console.log(item.getId());
console.log(invoiceItem1());
console.log(invoiceItem1.getTotal());
