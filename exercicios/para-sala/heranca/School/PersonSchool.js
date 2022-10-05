/*Crie uma classe Person com os atributos: - Nome; - Endereço; - Data de Nascimento; Em seguida, crie uma classe Student que terá as informações de Person com os atributos adicionais: - Turma; - Temas estudados; Para finalizar, crie uma classe Teacher que também terá as informações de Person com os atributos: - Grade; - Turmas; */ 

export class PersonSchool {
    constructor(name, address, dn){
        this.name = name;
        this.address = address;
        this.dn = dn;
    }
}