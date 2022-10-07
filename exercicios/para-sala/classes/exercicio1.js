/* Escreva uma classe chamanda Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary(percent) aumenta o salário baseado numa dada porcentagem.
Escreva a calsse Employee

aumento=(percentual)*salario
salario=(salario+aumento)
*/

class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  raiseSalary(percent) {
    const aumento = this.salary * (percent / 100);
    this.salary = this.salary + aumento;
    return `O novo salário de ${this.name} é de: R$ ${this.salary}`;
  }
}

const employee1 = new Employee(1, "Cláudia", 100);
console.log(employee1.raiseSalary(10));
