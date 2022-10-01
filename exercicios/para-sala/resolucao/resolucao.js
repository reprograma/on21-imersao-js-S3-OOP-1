/*Excreva uma classe chamada Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary() aumenta o salário baseado numa dada porcentagem.
Escreva a classe Employee.

- Escrever a class
- Criar o metódo raiseSalary()

 aumento=salario * 12
        salario=(salario+aumento)
*/

class Employee{
    constructor(id, name, salary){
        this.id=id;
        this.name=name;
        this.salary=salary
    }
    raiseSalary(percent){
        const salaryReise = (this.salary*percent/100)+this.salary
        return `${this.name}, teu salário reajustado será de ${salaryReise}`
    }
    // ou
    raiseSalary2 = (percent) =>
    `O funcionario ${this.name} de id ${this.id }, receberá aumento de ${percent} % totalizando um salario no valor de ${
        (this.salary * percent) / 100 + this.salary
    }`;
}

const colab1= new Employee(1, "Catarina", 2000)

/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */
// criar dois metodos
// criar metodo preço unitario * quantidade

class ItemCompra{
    constructor(){
        this.id=id;
        this.description=description;
        this.quantity=quantity;
        this.price=price
    }
}

class CarrinhoDeCompra{
    constructor(){
        this.item
    }
}