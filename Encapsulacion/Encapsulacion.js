// ENCAPSULACION

// EXAMPLE 1

function Company(name) {
    let employeers = [];
    let numberEmployeers = 0;
    this.name = name;

    this.addEmployeers = function (nameEmployeer) {
        employeers.push(nameEmployeer);
    }

    this.GetNumberEmployeers = function () {

        numberEmployeers = employeers.length;
        return numberEmployeers;
    }
}

const company1 = new Company("Yamaha");
company1.addEmployeers("Brandon");
company1.addEmployeers("Luisa");
console.log(company1.GetNumberEmployeers());
console.log(company1.employeers) // ENCAPSULADO


