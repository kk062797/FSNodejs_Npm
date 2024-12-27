class Employee {

    public firstName: string;
    #yob: number;
    static empType: string;

    constructor(firstName: string, yob: number) {
        this.firstName = firstName;
        this.#yob = yob;
    }

    public static getInfo() {
        Employee.empType = "Doctor";
        //this.firstName = "Kakku";
    }

    public getFullName(lastName: string): string {
        Employee.empType = "Navy";
        return `${this.firstName} ${lastName}`;
    }

    public calculateAge(): number {
        return 2024 - this.#yob;
    }
}

const emp1: Employee = new Employee("Kanishk", 1997);
//emp1.#yob = 78;
console.log(emp1.getFullName("Kumar"));
console.log(emp1.calculateAge());
Employee.empType = "Engineer";

