
class InvoiceItem {
  constructor (id, description, quanty, price){
    this.id = id;
    this.description = description;
    this.quanty = quanty;
    this.price = price
  }
  getId(){
    return `O ID do produto é ${this.id}`
  }
  getDescription(){
    return `A descricao do produto é: ${this.description}`
  }
  getQuanty(){
    return `A quantidado do produto disponível é de: ${this.quanty} unidades`
  }
  getPrice(){
    return `O preço unitário do produto é R$${this.price}`
  }
  increaseValue(value){
    const newValue = this.price + value
    return `Você aumentou R$${value} do valor do produto, e seu novo valor é de R$${newValue}`
  }
  decreaseValue(value){
    const newValue = this.price - value
    return `Você diminuiu R$${value} do valor do produto, e seu novo valor é de R$${newValue}`
  }
  totalPrice(){
    const totalPrice = this.price * this.quanty
    return `Seu valor total por unidade é de R$${totalPrice}`
  }
}

const item = new InvoiceItem("1", "mesa alta de cor branca", "10", "200")
console.log(item)
console.log(item.getId())
console.log(item.getDescription())
console.log(item.getPrice())
console.log(item.getQuanty())
console.log(item.totalPrice())
console.log(item.increaseValue(30))
console.log(item.decreaseValue(10))


