/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price.
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
    
     updateDescription(descripton){
        this.description = descripton;
    return `a nova descrição do produto é: ${descripton}`
    }
}


const newProduct = new InvoiceItem(123, "Produto x", 20, 40);
console.log(newProduct.updateDescription("Descrição nova"))

