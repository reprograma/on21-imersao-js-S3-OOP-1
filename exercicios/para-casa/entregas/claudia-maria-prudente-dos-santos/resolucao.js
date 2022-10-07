/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

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
  getDesc() {
    return this.unitPrice - this.desc;
  }

  getQty() {
    return this.qty;
  }

  setQty(qty) {
    return (this.qty = qty);
  }

  getUnitPrice() {
    return this.unitPrice;
  }

  setUnitPrice(unitPrice) {
    return (this.unitPrice = unitPrice);
  }

  getTotal() {
    return this.unitPrice * this.qty;
  }

  toString() {
    return `InvoiceItem[id=${this.id},desc=${this.desc},qty=${
      this.qty
    },unitPrice=${this.unitPrice},total=${this.getTotal()}]`;
  }
}

const Ovo = new InvoiceItem("1", 0, 2, 5);
const Sabonete = new InvoiceItem("2", 0, 4, 1.5);
const Blusa = new InvoiceItem("3", 0, 1, 40);
console.log(Ovo.toString());
console.log(Sabonete.toString());
console.log(Blusa.toString());
