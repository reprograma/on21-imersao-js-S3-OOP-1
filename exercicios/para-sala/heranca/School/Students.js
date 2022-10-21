/*Crie uma classe Person com os atributos: - Nome; - Endereço; - Data de Nascimento; Em seguida, crie uma classe Student que terá as informações de Person com os atributos adicionais: - Turma; - Temas estudados; Para finalizar, crie uma classe Teacher que também terá as informações de Person com os atributos: - Grade; - Turmas; */ 

import { PersonSchool } from "./PersonSchool.js";

export class Student extends PersonSchool {
    constructor(name, address, dn, group, theme){
        super(name, address, dn);

        this.group = group;
        this.theme = theme;
    }
}