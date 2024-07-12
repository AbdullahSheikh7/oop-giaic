import { Person, Student } from "./classes.js";

let man = new Person;
man.askQuestion(1);
console.log(`Man has personality type: ${ man.getPersonality() }`);

let name = "Abdullah";
let myStudent = new Student;
myStudent.Name = name;
console.log(`Student name is ${myStudent.Name} and his personality is ${myStudent.getPersonality()}`);

