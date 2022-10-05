class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName = () => `Seja bem vinda, ${this.name}`;
}

const user1 = new User("nanana", "nanana@com", "sasas");

console.log(user1.getName());
