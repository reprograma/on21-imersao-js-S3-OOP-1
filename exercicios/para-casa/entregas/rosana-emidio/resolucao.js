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

    getID(){
        return this.id;
    }

    getDescription(){
        return this.description;
    }

    getQuantity(){
        return this.quantity;
    }

    setQuantity(newQuantity){
        return this.quantity = newQuantity 
    }

    getPrice(){
        return this.price;
    }

    setPrice(newPrice){
        return this.price = newPrice
    } 

    getTotal(){   
        let valorTotal = this.price * this.quantity

        return valorTotal
    }

    detailsProduct(){
        let details = `
        Id do produto: ${this.getID()} \n 
        Descrição: ${this.getDescription()} \n 
        Quantidade: ${this.getQuantity()} \n 
        Preço: ${this.getPrice()}\n
        Valor Total: R$ ${this.getTotal()}
        `
        return details
    }


}

const newProduct = new InvoiceItem(42, "Action figure Homem Aranha", 35 , 89.52)




