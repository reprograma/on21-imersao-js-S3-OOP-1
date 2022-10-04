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
    return `Item desc is "${this.desc}"`;
  }

  getTotal() {
    return `Total is $${this.unitPrice * this.qty}`;
  }
}

const invoiceItem1 = new InvoiceItem(1, "invoice item description", 7, 25);
console.log(invoiceItem1.getID());
console.log(invoiceItem1.getDesc());
console.log(invoiceItem1.getTotal());
