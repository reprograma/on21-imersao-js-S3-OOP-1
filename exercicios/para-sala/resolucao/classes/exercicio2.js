class InvoiceItem{
    constructor(id, description, quantity, price )
{
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
}
getIdI(id){
    return id;
}
upDateDescription(descripton){
    this.description = descripton
    return `a nova descrição do produto é:${descripton}`
}


}

const item = new InvoiceItem (1, "leite", 2, 4.99)
console.log(item.upDateDescription("Descrição nova"))

