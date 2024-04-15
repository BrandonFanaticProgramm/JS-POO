class Person {

    constructor(name,age,id) {

        this.name = name;
        this.age = age;
        this.id = id; 
    }
}

// RELATION

const user = new Person("Brandon Alexis", 18,122234);
const user1 = new Person("Jaider Perez",19,899992);
user.brother = user1;
console.log(user.brother.name);

