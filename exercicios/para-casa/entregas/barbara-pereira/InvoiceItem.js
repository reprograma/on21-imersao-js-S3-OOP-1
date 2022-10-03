/** Escreva uma classe chamada InvoiceItem, 
 * que modela um item de compra com: id, description, quantity e unitPrice.
 * Crie os métodos: 
*/

class InvoiceItem {
    constructor(id, description, quantity, unitPrice) {

        this.id = id,
        this.description = description,
        this.quantity = quantity,
        this.unitPrice = unitPrice
    }

    getId() {
        return this.id
    }
    getDescription = () => { return this.description };
    getQuantity = () => { return this.quantity };
    getUnit= () => { return this.unitPrice }; 
    setUnityPrice(newPrice){ return this.price = newPrice }

    getString() {
        return `
        ID: ${this.getId()}\n
        Description: ${this.getDescription()}\n
        Quantity: ${this.getQuantity()}\n
        Unit: ${this.getUnit()}`
    }

    getTotal() {
        return `
        ${this.quantity} unidades do pedido ID: ${this.id} - ${this.description}, custará R$${this.quantity * this.unitPrice} e cada unidade custa R$ ${this.unitPrice}.`
    } 

}

const caneta = new InvoiceItem(001, 'Canecta bic',3, 1.99);
console.log(caneta);
console.log(caneta.getTotal());
console.log(caneta.getString());
console.log("novo valor: ",caneta.setUnityPrice((1.5).toFixed(2)))