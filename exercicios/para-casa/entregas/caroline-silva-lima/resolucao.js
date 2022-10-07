/*Escreva uma classe chamada InvoiceItem, que modela um item de uma compra, com id, description, quantity e price.
Em seguida, escreva todos os metódos que contém na imagem abaixo.*/ 

class InvoiceItem{
    constructor(id, description, quantity, unitPrice){
        this.id=id
        this.description=description
        this.quantity=quantity 
        this.unitPrice=unitPrice
    }

    getId(){
        return this.id
    }

    getDesc(){
        return this.description
    }

    getQty(){
        return this.quantity
    }
    setQty(value){
        return this.quantity=value
    }
    getUnitPrice(){
        return this.unitPrice
    }
    setUnitPrice(price){
        return this.unitPrice=price
    }
    getTotal(){
        return this.unitPrice * this.quantity
    }

    getInvoiceItem(){
        return `Pedido de id ${this.id}, consiste em ${this.description}. A quantidade de itens é ${this.quantity} e o preço da unidade é ${this.unitPrice} reais`
    }
};

exports.InvoiceItem; 
