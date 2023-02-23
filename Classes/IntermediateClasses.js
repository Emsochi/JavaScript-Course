

class Human {

    constructor(firstName, lastName, age) {
        this.firatName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

}

class Employee extends Human {

    constructor(firstName, lastname, age, adress) {
        super(firstName,lastname,age);
        this.adress=adress;
    }

    work () {
        console.log("work");
    }
}
