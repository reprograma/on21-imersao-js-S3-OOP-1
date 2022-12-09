
/*Herança

A herança permite que as classes herdem características de outras classes.
Dito de outra forma, as classes mãe estendem atributos e comportamentos para classes filhas.
A herança suporta a reutilização. 

Os benefícios da herança são que os programas podem criar uma classe genérica e,
em seguida, criar classes mais específicas a partir da classe genérica, conforme necessário.
Isso simplifica a programação geral, porque em vez de recriar a estrutura da Person várias vezes, as classes filhas obtêm acesso automaticamente
às funcionalidades de sua classe mãe.

Herança são classes "filhas" que herdam atributos da classe "mãe"
*/

/*
Antes da separação em arquivos

// Classe mãe 
class Person { 
    constructor(name, email, cel){ 
        this.name = name;
        this.email = email;
        this.cel = cel;
    }

    getName(){
        return `O nome é ${this.name}`;
    }
}

// Classe filha
// A classe Developer vai conter (extends) informações da Person
class Developer extends Person {
    // constructor vai pegar os atributos
    constructor(name, email, cel, skills) { 
        // super vai fazer referência a classe Person, ele vai mapear/pesquisar as propriedades na Person 
        // é pelo "super" que vamos pegar as informações do Person
        super(name, email, cel);

        this.skills = skills;
    }
}
const createPerfilDani = new Developer("Danielle", "dani@email.com", "(11)9999-2212", ["html", "css", "Javascript"]);
console.log(createPerfilDani);
console.log(createPerfilDani.getName());

*/


import { Developer } from './Developer.js';
const createPerfilDani = new Developer("Danielle", "dani@email.com", "(11)9999-2212", ["html", "css", "Javascript"]);

console.log(createPerfilDani.getName());


