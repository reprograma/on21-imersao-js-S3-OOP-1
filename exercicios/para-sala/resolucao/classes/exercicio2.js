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
    // raiseSalary(percent){
    //     const aumento =(this.salary * percent/100);
    //     this.salary +=aumento;
    //     return `${this.name} o salario com aumento é ${this.salary}`
    // }
 
}

const employee = new InvoiceItem(13, "Anna Maria", 5000);

console.log(employee.raiseSalary(12));
