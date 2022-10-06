/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price.

criar dois metodos
criar metodo preço unitario vezes quantidade
*/

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

    getDescription(){
        return this.description;
    }

    getQuantity(){
        return this.quantity;
    }

    getPrice(){
        return this.price;
    }


}


const newProduct = new InvoiceItem(123, "Produto cc", 20, 40)

console.log(newProduct)
console.log(newProduct.getDescription())
console.log(newProduct.getId())
console.log(newProduct.getPrice())
console.log(newProduct.getQuantity())

