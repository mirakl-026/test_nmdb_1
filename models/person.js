module.exports = class Person {
    firstName;  
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log(`Hello, i'm ${this.firstName} ${this.lastName}`);
    }
}