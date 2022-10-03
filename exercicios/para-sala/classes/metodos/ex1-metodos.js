/**
 * Escreva uma classe chamada Employee, que modela um funcionário com os atributos id, name e salary.
 * O método saiseSalary(percente), aumenta o salário baseado numa dada porcentagem
 * - Esreva a classe Emploee
 * - Criar o método raiseSalary()
 * - Aumento = salary * 0,12
 * - salary(salary + aumento)
 */

class Employee {
    constructor(id, name, salary){
        this.id = id,
        this.name = name,
        this.salary = salary
    }

    raiseSalary(percente){
        const newSalary = this.salary + this.salary*(percente / 100);
        return `Funcionárix ${this.name}, ID: ${this.id} e salário R$ ${this.salary}, recebeu ${percente}% de aumento. O novo salário é R$ ${newSalary}.` 
    }
}

employee1 = new Employee(1, 'Bárbara', 1000);
console.log(employee1);
console.log(employee1.raiseSalary(12));

