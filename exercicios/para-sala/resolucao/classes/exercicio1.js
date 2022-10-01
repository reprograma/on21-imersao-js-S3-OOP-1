/*Excreva uma classe chamada Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary() aumenta o salário baseado numa dada porcentagem.
Escreva a classe Employee.

- Escrever a class
- Criar o metódo raiseSalary()

 aumento=salario * 12
        salario=(salario+aumento)
*/

class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return `Your salary is ${this.salary}`;
  }

  raiseSalary(percent) {
    const newSalary = this.salary + this.salary * (percent / 100);
    return `Your new salary is ${newSalary}`;
  }
}

const employee1 = new Employee(1, "Fernanda", 3000);
console.log(`Salary before raise: ${employee1.getSalary()}`);
console.log(`Salary after raise: ${employee1.raiseSalary(12)}`);
