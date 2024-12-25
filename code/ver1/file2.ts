function calcAge(yearofBirth:number){
    return 2024 - yearofBirth;
}

const age1 = calcAge(1997);
console.log(age1);

export {calcAge};