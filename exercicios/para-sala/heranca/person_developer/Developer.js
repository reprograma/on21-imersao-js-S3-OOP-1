import { Person } from "./Person.js";

export class Developer extends Person {
    constructor(name, email, cel, skills){
        super(name, email, cel);

        this.skills = skills;
    }
}



