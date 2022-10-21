/*Herança: Classes "filhas" que herdam atributos da classe "mãe" */

export class Person {
    constructor(name, email, cel){
        this.name = name;
        this.email = email;
        this.cel = cel;
    }

    getName() {
        return `Seu nome é ${this.name}`
    }
}
