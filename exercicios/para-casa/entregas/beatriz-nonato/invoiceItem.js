class InvoiceItem {
    constructor(id, description, quantity, price) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    getProductPriceResult() {
        const finalProductPrice = this.price * this.quantity
        return `R$${finalProductPrice}`
    }

    getProductDescription() {
        return `Descrição: ${this.description}`
    }

    getProductID() {
        return `ID: ${this.id}`
    }

    getProductUnitPrice() {
        return `Preço Unitário: R$${this.price}`
    }

    getProductQuantity() {
        return `Quantidade: ${this.quantity}`
    }

    getDetailInvoiceItem() {
        const details = this.getProductID() + '\n' + this.getProductDescription() + '\n' + this.getProductUnitPrice() + '\n' + this.getProductQuantity()
        return details
    }
}

const comedouroRainbow = new InvoiceItem('0001', 'seu gato merece um potinho lindo para fazer as refeições. o Comedouro Petiscos chegou para cumprir essa função. além de útil, ele também decora o seu lar com charme.', 30, 50) 
