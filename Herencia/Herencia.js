// HERENCE

// EXAMPLE 1

// function Person(name, lastaname, id) {
//     this.name = name;
//     this.lastname = lastaname;
//     this.id = id;
//     this.addres = {
//         street: "345 AV JHONSON",
//         location: "LA",
//         country: "USA",
//     };
// }

// function Programmer(language) {
//     this.language = language;
// }

// const MyProgrammer = new Programmer("Javascript");

// MyProgrammer.prototype = new Person("Brandon Alexis", "Quintero", 112);
// console.log(MyProgrammer.prototype.name);


class Person {
    constructor(name, lastname, id) {
        this.name = name;
        this.lastname = lastname;
        this.id = id;
    }
}

class Programmer extends Person {
    constructor(name,lastname,id,languague) {
        super(name,lastname,id);
        this.language = languague;
    }
}

const MyProgrammer = new Programmer("Brandon Alexis","Quintero",1015069872,"Javascript");
console.log(MyProgrammer);