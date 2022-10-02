/*Escreva uma classe chamada InvoiceItem, que modela um item de uma compra, com id, description, quantity e price. */ 

class InvoiceItem {
    constructor(id, description, quantity, price){
        this.id = id,
        this.description = description,
        this.quantity = quantity,
        this.price = price
    }
    getId() {
        const id = this.id
        return id
    }
    getDesc(disc){
        const discount = disc
        return discount
    }
    getQty(){
        return this.quantity
    }
    setQty(qty){
        return this.quantity = qty
    }
    getUnityPrice(){
        return this.price
    }
    setUnityPrice(newPrice){
        return this.price = newPrice
    }
    getTotal(){
        const total = this.getQty() * this.getUnityPrice() 
        return total
    }
    toString(){
        return `Id: ${this.getId()}, Description: ${this.description}, Quantity: ${this.getQty()}, Unity Price: ${this.getUnityPrice()}`
    }
}

const invoiceItem1 = new InvoiceItem('1', 'javascript book', 5, 13)
console.log(invoiceItem1);

// invoiceItem1.setQty(10)
// console.log(invoiceItem1.getTotal());

// invoiceItem1.setUnityPrice(10)
// console.log(invoiceItem1);
console.log(`Total: ${invoiceItem1.getTotal()}`);

console.log(`
Set new quantity: ${invoiceItem1.setQty(10)}
-------------------
Total with new quantity: ${invoiceItem1.getTotal()}
------------------- 
Set new price: ${invoiceItem1.setUnityPrice(20)}
------------------
Total with new price: ${invoiceItem1.getTotal()}
------------------
Item Info: ${invoiceItem1.toString()} 
`);
// console.log(invoiceItem1.toString())