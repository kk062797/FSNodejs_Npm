abstract class Mammal {

    public eat(food: string): void {
        console.log(`Mammal is eating ${food}`);
    }

    abstract talk(language: string): void;
}

interface LivingBeing {
    lastName: string;
    breathe(): void;
}

interface Animal extends LivingBeing {
    firstName: string;
    eat(food: string): void;
    talk(language: string): void;

}

class Dog implements Animal {
    firstName: string;
    lastName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
        this.lastName = "Albert";
    }
    eat(food: string): void {
        console.log(`Dog is eating ${food}`);
    }
    talk(language: string): void {
        console.log(`Dog is talking ${language}`);
    }
    walk(): void {
        console.log(`Dog is walking`);
    }
    breathe(): void {
        console.log(`Dog is breathing`);
    }
}

class Cat implements Animal {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(food: string): void {
        console.log(`Cat is eating ${food}`);
    }
    talk(language: string): void {
        console.log(`Cat is talking ${language}`);
    }
    sleep(): void {
        console.log(`Cat is sleeping`);
    }
    breathe(): void {
        console.log(`Cat is breathing`);
    }
}

const a1: Animal = new Dog("Tom");
a1.eat("Biscuit");
a1.talk("Hindi");
//let dog: Dog = a1 as Dog; // Down Casting
//dog.walk();