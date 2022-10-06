class InvoiceItem {
  constructor(id, description, quantity, price) {
    this.id = id
    this.description = description
    this.quantity = quantity
    this.price = price
  }

  getId() {
    return this.id
  }

  getDesc() {
    return this.description
  }

  getQty() {
    return this.quantity
  }

  setQty(qty) {
    return this.quantity += qty
  }

  getUnitPrice() {
    return this.price.toFixed(2).replace('.', ',')
  }

  setUnitPrice(unitPrice) {
    return this.price = unitPrice
  }

  getTotal(){
    const valorTotal = this.price * this.quantity
    return valorTotal.toFixed(2).replace('.', ',')
  }

  getInvoiceItem() {
    const item = `\n id: ${this.getId()} \n Desc: ${this.getDesc()} \n Valor unitário: ${this.getUnitPrice()} \n Quantidade: ${this.getQty()}`
    return item
}
}

const newProduct = new InvoiceItem(544656496, 'Cerveja', 12, 2.99)
console.log(newProduct)
console.log('Desc:', newProduct.getDesc())
console.log('quantidade:', newProduct.getQty()) 
console.log('Nova quantidade:', newProduct.setQty(22))
console.log('Preço:', newProduct.getUnitPrice())
console.log('Novo Preço:', newProduct.setUnitPrice(1.99))
console.log('Preço:', newProduct.getUnitPrice())
console.log('Valor Total:', newProduct.getTotal())
console.log('getInvoiceItem >>', newProduct.getInvoiceItem())