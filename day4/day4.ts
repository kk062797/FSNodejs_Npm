/*
let fName = "Kakku";

const salary = 5000;

var officeAdd = "Bangalore";

//functions

function calSal(a: number): number {
    return a + 100;
}

const calSal1 = function (a: number): number {
    return a + 100;
}
const calSal2 = (a: number): number => a + 100;

calSal(500);
calSal1(200);
const output = calSal2(400);
//calSal("Kanshk");
//calSal("Kakku",67);
//calSal(() =>{console.log("Kakku")});
*/
/*
function add(a: number, b: number = 6): number {
    return a + b;
}

const addRes: number = add(4, 8);
console.log(addRes);

const subtract = function (a: number, c: number = 6, d: number, b?: number): number {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    return a - b - c - d;
}
const subRes = subtract(4, 5, 6, 7);
console.log(subRes);
*/

const f1 = function (a: number, cb: Function) {
    console.log(a);
    cb();
}

//f1(5, () => { console.log("Hello World!") });
f1(5, (a, b) => { console.log(`Hello World! ${a} ${b}`) });
//f1(5,6);

//Functions as types
//custom data types

type stringORnumber = string | number;
let fName: stringORnumber;
fName = 5;







