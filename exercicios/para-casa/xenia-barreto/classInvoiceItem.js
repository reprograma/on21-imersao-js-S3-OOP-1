/*Escreva uma classe chamada InvoiceItem, que modela um item de uma compra, com id, description, quantity e price. */ 
// Usando a mesma classe InvoiceItem
// criar dois metodos
// criar Gets
// Criar getTotal = criar metodo preço unitario * quantidade

class InvoiceItem {
    constructor(id, name, description, quantify, price) {
        this.id = id;
        this.name = name
        this.description = description;
        this.quantify = quantify;
        this.price = price;
    };

    getProductPrice(){
        return `\nProduto: ${this.name}\nPreço: ${this.price}`
    };

    getProductById(id){
        if(id != this.id){
            return `Nenhum produto cadastrado para id ${id}.`
        }else if(id == this.id)
            return `\n${this.name}\n${this.description}\n${this.price}`
    }

    getTotal(id, quantify){
        let calculo = quantify * this.price
        let message = `\nProduto: ${this.name}\nPreço Unitário: ${this.price}\nQuantidade: ${quantify}\n`
        let total = `Total: R$${calculo}`
        
        if(id == this.id){
            return message + total
        }
    }

}

const invoiceItem1 = new InvoiceItem(1, 'Oral-B', 'Escova Dental Elétrica à Pilhas', 1, 20)

console.log(invoiceItem1);
console.log(invoiceItem1.getProductPrice());
console.log(invoiceItem1.getProductById(1));
console.log(invoiceItem1.getTotal(1, 2));