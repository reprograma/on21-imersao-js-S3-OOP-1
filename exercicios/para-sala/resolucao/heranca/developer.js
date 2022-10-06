//import { Person } from "./person.js"
const Person = require('./person.js');

class Developer extends Person{
    constructor(name,email, cel,skills)
    { super(name,email,cel);
        this. skills =skills;
    }
}

module.exports = Developer;
