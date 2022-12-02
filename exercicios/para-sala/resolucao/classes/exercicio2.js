/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price.

Criar métodos do diagrama de classes no assets
*/

//Classe InvoiceItem
class InvoiceItem{
    constructor(id, description, quantity, price){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    getId(){
        return `Id do protudo: ${this.id}`;
    }

    getDesc(){
        return `Descrição do produto: ${this.description}`;
    }
    
    getQty(){
        return `Quantidade do produto: ${this.quantity}`;
    }

    /// o set é o que nesse caso? 
    /// posso fazer assim no return return `Qtd do produto: ${this.qty = qty} `
    setQty(qty){
        this.qty = qty;
        return `Qtd do produto: ${this.qty}`;
    }

    getUnitPrice(){
        return `Preço Unitário: ${this.price}`;
    }

    setUnitPrice(unitPrice){
        this.unitPrice = unitPrice;
        return `Preço Unitário: ${this.unitPrice}`;
    }

    getTotal(){
        total = this.unitPrice * this.qty;
        return `Preço Unitário: ${total}`;
    }

    // ????????? é isso? 
    // ????????? é isso? não entendi 
    toString(){
        return `InvoiceItem[id=${this.id},desc=${this.desc},qty=${
          this.qty
        },unitPrice=${this.unitPrice},total=${this.getTotal()}]`;
    }

    updateDescription(descripton){
        this.description = descripton;
        return `A nova descrição do produto é: ${descripton}`
    }
}

//Criar o item da uma compra, criar o objeto, instanciar
const newProduct = new InvoiceItem(123, "Produto x", 20, 40);

console.log(newProduct.updateDescription("Descrição nova"))

//Resolução do exercício
const melao = new InvoiceItem(1, "Melão de Mossoró", 10, 4.50);
const jaca = new InvoiceItem(2, "Jaca dura", 50, 5.00);
const caju = new InvoiceItem(3, "Caju vermelho", 80, 1.00); 

console.log(melao.getDesc(),'-', melao.getUnitPrice());
console.log(jaca.getDesc(),'-', jaca.getUnitPrice());
console.log(caju.getDesc(),'-', caju.getUnitPrice());

