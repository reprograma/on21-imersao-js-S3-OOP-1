import { Person } from './Person.js'

export class Developer extends Person {
    constructor(name, email, cel, skills) {
        super(name, email, cel) //pesquisa as propriedades que possuem em Person

        this.skills = skills
    }

    getName(){
        return `O seu nome é ${this.name}`
    }
}