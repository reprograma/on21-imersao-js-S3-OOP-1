class InvoiceItem {


    constructor(id, description, quantity, unitPrice) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;  
        this.unitPrice = unitPrice;
        
      }
    
   getId(){

    return this.id;

   }

   getDesc() {

    return this.description;

   }

   getQty() {

    return this.quantity;

   }


   setQty(qtd){
       this.quantity = qtd;
   }

   getUnitPrice(){
       return this.unitPrice;
   }

   setUnitPrice(unitPrice){
    this.unitPrice = unitPrice
}

   getTotal(){
    return this.unitPrice * this.quantity;
   }

   toString(){
       return console.log("ID: " +newProduct.getId()
      
       + "\n" + "Description: " + newProduct.getDesc()
       + "\n" + "Quantity: "  +newProduct.getQty()
       + "\n" + "Unit Price: "  +this.getUnitPrice()
       + "\n" + "Total: "  +this.getTotal())
   }
}
  
const newProduct = new InvoiceItem(123, "Produto x", 3, 3.99);


newProduct.toString()