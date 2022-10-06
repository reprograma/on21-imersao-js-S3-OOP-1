/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id,
 description, quantity e price. */


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
   getDescription() {
      return this.description;
   }
   getQuantity() {
      return this.quantity;
   }
   getUnitPrice() {
      return this.price;
   }
   getTotal() {
      let valor = this.price * this.quantity;
      return valor;
   }
   mostrarMensagem() {
      let mensagem = `\n InvoiceItem  [ id=${this.id}, Desc=${this.description}, Qty=${this.quantity}, UnitPrice=${this.price}]`
      return mensagem;
   }
}

const compra1 = new InvoiceItem(1, "Chocolate", 7, 15);

console.log(compra1);
console.log(`${compra1.mensagem()}`)
console.log(`Valor total da compra: ${compra1.getTotal()}`)