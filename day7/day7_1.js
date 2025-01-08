class Engineer {
    department;
    yob;
    constructor(department, yob) {
        this.department = department;
        this.yob = yob;
    }

    calcAge(name) {
        let age = 2024 - this.yob;
        return age;
    }
}

let eng1 = new Engineer("QA", 1980);
let age = eng1.calcAge("akhil");
console.log(`age is ${age}`);

let firstName = "Akhil";
//firstName.charAt()

export { Engineer };