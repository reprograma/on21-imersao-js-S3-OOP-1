/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price.

criar dois metodos
criar metodo preço unitario vezes quantidade
*/

const { getDiffieHellman } = require("crypto");

class InvoiceItem{
    constructor(id, description, quantity, price){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    getId(){
        return this.id;
    }
}


const newProduct = new InvoiceItem(123, "Produto cc", 20, 40)

console.log(newProduct)