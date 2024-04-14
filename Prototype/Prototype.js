// PROTOTYPE

// EXAMPLE 1

function Persona(name,lastname) {

    this.name = name;
    this.lastname = lastname;
    this.displayName = function()  {

        return `${this.name} ${this.lastname}`;
    }
}
const person1 = new Persona("Brandon","Quintero");
const person2 = new Persona("Maria","Suarez");
person1.salary = 23000;
// person2.greeting = function() {
//     console.log(`Hello I"m ${this.name}`);
// }
Persona.prototype.greeting = function () {

    console.log("Hello I'm",this.name);
} 
console.log(person1);
console.log(person2)
person2.greeting();
// person1.greeting();


// EXAMPLE 2 --> MODIFY THE EXISTENT PROTOTYPE 

const MyName = new String("Brandon Alexis Quintero");
String.prototype.value = function () {
    return 1;
};
console.log(MyName.value());

"Brandon".value()