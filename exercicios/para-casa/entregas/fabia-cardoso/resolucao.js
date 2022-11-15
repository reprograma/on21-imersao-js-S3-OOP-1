class InvoiceItem {
    constructor(id, description, quantity, price) {
      this.id = id;
      this.description = description;
      this.quantity = quantity;
      this.price = price;
    }
  
    getId = () => this.id;
  
    updateDescription = (descripton) => {
      this.description = descripton;
      return `a nova descrição do produto é: ${descripton}`;
    };
  
    getQty = () => this.quantity;
    setQty = (value) => (this.quantity += value);
    getUnitePrice = () => this.price;
    setUnitPrice = (value) => (this.price += value);
    getTotal = () => this.price * this.quantity;
    toString = () =>
      `\nId: ${this.id}\ndescrição:${this.description}\npreço:${this.price}\nquantidade:${this.quantity} `;
  }
  
  const newProduct = new InvoiceItem(123, "Produto x", 20, 40);
  console.log(newProduct.updateDescription("Descrição nova"));
  console.log(newProduct.getTotal());
  console.log(newProduct.toString());
  newProduct.setUnitPrice(100);
  console.log(newProduct.getUnitePrice());
  newProduct.setQty(100);
  console.log(newProduct.getQty());