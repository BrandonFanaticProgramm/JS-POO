// Method 1

//Overloading

function CountItems(x) {
  return x.toString().length;
}

console.log(CountItems(11));
console.log(CountItems("Hello"));

function Sum(x = 0, y = 0, z = 0) {
  return x + y;
}

console.log(Sum(10, 30, 20));
console.log(Sum(101, 10));

// parametric Polymorfism

function Stack() {
  this.stack = [];

  this.push = (item) => {
    this.stack.push(item);
  };
}

const myFirstStack = new Stack();
myFirstStack.push("Meat");
console.log(myFirstStack);

const myFirstStack2 = new Stack();
myFirstStack2.push(1010);
console.log(myFirstStack2);

// Polymorfism SubType

class Person {
  constructor(name, lastname, age, id) {
    this.name = name;
    (this.lastname = lastname), (this.age = age);
    this.id = id;
  }
}

class Employeer extends Person {
  constructor(place) {
    super(name,lastname,age, id, place);
    this.place = place;
  }
}

const myPerson = new Person("Brandon","Quintero",18, 1015069872);
const myEmployeer = new Person("Ryan","Ray",23,1010101001);

function WriteName(o) {

    console.log(`${o.name} ${o.lastname}`)
}

WriteName(myPerson);
WriteName(myEmployeer);
