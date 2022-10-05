  class InvoiceItem {
    constructor(id, description, quantity, unityPrice) {
      (this.id = id),
        (this.description = description),
        (this.quantity = quantity),
        (this.unityPrice = unityPrice);
    }
  
    getID() {
      return this.id;
    }
  
    getQty() {
      return this.quantity;
    }
  
    setQty(qtde) {
      const quantidadeAtualizada = this.quantity + qtde;
      return quantidadeAtualizada;
    }
  
    getUnityPrice() {
      return this.unityPrice;
    }
  
    setUnityPrice(value) {
      const zerarValor = this.unityPrice - this.unityPrice;
      const precoUnitarioAtualizado = zerarValor + value
      return precoUnitarioAtualizado;
    }
  
    getTotal(quantity) {
      const valorTotal = this.unityPrice * quantity;
      return valorTotal;
    }
  
    toString() {
      return `InvoiceItem[ id = ${this.id}, description = ${this.description}, quantity = ${this.quantity}, unityPrice = ${this.unityPrice} ]`;
    }
  }
  
  const celular = new InvoiceItem("1", "Celular", 2, 500);
  console.log(celular.getID());
  console.log(celular.getQty());
  console.log(celular.setQty(5));
  console.log(celular.getUnityPrice());
  console.log(celular.setUnityPrice(300));
  console.log(celular.getTotal(2));
  console.log(celular.toString());
  
  

  