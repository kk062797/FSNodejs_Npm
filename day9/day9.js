/*
require("dotenv").config();

const data = require("./freedata.json");
//console.log(process.env);


//data is JS object
//console.log(process.env);
console.log(data);

//convert JS object into JSON:
const jsonData = JSON.stringify(data);
console.log(jsonData);
//converts json into JS object


console.log(JSON.parse(jsonData));
*/
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString(){
        return `Employee name is ${this.name} and age is ${this.age}`;
    }
}

const e1 = new Employee("Kanishk", 27);
//console.log(e1);
//console.log(`Employee object is ${e1}`);
//console.log(`Employee object is ${e1.toString()}`);

function print(...a){
    console.log(a[0]);
    console.log(a[4]);
}
function print1(){
    console.log(print1.arguments[3]);
}
//print(1,2,3,4,5,6,7,8,9,0);
print1(1,2,3,"Kakku",4,5,6,7,8,9,0);
const arr = [1, 2, 3, 4];
//console.log(arr);
//console.log(...arr);