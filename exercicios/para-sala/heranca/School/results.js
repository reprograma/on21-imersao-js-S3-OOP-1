import { PersonSchool } from "./PersonSchool.js";
import { Student } from "./Students.js";
import { Teacher } from "./Teachers.js";

const personJoice = new PersonSchool("Joice", "Alameda Santos, 221", "10/12/1996")
const studentCarla = new Student("Carla", "Travessa Tuiti, 596", "23/06/1994", "5C", ["Biologia", "Portugues", "Ciencias"])
const teacherAlvaro = new Teacher("Alvaro", "Rua Rosa dos Ventos, 23", "03/09/1985", "Geografia", "1º D")


console.log(personJoice)
console.log(studentCarla)
console.log(teacherAlvaro);