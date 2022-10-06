class Person{
    constructor(name,email, cel)
    {
        this.name = name ;
        this.email =email;
        this.cel = cel;
    }

    getName()
    {
        return `A descrição é  ${this.name}`
    }
}

module.exports = Person ;