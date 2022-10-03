/** Escreva uma classe chamada InvoiceItem, 
 * que modela um item de compra com: id, description, quantity e price.
 * Crie os métodos: 
*/

class InvoiceItem {
    constructor(id, description, quantity, price) {

        this.id = id,
        this.description = description,
        this.quantity = quantity,
        this.price = price
    }

    getTotal() {
        return `${this.quantity} unidades do pedido ID: ${this.id} - ${this.description}, custará R$${this.quantity * this.price}.`
    }  

}

const caneta = new InvoiceItem(001, 'Canecta bic',3, 1.99);
console.log(caneta);
console.log(caneta.getTotal());