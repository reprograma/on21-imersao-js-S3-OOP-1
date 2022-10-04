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
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    raiseSalary(){
        const aumento = salario * 0.12
        const salarioAtual = salario + aumento
        return `Seu salario após o aumento é de ${salarioAtual}`
      }
      raiseSalary(percent){
        const salaryReise = (this.salary*percent/100)+this.salary
        return `${this.name}, teu salário reajustado será de ${salaryReise}`
    }

}