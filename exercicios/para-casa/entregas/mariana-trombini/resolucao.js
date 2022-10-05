/*Write a3 class called InvoiceItem, which models an item from a purchase, with id, name, description, quantity, and price. */ 

class InvoiceItem {
  #id
  #name
  #description
  #quantity
  #price
  constructor (id, name, description, quantity, price) {
    this.#id = id
    this.#name = name
    this.#description = description
    this.#quantity = quantity
    this.#price = price
  }

  getId() {
    return this.#id
  }

  getName() {
    return this.#name
  }

  getDescription() {
    return this.#description
  }

  getQuantity() {
    return this.#quantity
  }

  getUnitprice() {
    return this.#price
  }

  setDescription(newDescription) {
    return this.#description = newDescription
  }

  setQuantity(quantity) {
    return this.#quantity = quantity
  }

  setUnitprice(newPrice) {
    return this.#price = newPrice
  }

  getTotal() { 
    return this.#price * this.#quantity
  }

  toString() {
    return `Id: ${this.#id}, Description: ${this.#description}, Quantity: ${this.#quantity}, Unity Price: ${this.#price}`
  }
}

const invoiceItem = new InvoiceItem('1', 'Casillero Del Diablo', 'Dry Red Wine Malbec 750 ml', 1, 59.95)

console.log(`Invoice Item ID: ${invoiceItem.getId()}`) // Invoice Item ID: 1
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item Name: ${invoiceItem.getName()}`) // Invoice Item Name: Casillero Del Diablo
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item Description: ${invoiceItem.getDescription()}`) // Invoice Item Description: Dry Red Wine Malbec 750 ml
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item Unit Price: ${invoiceItem.getUnitprice()}`) // Invoice Item Unit Price: 59.95
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item New Description: ${invoiceItem.setDescription('Dry Red Wine Carmenere 750 ml')}`) // Invoice Item New Description: Dry Red Wine Carmenere 750 ml
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item New Quantity: ${invoiceItem.setQuantity(2)}`) // Invoice Item New Quantity: 2
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item New Unit Price: ${invoiceItem.setUnitprice(78.49)}`) // Invoice Item New Unit Price: 78.49
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item Total: ${invoiceItem.getTotal()}`) // Invoice Item Total: 156.98
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(`Invoice Item Name: ${invoiceItem.toString()}`) // Invoice Item Name: Id: 1, Description: Dry Red Wine Carmenere 750 ml, Quantity: 2, Unity Price: 78.49