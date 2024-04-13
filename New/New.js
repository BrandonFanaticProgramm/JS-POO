// Importance of the word new --> Create Object

// When we use the object without "New" that saves in --> window.

// Example 1

function Chair(height, width, color, material) {
    // "use strict"; // Change the "this" to "Undefined"

    this.height = height;
    this.width = width;
    this.color = color;
    this.material = material;

    return this.height;
}

const mySilla = Chair(100, 120, "red", "nothing"); // Saved in window object

// console.log(Chair);

// Example 2

("use strict");

const Company = {
    Employeer : function(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    },
};


const MyEmployeer = new Company.Employeer("Brandon",18,10150698972);

console.log(MyEmployeer);

// is important that we use "New" to create a new instance of the object