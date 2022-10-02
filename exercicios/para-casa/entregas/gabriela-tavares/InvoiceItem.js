/*Escreva uma classe chamada InvoiceItem, que modela um item de uma compra, com id, description, quantity e price. */
// Usando a mesma classe InvoiceItem
// criar dois metodos
// criar Gets
// Criar getTotal = criar metodo preço unitario * quantidade

class InvoiceItem {
  constructor(id, name, description, brand, category, quantity, price) {
    this.qualquer = id;
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
  }

  getInformation() {
    return `Produto de id: ${this.id} \n nome: ${this.name} \n descrição: ${this.description} \n marca: ${this.brand} \n categoria: ${this.category} \n quantidade: ${this.quantity} \n preço: ${this.price}`;
  }

  getBrand() {
    return `Esse produto ${this.name} pertence a categoria ${this.category}`;
  }

  getDescription() {
    return `Esse produto ${this.name} tem a seguinte descrição: ${this.description}`;
  }

  getTotal(id, quantity) {
    if (quantity === 0) {
      return `Esse produto id: ${id} não tem estoque!`;
    } else {
      const totalPrice = this.price * this.quantity;
      return `O valor unitário desse item é ${this.price}, para a quantidade ${this.quantity} o valor Total é ${totalPrice}`;
    }
  }
}

const product1 = new InvoiceItem(
  1,
  "Liquidificador",
  "Velocidade 1400w",
  "Mondial",
  "Eletroportáteis",
  2,
  150.49
);
