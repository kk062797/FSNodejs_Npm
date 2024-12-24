let firstName: string = "Kakku";
let age: number = 27;
let isValid:boolean = true;

console.log(`${firstName} ${age} ${isValid}`);

//arrays

const marks = [34,65,45,56];
marks.push(67);
//marks.push("payal");

//Functions

function getName(firstName:string):string{
    return firstName;
}
let res:string = getName(firstName);
console.log(res);
//////////// return void type//////////////
function getName1(firstName:string):void{
    console.log(firstName);
}
let res1:void = getName1("Kakku");
console.log(res1);

//objects

let employee :{name:string,age:number}={name:"Kakku",age:27};
console.log(employee);