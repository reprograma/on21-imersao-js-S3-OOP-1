/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */


class InvoiceItem {
  constructor(id, description, quantity, unitPrice){
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }

  getId() {
    return this.id;
  }

  // updateDescription(description){
  //   this.description = description;
  //   return `a nova descrição do produto é: ${description}`;
  // }

  getDescription() {
    return this.description;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  getUnitPrice() {
    return this.unitPrice;
  }

  setUnitPrice(unitPrice) {
    this.unitPrice = unitPrice;
  }

  getTotal() {
    return this.quantity * this.unitPrice;
  }

  toString() {
    return `Id: ${this.id}, Description: ${this.description}, Quantity: ${this.quantity}, Price: ${this.unitPrice}`
  }
  
}

const newProduct = new InvoiceItem(12, "Chocolate", 15, 4);
console.log(newProduct);