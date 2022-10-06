/*Excreva uma classe chamada Employee, 
que modela um funcionário com os atributos id, name e salary. O método raiseSalary() 
aumenta o salário baseado numa dada porcentagem. Escreva a classe Employee. -
 Escrever a class - Criar o metódo raiseSalary() aumento=salario * 12 salario=(salario+aumento) */

class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  raiseSalary = (percent) =>
    `O funcionario ${this.name} de id ${
      this.id
    }, receberá aumento de ${percent} % totalizando um salario no valor de ${
      (this.salary * percent) / 100 + this.salary
    }`;
}

const employee1 = new Employee(123, "Luisa Mel", 100);

console.log(employee1.raiseSalary(10));

class InvoiceItem {
  constructor(id, description, quantity, unitPrice) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }

  getId = () => this.id;
  getIDesc = () => this.description;
  getQty = () => this.quantity;

  setQty = (unitPrice) => (this.unitPrice = unitPrice);
  getTotal = () => this.unitPrice * this.quantity;
}

/*Escreva uma classe chamada InvoiceItem,
que modela um item de uma compra, com id, description, quantity e price. */

// criar dois metodos
// criar metodo preço unitario * quantidade
// retornar o produto e o preço total multiplicado
