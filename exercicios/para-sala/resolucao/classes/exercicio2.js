/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

class InvoiceItem {
  constructor(id, description, quantity, price) {
    this.qualquer = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }
}

const new1 = new InvoiceItem(1, "Micro-ondas", 2, 500);

console.log(new1);
