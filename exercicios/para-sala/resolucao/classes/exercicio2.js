/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

class InvoiceItem {
  constructor (id, description, quanty, price){
    this.id = id;
    this.description = description;
    this.quanty = quanty;
    this.price = price
  }
}
const user1 = new InvoiceItem("1", "produto1", "2", "20")
console.log(user1)