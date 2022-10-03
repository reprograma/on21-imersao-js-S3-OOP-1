/*Excreva uma classe chamada Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary() aumenta o salário baseado numa dada porcentagem.
Escreva a classe Employee.

- Escrever a class
- Criar o metódo raiseSalary()

 aumento=salario * 12
        salario=(salario+aumento)

class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary
    }

    raiseSalary(percent) {
        const aumento = (this.salary * percent)/100
        const newSalary = this.salary + aumento
        return `${this.name} teve um aumento de ${percent} o novo seu salario é ${newSalary}`
    }
}

const employee1 = new Employee("1", "eliane", 2500)

console.log(employee1)
console.log(employee1.raiseSalary(12))

*/

class InvoiceItem {
    constructor(id, description, quantity, price) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
}

const invoiceItem1 = new InvoiceItem(546, "arroz", 10, 25)

console.log(invoiceItem1)