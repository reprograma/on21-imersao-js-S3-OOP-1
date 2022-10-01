/*Excreva uma classe chamada Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary() aumenta o salário baseado numa dada porcentagem.
Escreva a classe Employee.
*/

class Employee {
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    raiseSalary(percent){
        let calculo = percent / 100
        let total = this.salary + (this.salary * calculo)

        return `Seu novo salário com ${percent}% de aumento é ${total}.`
    }
}

const employee1 = new Employee (1, 'Amanda', 100)

console.log(employee1);
console.log(employee1.raiseSalary(12));


