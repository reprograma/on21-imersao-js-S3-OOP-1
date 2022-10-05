import { Person } from './Person.js';

export class Developer extends Person{
    constructor(name, email, celular, skills){
        super(name, email, celular);

        this.skills = skills;
    }

    getName(){
        return `O seu nome é ${this.name}`;
    }
}