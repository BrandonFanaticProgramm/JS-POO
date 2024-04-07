// This

// This refers to the properties of an Object in it's context.

// Example 1

const userClient = {

    name:"Brandon Alexis",
    age:18,
    work: false,
    address : "CRA 42B #111 INT 202",
    amount : 2300000,
    ShowName() {
        return this.name;
    }
}

// let UserNameClient = userClient.ShowName();
// console.log(UserNameClient);


// Example 2


const MyAccount = {

    titularName : "Joe Harrison",
    age:19,
    id:24854,
    amount: 200,
    addAmount(amountAdd) {

        this.amount += amountAdd;

        return this.amount;
    }
}

console.log(MyAccount.amount); // First account

MyAccount.addAmount(1200);

console.log(MyAccount.amount); // Second account