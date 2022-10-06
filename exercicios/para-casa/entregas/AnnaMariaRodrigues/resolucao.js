/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */
// Usando a mesma classe InvoiceItem
// criar dois metodos
// criar Gets
// Criar getTotal = criar metodo preço unitario * quantidade


class InvoiceItem{
    constructor(id, description, quantity, price){
        this.description = description;
        this.id = id;
        this.quantity = quantity;
        this.price = price;
    }
    getID()
    {
        return `O id é  ${this.id}`
  
    }
    getDesc()
    {   
     //   this.description =description;
        return `A descrição é  ${this.description}`
   }
   setQty(quantidade)
   {   
       this.quantity =quantidade;
       return `A nova quantidade é ${this.quantity}`
  }

   getQty()
   {
    return `A quantidade é ${this.quantity}`
   }
 
   getUnitPrice()
   {
    return `O preço unitario é ${this.price}`
   }

   getTotal()
   {
    const preco_total = (this.price*this.quantity)
    return `O preço total é ${preco_total}`
   }

   toString()
   {
    return `Id é ${this.id}, a descrição è ${this.description} , a quantidade é ${this.quantity} e o preço unitário é ${this.price} `
   }
}
 
const invItem = new InvoiceItem(13, "Lapis", 30, 2.5);

console.log(invItem.getID());
console.log(invItem.getDesc());
console.log(invItem.getQty());
console.log(invItem.getUnitPrice());
console.log(invItem.setQty(43));
console.log(invItem.getTotal());
console.log(invItem.toString());
