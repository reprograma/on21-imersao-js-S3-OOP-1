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
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    raiseSalary(percent){
        const aumento =(this.salary * percent/100);
        this.salary +=aumento;
        return `${this.name} o salario com aumento é ${this.salary}`
    }
    
//    não precisa de return porque a arrow function
// tem como implícito o return caso só tenha 1 linha de instrução

    // raiseSalary = (percent) =>
    // `O funcionario ${this.name} de id ${
    //   this.id
    // }, receberá aumento de ${percent} % totalizando um salario no valor de ${
    //   (this.salary * percent) / 100 + this.salary
    // }`;

}

const employee = new Employee(13, "Anna Maria", 5000);

console.log(employee.raiseSalary(12));
