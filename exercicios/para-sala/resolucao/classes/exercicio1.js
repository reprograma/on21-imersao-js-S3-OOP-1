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
        this.id = id
        this.name = name
        this.salary = salary
    }

    raiseSalary(percent){

        const aumento = (this.salary * percent) /100
        const newSalary = aumento + this.salary
        return `Seu antigo salário era ${this.salary} e seu novo salário é ${newSalary}`
    }

}

const employee1 = new Employee(1, "Gabriela", 1500)

console.log(employee1.raiseSalary(10))

