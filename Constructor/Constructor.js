// constructor in javascript

// Example

// Create objects

function Dog(name,age,color) {

    this.name = name;
    this.age = age;
    this.color = color;
    this.sayHello = () => {
        console.log(`${"Hi my name is"} ${this.name}` );
    }
}

// Here is used the word "new" for create the new dog as example

const myDog = new Dog("Sally",10,"white");

const Dog2 = new Object(); // This can create new object from the object of javascript called --> Object



