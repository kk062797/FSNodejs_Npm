//tuples
const a1 :[string,number] = ["Kakku", 27];
console.log(a1[0]);

//any
let a2 : any = 4;
console.log(a2);
a2 = "Kakku";
a2 = false;
a2 = [2,"Kakku",true,undefined];
a2 = {name:"Kakku",age:27}

//Type alasis
//create your own custom datatype
type stringORnumberORboolean = string | number | boolean;

//union

let a3 : stringORnumberORboolean = 65;
a3 = "Kakku";
a3 = true;

let a4 : stringORnumberORboolean = "Kanishk";
function f1(): stringORnumberORboolean{
    return "Kakku";
}

const f3 = ()=>{console.log("Hello World!")};
f3();