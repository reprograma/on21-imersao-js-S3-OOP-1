/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price.
*/

class InvoiceItem {
    constructor(item, id, description, quantity, price) {
        this.item = item;
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    getItem() {
        return this.item;
    }

    getId() {
        return this.id;
    }

    getDescription() {
        return this.description;
    }

    getQuantity() {
        return this.quantity;
    }

    getPrice() {
        return this.price;
    }

    getTotal() {
        return this.price * this.quantity;
    }

    updateQuantity(quantity) {
        this.quantity = quantity;
    }
}

const item1 = new InvoiceItem(1, 1, "Caneta", 10, 2.5);
console.log(item1);
console.log(item1.getTotal());
