class InvoiceItem {
  constructor(id, desc, qty, unitPrice) {
    this.id = id;
    this.desc = desc;
    this.qty = qty;
    this.unitPrice = unitPrice;
  }

  getID() {
    return this.id;
  }

  getDesc = () => this.desc;

  getQty = () => this.qty;

  getUnitPrice = () => this.unitPrice;

  setUnitPrice = (unitPrice) => (this.unitPrice = unitPrice);

  getTotal = () => this.unitPrice * this.qty;

  toString = () =>
    `id = ${this.id},
        desc = ${this.desc},
        qty = ${this.qty},
        unitPrice = ${this.unitPrice}`;

}

const item = new InvoiceItem(1, 'pão', 5, 25);

console.log(item.getID());
console.log(item.getDesc());
console.log(item.getQty());
console.log(item.getUnitPrice());
console.log(item.getTotal());
console.log(item.setUnitPrice(15));
console.log(item.getUnitPrice());
console.log(item.toString());
