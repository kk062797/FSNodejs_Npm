const path = require('path');

//console.log("Hello");

//console.log(process.cwd());

//console.log(process.env);

//console.log(process.env.Java);

//console.log(process.argv[3]);

//console.log(process.argv0);

//console.log(path.basename(__dirname));

//console.log(__dirname);
//console.log(__filename);
//console.log(path.dirname(__dirname));

//console.log(path.extname(__filename));
//console.log(path.isAbsolute(__filename));
//console.log(path.isAbsolute("../day6/day6_1.ts"));

//console.log(path.parse(__dirname));
//console.log(path.parse(__filename));
/*
const pathobj = {
    root: 'c:\\',
    dir: 'c:\\Users\\kanis\\Documents\\PodTest\\TypeScript\\FSTypeScript\\day8',
    base: 'day8_2.js',
    ext: '.js',
    name: 'day8_2'
}
console.log(path.format(pathobj));
*/

let loc1 = path.relative("C:\\Users\\kanis\\Documents\\PodTest\\TypeScript\\FSTypeScript\\day6",
    "C:\\Users\\kanis\\Documents\\PodTest\\TypeScript\\FSTypeScript\\day8");

console.log(loc1);


