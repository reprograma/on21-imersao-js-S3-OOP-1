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
        let calculo = percent / 100
        let total = this.salary + (this.salary * calculo)

        return `Seu novo salário com ${percent}% de aumento é ${total}.`
    }
}

const employee1 = new Employee (1, 'Amanda', 100)

console.log(employee1);
console.log(employee1.raiseSalary(12));





// EXEMPLO DA DANIELA, Jessica pediu para guardar os calculos numa varial para otimoizar
// class Employee {
//     constructor(id, name, salary) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//     }
    
//     raiseSalary = (percent) =>  // não precisa de return porque a arrow function tem como implícito o return caso só tenha 1 linha de instrução 
//     `O funcionario ${this.name} de id ${
//     this.id
//     }, receberá aumento de ${percent} % totalizando um salario no valor de ${
//     (this.salary * percent) / 100 + this.salary
//     }`;
//     }
    
//     const employee1 = new Employee(123, "Luisa Mel", 100);
    
//     console.log(employee1.raiseSalary(10)); 