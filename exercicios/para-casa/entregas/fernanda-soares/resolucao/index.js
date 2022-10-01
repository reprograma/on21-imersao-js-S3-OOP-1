class InvoiceItem {
  constructor(id, desc, qty, unitPrice) {
    this.id = id;
    this.desc = desc;
    this.qty = qty;
    this.unitPrice = unitPrice;
  }

  getID() {
    return `Item id is ${this.id}`;
  }

  getDesc() {
    return `Item desc is ${this.desc}`;
  }

  getQty() {
    return `Item qty is ${this.qty}`;
  }

  setQty(newQty) {
    this.qty = newQty;
    return `New qty ${this.qty}`;
  }

  getUnitPrice() {
    return `Item unit price is ${this.unitPrice}`;
  }

  setUnitPrice(newUnitPrice) {
    this.unitPrice = newUnitPrice;
    return `New unit price ${this.unitPrice}`;
  }

  getTotal() {
    return `Total is ${this.unitPrice * this.qty}`;
  }

  toString() {
    return `InvoiceItem: Id: ${this.id}, Desc: ${this.desc}, Qty: ${this.qty}, UnitPrice: ${this.unitPrice}`;
  }
}

const invoiceItem1 = new InvoiceItem(1, "invoice item description", 7, 25);
console.log(invoiceItem1.getID());
console.log(invoiceItem1.getDesc());
console.log(invoiceItem1.getQty());
console.log(invoiceItem1.getUnitPrice());
console.log(invoiceItem1.getTotal());
console.log(invoiceItem1.setQty(3));
console.log(invoiceItem1.setUnitPrice(15.0));
console.log(invoiceItem1.getTotal());
console.log(invoiceItem1.toString());
