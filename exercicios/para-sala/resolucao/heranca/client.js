 
      class Client {
        constructor(name, cpf, email, password){
          this.name = name
          this.cpf = cpf
          this.email = email
          this.password = password
        }
    
        getName() {
          return `Client: ${this.name}`
         }
      }
    
    
    module.exports = Client
    