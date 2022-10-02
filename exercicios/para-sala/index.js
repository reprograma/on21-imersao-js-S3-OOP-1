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
        this.nome = name;
        this.salary = salary;
    }
}

// raiseSalary(percent){
//     const salaryReise = (this.salary*percent/100)+this.salary
//     return `${this.name}, teu salário reajustado será de ${salaryReise}`
// }

raiseSalary = (percent) =>
`O funcionario ${this.name} de id ${
  this.id
}, receberá aumento de ${percent} % totalizando um salario no valor de ${
  (this.salary * percent) / 100 + this.salary
}`;

const employee1 = new Employee(123, "Luisa Mel", 100);

console.log(employee1.raiseSalary(10));


// const employee1 = new Employee ("1234","Ana Paula","3000");
// const employee2 = new Employee ("6789","Ana Cláudia","4000");
// const employee3 = new Employee ("5469","Fernanda","5000");

// não precisa de return porque a arrow function 
// tem como implícito o return caso só tenha 1 linha de instrução




