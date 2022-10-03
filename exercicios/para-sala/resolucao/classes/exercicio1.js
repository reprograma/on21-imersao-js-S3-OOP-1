/* Escreva uma classe chamada Employee, que modele um funcionario com os atributos, id, name, salary. O método raiseSalary(percent) aumenta o salário baseado numa dada porcentagem. Escreva a classe Employee.

- Escreva a classe
- Criar o método raiseSalary()

aumento = salario * 12
    salario = (salario + aumento)
*/

class Employee {
    constructor(id, name, salary) {
        this.id = id,
        this.name = name,
        this.salary = salary
    }
    raiseSalary(percent){
        const calcPercent = percent/100
        const raiseCalc = this.salary * calcPercent
        const raisedSalary = this.salary = this.salary + raiseCalc

        return `You receive a raise of $${raiseCalc} and your readjusted salary is $${raisedSalary}`
    }
}

const employee1 = new Employee(1, 'Renata', 2000)
console.log(employee1.raiseSalary(5));