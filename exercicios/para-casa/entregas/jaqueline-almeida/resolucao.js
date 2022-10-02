/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

//  criar dois métodos
// criar um método preço unitário * quantidade
//  

class InvoiceItem {
    constructor(id, description, quantify, price) {
        this.id = id;
        this.description = description;
        this.quantity = quantify;
        this.price = price;
    
    }

    getProductDescription() { 
        return `Produto: ${this.description}`;
    }

    getProductPrice() {
        const priceProduct = this.price * this.quantity;
        return ` Valor total do produto:  ${priceProduct}`;
    }
  
}

const mochila = new InvoiceItem("1", "Mochila infantil: laranja e branca, com tema de Moana. Cabe material escolar.", 20, 102.50);
const bolsa = new InvoiceItem("2", "Bolsa feminina: marrom, grande, com divisórias. Ótima para o trabalho", 20, 102.50);


console.log(mochila.getProductDescription(), mochila.getProductPrice());
console.log(bolsa.getProductDescription(), mochila.getProductPrice());
