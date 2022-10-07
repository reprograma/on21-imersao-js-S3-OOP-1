class InvoiceItem {
    constructor (id,description,quantity,price){
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    }

    getId(){
        return "ID: " + this.id
    }

    getDescription(){
        return "Descrição: " + this.description
    }

    getQuantity(){
        return "Quantidade: " + this.quantity
    }
    
    setQuantity(){
        this.quantity = 4
        return "Quantidade atualizada: " + this.quantity
    }
    

    getPrice(){
        return "Preço: " + this.price
    }

    setPrice(){
        this.price = 400
        return "Preço atualizado: " + this.price
    }

    getTotal(){
        return "Valor total: " + this.price * this.quantity
    }

    toString(){
        return "InvoiceItem - ID: " + this.id + ", Descrição: " + this.description + ", Quantidade: " + this.quantity + ", Preço: " + this.price
    }
}


const InvoiceItem1 = new InvoiceItem("741BR", "Eletronico", 3, 500)

console.log(InvoiceItem1.getId())
console.log(InvoiceItem1.getDescription())
console.log(InvoiceItem1.getQuantity())
console.log(InvoiceItem1.setQuantity())
console.log(InvoiceItem1.getPrice())
console.log(InvoiceItem1.setPrice())
console.log(InvoiceItem1.getTotal())
console.log(InvoiceItem1.toString())
