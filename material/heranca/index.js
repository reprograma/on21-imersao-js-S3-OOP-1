
/*Herança

A herança permite que as classes herdem características de outras classes.
Dito de outra forma, as classes mãe estendem atributos e comportamentos para classes filhas.
A herança suporta a reutilização. 

Os benefícios da herança são que os programas podem criar uma classe genérica e,
em seguida, criar classes mais específicas a partir da classe genérica, conforme necessário.
Isso simplifica a programação geral, porque em vez de recriar a estrutura da Person várias vezes, as classes filhas obtêm acesso automaticamente
às funcionalidades de sua classe mãe.
*/


import { Developer } from './Developer.js';
const createPerfilDani = new Developer("Danielle", "dani@email.com", "(11)9999-2212", ["html", "css", "Javascript"]);

console.log(createPerfilDani.getName());

