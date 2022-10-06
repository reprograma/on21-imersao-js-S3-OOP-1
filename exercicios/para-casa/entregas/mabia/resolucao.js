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
}

const item = new InvoiceItem(1, "arroz integral", 3, 25);

console.log(item.getID());
