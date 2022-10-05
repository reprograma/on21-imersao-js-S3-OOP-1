class Person {
  constructor(name, address, birth_date) {
    this.name = name
    this.address = address
    this.birth_date = birth_date
  }

   getName() {
    return `Developer: ${this.name}`
   }
}

module.exports = Person