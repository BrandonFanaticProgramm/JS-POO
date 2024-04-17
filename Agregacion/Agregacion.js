// AGREGATION

// EXAMPLE 1 ADD INSTANCE OF CLASS TO A OBJECT

class Person {

    constructor(name,age,id) {

        this.name = name;
        this.age = age;
        this.id = id;
    }
}

const Company = {
    name : "PROGRAMADORES TECH",
    employeers : [],
}

const user = new Person("Jay Bahamon",19,1015069872);
const user2 = new Person("Ryan Marquez", 18,1015874526);

Company.employeers.push(user);
Company.employeers.push(user2);

console.log(Company);



