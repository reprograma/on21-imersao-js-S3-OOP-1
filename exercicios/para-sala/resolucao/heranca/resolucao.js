/*Herança: Classes "filhas que herdam atributos da classe "mãe*/

class Person {
    constructor(name, email, cel) {
        this.name = name;
        this.email = email;
        this.cel = cel;
    }
}

class Developer extends Person {
    constructor(name, email, cel, skills) {
        super(name, email, cel) //pesquisa as propriedades que possuem em Person

        this.skills = skills
    }

    getName(){
        return `O seu nome é ${this.name}`
    }
}

const createPerfilDani = new Developer("Daniela", "dani@email.com", "(11) 9999-2212", ["html", "css", "Javascript"])

console.log(createPerfilDani)
console.log(createPerfilDani.getName())