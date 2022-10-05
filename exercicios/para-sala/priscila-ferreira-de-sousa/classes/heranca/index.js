class Person {
    constructor(name, email, cel){
        this.name = name;
        this.email = email;
        this.cel = cel;
    }
}

class Developer extends Person{
    constructor(name, email, cel, skills){
        super(name, email, cel);
        this.skills = skills;
    }
}

const creartePerfilDani = new Developer("Danielle", "dani@gmail.com", "(11)9999-2212", ["html", "css", "Javascript"]);

console.log(creartePerfilDani);