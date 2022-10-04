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

    raiseSalary(percent){
        const porcentagem = percent / 100;
        const aumentoSalario = this.salary * porcentagem;
        const novoSalario = this.salary + aumentoSalario;
        return `Novo salário de ${this.name} é ${novoSalario}.`
    }
}

const employee1 = new Employee(0, "Evelin", 1000.00 )

console.log(employee1)
console.log(employee1.raiseSalary(12))
