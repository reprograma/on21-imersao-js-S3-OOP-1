import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";

const student1 = new Student("Fer", "R. 123", "15/08/1998", "Turma A", [
  "Geografia",
  "Ciencias",
]);

const teacher1 = new Teacher(
  "Juju",
  "R. Amoreiras",
  "20/05/1995",
  "Grade X",
  "Turma B"
);

console.log(`Student: nome: ${student1.nome}`);
console.log(`Teacher: nome: ${teacher1.nome}`);
