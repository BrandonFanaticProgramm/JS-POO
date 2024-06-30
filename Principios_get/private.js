// PONER PROPIEDADES PRIVADAS

class Perro {

    #Dueño;
    constructor(Dueño,Nombre,Edad) {

        this.#Dueño = Dueño;
        this.Nombre = Nombre;
        this.Edad = Edad;
    }

    getDueño() {

        return `${this.#Dueño}`;
    }

    changeName(name) {

        this.#Dueño = name;
        return `${this.#Dueño}`
    }
}


const myAnimal = new Perro("Brandon","Sally",18);
console.log(myAnimal.getDueño());
myAnimal.changeName("Lala");
console.log(myAnimal.getDueño());
