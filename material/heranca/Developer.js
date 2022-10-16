import { Person } from './Person.js';

export class Developer extends Person {
    constructor(name, email, skills){
        super(name, email, cel);
        /* A superpalavra-chave pode ser usada de duas maneiras: 
        como uma "chamada de função" ( super(...args)), ou como uma "pesquisa de propriedade" ( super.prope super[expr]).
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super  */

        this.skills = skills;
    }
}

