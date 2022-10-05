const Client = require('./client');

class Account extends Client {
  constructor(name, cpf, email, password, balance, agency){
    super(name, cpf, email, password)

    this.balance = balance
    this.agency = agency
  }

  setDeposit (value) {
    return `Current Balance: $${this.balance} \nDeposit of $${value}. \nCurrent Balance After Deposit: $${this.balance += value}`
  }

  setWithdrawal (value, tax) {
    let currBalance = this.balance
    let withdrawal = (value + (value * (tax)))
    if(this.balance < value) {
      return `Insufficient balance.`
    }

    const currentBalance = this.balance - withdrawal
    return `Current balance: $${currBalance} \nWithdrawal of $${value}. \nCurrent Balance After Withdrawal: $${currentBalance}`
  }

  getAccountInfos () {
    let passwordMask = password => password.replace(/./g, '#')
    let maskedPassword = passwordMask(this.password)
    this.password = maskedPassword
    return `Account Information \n--------------------- \nClient: ${this.name} \nCPF: ${this.cpf} \nEmail: ${this.email} \nPassword: ${this.password} \nBalance: $${this.balance} \nAgency: ${this.agency}`
  }
}

module.exports = Account