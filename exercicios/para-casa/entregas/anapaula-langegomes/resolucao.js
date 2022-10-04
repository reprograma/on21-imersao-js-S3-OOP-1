/*Herança: Classes "filhas" que herdam atributos da classe "mãe" */

class Person {
    constructor(name, email, cel){
        this.name = name;
        this.email = email;
        this.cel = cel;
    }
}

class Developer extends Person {
    constructor(name, email, cel, skills){
        super(name, email, cel);

        this.skills = skills;
    }
}

