/*Excreva uma classe chamada Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary() aumenta o salário baseado numa dada porcentagem.
Escreva a classe Employee.

- Escrever a class
- Criar o metódo raiseSalary()

 aumento=salario * 12
        salario=(salario+aumento)
*/

class Employee{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    raseSalary(percent){
        let aumento = this.salary * (percent/100);
        this.salary += aumento;
        return this.salary;
    }
}

const employee1 = new Employee(1,"Vania", 2000);
console.log(`Salário inicial: ${employee1.getSalary()}`);
console.log(`Salário após aumento ${employee1.raseSalary(10)}`);
