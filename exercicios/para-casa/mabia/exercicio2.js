//escreva uma classe chamada invoiceItem,
//que modela um item de uma compra,
//com id, description, quantity e price.

//classes
//herança
//encapsulamento
//abstração

class invoiceItem {
  constructor(id, description, quantity, price) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }

  getId(id) {
    return this.id;
  }
}
