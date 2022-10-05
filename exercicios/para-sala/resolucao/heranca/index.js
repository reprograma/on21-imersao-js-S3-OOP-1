// const developer = require('./developer')
const account = require('./account')


// const createMari = new developer("Mari", 'any_email@email.com', '(11)12345678', ['js', 'ts'])
// console.log(createMari.getName()) // Developer: Mari
// console.log('')

const clientAccount = new account('Mariana', '123.456.789-00', 'any_email@mail.com', '123456', 5000, '001')
console.log(clientAccount.getName()) // Client: Mariana
console.log('')


console.log(clientAccount.setDeposit(2000)) // Current Balance: $5000 
                                            // Deposit of $2000. 
                                            // Current Balance After Deposit: $7000
console.log('')


console.log(clientAccount.setWithdrawal(1000, 0.015)) // Current balance: $7000 
                                                      // Withdrawal of $1000. 
                                                      // Current Balance After nWithdrawal: $5985

console.log('')
console.log(clientAccount.getAccountInfos())
/* 
Account Information 
--------------------- 
Client: Mariana 
CPF: 123.456.789-00 
Email: any_email@mail.com 
Password: ###### 
Balance: $7000 
Agency: 001
*/
