/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price./

 criar dois metodos
 criar metodo preço unitario * quantidade
 */

 class InvoiceItem {
    constructor(id, description, quantity, price) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    getId(){
        return `Id do Produto: ${this.id}`;
    }
    getProductDesc() {
        return `Descrição do Produto: ${this.description}`;
    }
    getQuantity(){
        return `Quantidade: ${this.quantity}`;
    }
    setQuantity(int){
        return `Quantidade: ${int}`;
    }
    getUnitPrice() {
        return `Preço Unitário: ${this.price}`;
    }
    setUnitPrice(int) {
        return `Preço Unitário: ${int}`;
    }
    getTotal() {
        return `Preço Total: ${this.price * this.quantity}`;
    }
}

const bananaPrata = new InvoiceItem("1", "Banana Prata com aproximadamente 15 cm de comprimento", 50, 5.30);
const maca = new InvoiceItem("2", "Maçã vermelha da região Sul", 80, 1.00);
const melancia = new InvoiceItem("3", "Melancia grauda direto de Limeira", 30, 8.00); 

console.log(bananaPrata.getProductDescription(),'-', bananaPrata.getProductPrice());
console.log(maca.getProductDescription(),'-', maca.getProductPrice());
console.log(melancia.getProductDescription(),'-', melancia.getProductPrice());