
 class InvoiceItem {
    constructor(id, description, quantity, price){

        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price
    }

    getNome() {
        return `O produto atual em promoção é ${this.description}`
    }

    getPrecoProduto() {
        return `O preço atual do produto é R$ ${this.price}`
    }

    getValorTotal() {
        const valorTotal = this.price * this.quantity;

        return `O produto ${this.description}: \nNa quantidade ${this.quantity} custará o valor total de R$ ${valorTotal},00.\nPreço Unitário de R$ ${this.price},00.`
    }

 }

 const novoProduto = new InvoiceItem('1', 'Maquina de Lavar', 3, 880);

 console.log(novoProduto.getNome())
 console.log(novoProduto.getValorTotal())