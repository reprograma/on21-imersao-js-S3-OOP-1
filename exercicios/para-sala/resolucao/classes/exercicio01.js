/* Write a class called Employee, which models an employee with the attributes id, name, salary.
The raiseSalary(percent) method increases the salary based on a given percentage.
Write the Employee class 
*/

class Employee {
  constructor (id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
  }

  raiseSalary(percent) {
    const readjustmentValue = (this.salary * percent) / 100
    const readjustedSalary = this.salary += readjustmentValue
    return `${this.name}, your salary received a raise of ${percent}% and it was readjusted to ${readjustedSalary}`
  }
}

const employee = new Employee(1, 'Mari', 5000)
console.log(employee.raiseSalary(10))