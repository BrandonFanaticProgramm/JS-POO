// CLASS IN JAVASCRIPT

// EXAMPLE 1

class Person {

    constructor(name,age,id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    Greeting() {

        console.log("Hello ", this.name);
    }
}
const myPerson = new Person("Brandon",13,10198483);
myPerson.Greeting();

//EXAMPLE 2

const Car = class {

    constructor(model,year,id) {
        this.model = model;
        this.year = year;
        this.id = id;
    }

    ShowId() {

        return this.id;
    }

}

const MyCar = new Car("XRDS222",1989,1);
console.log(MyCar.ShowId())