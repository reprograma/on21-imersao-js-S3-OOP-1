class InvoiceItem {
  constructor(id, description, quantity, price) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }

  getId() {
    return this.id;
  }
  getDesc() {
    return this.description;
  }
  getQty() {
    return this.quantity;
  }
  setQty(quantity) {
    this.quantity = quantity;
  }
  getUnitPrice() {
    return this.price;
  }
  setUnitPrice(unitPrice) {
    this.price = unitPrice;
  }
  getTotal() {
    return this.price * this.quantity;
  }
  toString() {
    return `InvoiceItem[id=${this.id}, desc=${this.description}, qty=${this.quantity}, unitPrice=${this.price}]`;
  }
}


module.exports = InvoiceItem;