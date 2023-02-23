class Animal {

constructor(name, age) {
this.name = name;
this.age = age;
}

}

class Sheep extends Animal {

    makeSound() {
        console.log("Beep");
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

}

class Calculator {

    static Add(x, y) {
        return x + y;
    }
}



let instance = new Animal("Animal Name", 17);
let sheep = new Sheep("Sheep 1", 2);
let sum = Calculator.Add(1,2);

