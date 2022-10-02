
class User {
  constructor (name, email, password){
    this.name = name;  
    this.email = email;
    this.password = password;
  }
  getName(){
    return `Seja bem vinde, ${this.name}`
  }
  getLengthName(){
    return `O tamanho do seu primeiro nome é ${this.name.length}`
  }
};

const user1 = new User("Anna", "rapha@email.com", "123456");
console.log(user1)
console.log(user1.getName())
console.log(user1.getLengthName())
