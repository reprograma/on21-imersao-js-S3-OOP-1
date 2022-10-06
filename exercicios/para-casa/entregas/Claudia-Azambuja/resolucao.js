class InvoiceItem {
  constructor(id, description, quantity, unitPrice) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }

  getID = () => this.id;

  getDescription= () => this.description;

  getQuantity = () => this.quantity;

  getUnitPrice = () => this.unitPrice;

  setUnitPrice = (newPrice) => (this.unitPrice = newPrice);


  getTotal = () => this.unitPrice * this.quantity;

  toString = () =>
  
       `id = ${this.id},
        description = ${this.description},
        quantity = ${this.quantity},
        unitPrice = ${this.unitPrice}`;

}

const newitem = new InvoiceItem(20, 'café', 4, 13);

console.log(newitem.getID()); //ok
console.log(newitem.getDescription()); //ok
console.log(newitem.getQuantity()); //ok
console.log(newitem.getUnitPrice()); //ok
console.log(newitem.getTotal()); //ok
console.log(newitem.toString()); //ok

console.log(newitem.setUnitPrice(26));

