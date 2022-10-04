class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName() {
    return `Seja bem-vinde, ${this.name}!`;
  }

  getTamanhoName() {
    return `O tamanho do nome é ${this.name.length}`;
  }
}

const user1 = new User("Fernanda", "fernanda@email.com", "senha123@");

console.log(user1.getName());
console.log(user1.getTamanhoName());
