// METODO CREADO DIRECTAMENTE EN LA CLASE Y NO LA INSTANCIA

class Doctor {

    constructor(nombre,edad,telefono,hospital) {

        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.hospital = hospital;

    }

    static informacionClase() {

        return `Estas en la clase de doctor`;
    }

    Bienvenida() {

        return `Hola ${this.nombre}`;
    }

}

const myDoctor = new Doctor("Brandon",15,3218774474,"Pablo Tobon");
console.log(myDoctor.Bienvenida()); // DE LA INSTANCIA
console.log(Doctor.informacionClase()) // DE LA CLASE DIRECTAMENTE