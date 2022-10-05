
export class Person{
    constructor(nome, email, cel){
        this.name = nome;
        this.email = email;
        this.cel = cel;
    }

    getName(){
        `O seu nome é ${this.name}`
    }
}

module.exports = Person;