type stringORnumber = number | string;
let fname: stringORnumber = "Kakku";

type functionWithTwoInput = (a: number, b: number) => number;

type functionWithNumberArray = (a: number[]) => number

type objectWthNameAndAge = { firstName: string, age: number }

const obj1:objectWthNameAndAge={
    firstName :"Kanishk",
    age: 27
}
function calculate(n1: number, n2: number, cb: functionWithTwoInput,d: objectWthNameAndAge): functionWithNumberArray {
    const res = cb(n1, n2);
    console.log(`Result is ${res}`);
    function analyse(a: number[]): number {
        return a[0] + a[1];
    }
    function analyse2(a: number[]): void {

    }
    return analyse;
}

const sum: functionWithTwoInput = function (a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function print() {
    console.log("Hello world!");
}

const val = calculate(4, 6, sum,obj1);
console.log(val);