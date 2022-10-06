//Herança: Classes "filhas" que herdam atributos da classe "mãe"

import { Developer } from './Developer.js';
const Person = require("./Person")

const createPerfilDani = new Developer("Daniele", "dani@email.com", "(11)9999-2212", ["html", "css", "js"])
console.log(createPerfilDani.getName());