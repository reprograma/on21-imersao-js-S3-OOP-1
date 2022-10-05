/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price.

criar dois metodos
criar metodo preço unitario vezes quantidade
*/

class InVoiceItem {
    constructor(id, description, quantity, price) {
        this.id = id
        this.description = description
        this.quantity = quantity
        this.price = price        
    }

    getProductQuantity() {
        return `Quantidade: ${this.quantity}`

    }

    getProductPriceTotal() {
        const finalProductPrice = this.price * this.quantity
        return `R$ ${finalProductPrice}`
    }

    getProductUnitPrice() {
        return `Preço Unitário: R$${this.price}`
    }

    getProductPrice() {
        return `Preço: R$${this.price}`
    }


    getProductId() {
        return `ID: R$${this.id}`
    }

    getProductDescription() {
       
        return `Descrição: ${this.description}`
    }


    getDetailInvoiceItem() {
        const details = this.getProductID() + '\n' + this.getProductDescription() + '\n' + this.getProductUnitPrice() + '\n' + this.getProductQuantity()
        return details
    }



}