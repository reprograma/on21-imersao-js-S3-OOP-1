class Employee{
    constructor( id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    raiseSalary(percent){
        return  this.salary/100 * percent + this.salary
    }
    
}

const Employee1 =  new Employee ( 1, "Maria", 1200 )

console.log(Employee1.raiseSalary(20))