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
  constructor (id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  raiseSalary(){
    const aumento = this.salary * 0.12
    const newSalary = this.salary + aumento
    return `Olá ${this.name}, seu aumento foi de ${aumento} e seu novo salário é ${newSalary}`
  }
}
const user1 = new Employee("3", "Anna", "1");
console.log(user1.raiseSalary())