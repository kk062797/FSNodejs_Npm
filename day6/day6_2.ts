abstract class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
    public printInfo(name: string): void {
        console.log(`Info is ${name}`);
    }

    abstract runBusiness(): void;
}

class Man extends Person {

    constructor(name: string) {
        super(name);
    }
    runBusiness(): void {
        console.log("Business")
    }
}

const m1: Person = new Man("Kakku");
m1.printInfo("Kanishk");
m1.runBusiness();