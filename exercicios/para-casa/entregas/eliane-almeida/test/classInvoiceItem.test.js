const { InvoiceItem } =  require('./resolucao/classInvoiceItem')

describe("Testar a classe InvoiceItem", () => {
    
    describe("Testar a existencia das instâncias da classe InvoiceItem", () => {
        it ("Testar se o produto posui um id", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.id = 2565
            const result = myInvoiceItem.id
            expect(result).toEqual(2565);
        });

        it ("Testar se o produto posui uma descrição", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.desc = ("Arroz")
            const result = myInvoiceItem.desc
            expect(result).toEqual("Arroz");
        });

        it ("Testar a quantidade de produto que foi comprada", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.qty = (3)
            const result = myInvoiceItem.qty
            expect(result).toEqual(3);
        });

        it ("Testar se o produto possuium valor unitário", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.unitPrice = (8.50)
            const result = myInvoiceItem.unitPrice
            expect(result).toEqual(8.50);
        });
    })

    describe("Testar o retorno dos métodos", () => {
        it ("Testar o retorno do id ", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.id = 2565
            const result = myInvoiceItem.getId(myInvoiceItem)
            expect(result).toEqual(2565);
        });

        it ("Testar o  retorno da descrição", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.desc = ("Arroz")
            const result = myInvoiceItem.getDesc(myInvoiceItem)
            expect(result).toEqual("Arroz");
        });

        it ("Testar o  retorno da quantidade de produto que foi comprada", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.qty = (3)
            const result = myInvoiceItem.getQty(myInvoiceItem)
            expect(result).toEqual(3);
        });

        it ("Testar o  retornar a nova quantidade doproduto", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.qty = (3)
            const result = myInvoiceItem.setQty(5)
            expect(result).toEqual(5);
        });

        it ("Testar o  retorno do valor unitario do produto", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.unitPrice = (8.50)
            const result = myInvoiceItem.getUnitPrice(myInvoiceItem)
            expect(result).toEqual(8.50);
        });
        it ("Testar o  retorno do novo valor unitario do produto", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.unitPrice = 2
            const result = myInvoiceItem.setUnitPrice(4)
            expect(result).toEqual(4);
        });
    })

    describe("Testar o valor total dos itens", () => {
        it ("Testar o retorno do id ", () => {
            const myInvoiceItem =  new InvoiceItem()
            myInvoiceItem.unitPrice = 2
            myInvoiceItem.qty = 2
            const result = myInvoiceItem.getTotal(myInvoiceItem)
            expect(result).toEqual(4);
        });

    })

    describe("retornar as informações do produto", () => {
        it ("Testar o retorno do produto na fatura ", () => {
            const myInvoiceItem =  new InvoiceItem(546, "Arroz", 10, 2)
            const result = myInvoiceItem.toString2(myInvoiceItem)
            expect(result).toEqual("InvoiceItem[id = 546, descrição = Arroz, quantidade = 10, Valor unitário = 2 ]");
        });

    })
})

