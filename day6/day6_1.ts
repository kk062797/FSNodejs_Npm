class Animal {
    public aName: string;
    private type: string;
    protected color: string;

    constructor(aName: string, type: string, color) {
        this.aName = aName;
        this.type = type
        this.color = color;
    }

    public walk(): void {
        console.log(`${this.aName} Animal is walking`);
    }
    public eat(): void {
        console.log(`${this.aName} Animal is eating`);
    }
}

class Dog extends Animal {

    constructor() {
        super("Puppy", "GM", "Brown")
    }

    public sleep() {
        console.log(`${this.aName} Dog is sleeping`);
        console.log(this.color);
    }
    public eat(): void {
        console.log(`${this.aName} Dog is eating`);
    }
}
/*
const d1 = new Dog();
d1.eat();
d1.walk();
d1.sleep();
*/
/*
const a1 = new Animal("Puppy", "GM", "Brown");
a1.aName;
a1.eat();
*/
//a1.type;
//a1.color;

const a1:Animal = new Dog();
a1.eat();
a1.walk();