class Employee {
    #empId: string;

    constructor(empId: string) {
        this.#empId = empId;
    }
    public setEmpid(empId: string): void {
        this.#empId = empId;
    }
    public getEmpId() {
        return this.#empId;
    }
}

const emp1 = new Employee("001");
//console.log(emp1);
//emp1.setEmpid("002");
console.log(emp1.getEmpId());