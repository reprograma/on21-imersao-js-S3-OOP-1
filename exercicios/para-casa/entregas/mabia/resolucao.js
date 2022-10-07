class InvoiceItem {
  constructor(id, description, quantity, price) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }
  getID() {
    return this.id;
  }
  getDesc() {
    return this.description;
  }
  getQuantity() {
    return this.quantity;
  }
  getUnitPrice() {
    return this.price;
  }
}

const item = new InvoiceItem(1, "arroz integral", 3, 25);

const item2 = new InvoiceItem(2, "Sal de banho", 2, 150);

console.log(item.getID());
console.log(item2.getID());
console.log(item.getDesc());
console.log(item2.getDesc());
