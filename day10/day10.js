const fs = require('fs');
const path = require('path');

/* Create directory in boyh Sync way and Async way
const dirPath = path.resolve(__dirname, "day11") // absolute path
console.log(`Create a new directory`);

//fs.mkdirSync(dirPath);  //Sync way

fs.mkdir(dirPath, (err) => {
    if (err) {
        console.log(`err occured ${err}`);
    } else {
        console.log(`directory created successfully`);
    }
}); //Async way
console.log(`New directory created`);
*/
/* Read Directory in both Sync & Async way
const readDirPath = path.resolve(__dirname, "../day6") // absolute path

//const content = fs.readdirSync(readDirPath,{recursive:true});  //Sync way
console.log(`Started reading a directory`);
fs.readdir(readDirPath, { recursive: true }, (err, files) => {
    if (err) {
        console.log(`error occured ${err}`);
    } files.forEach((val) => {
        console.log(`File name is: ${val}`)
    })
})
console.log(`Reading directory completed`);
//console.log(content);
*/
/* Deleting empty directory folder
const removeDirPath = path.resolve(__dirname, "day11") // absolute path

//fs.rmdirSync(removeDirPath, { recursive: true, force: true });

fs.rmdir(removeDirPath, { recursive: true, force: true }, (err) => {
    if (err) {
        console.log(`error occured ${err}`);
    } else {
        console.log(`Deleted folder`);
    }
})
    */
/* File exists or not
const dirPath = path.resolve(__dirname, "day11") // absolute pathdirectory 

//const isExist = fs.existsSync(dirPath); //Sync way

fs.exists(dirPath, (val) => {
    console.log(`File exists: ${val}`);
})
//console.log(isExist);
*/
////////////////FILES////////////////////////
/* Create File
const fileToBeCreated = path.resolve(__dirname, "f1.txt");
const fileToBeCreated1 = path.resolve(__dirname, "f1.json");
const data = `
My name ia Kanishk
I work as Software Test Engineer
I live in Bangalore`

const jsonOject = {
    fname : "Kanishk",
    organization : "ABC Technology",
    place : "Bengaluru",
    students: ["Velan", "Anant", "Hasan", "Harsh"]
}
const jsonData = JSON.stringify(jsonOject)

//fs.writeFileSync(fileToBeCreated, data);

fs.writeFile(fileToBeCreated1,jsonData,(err)=>{
    if(err){
        console.log(`Error Occured ${err}`);
    }else{
        console.log(`able to write`);
    }
})
*/
/* Read File
const fileToBeRead = path.resolve(__dirname, "f1.txt");
const fileToBeRead1 = path.resolve(__dirname, "f1.json");

//const res = fs.readFileSync(fileToBeRead1, { encoding: "utf8" });
//console.log(res);

fs.readFile(fileToBeRead1, (err, data) => {
    if (err) {
        console.log(`Error Occured ${err}`);
    } else {
        console.log(`Data ${data}`);
    }
})
*/
/* Append File
const fileToBeAppend = path.resolve(__dirname, "f1.txt");
const fileToBeAppend1 = path.resolve(__dirname, "f1.json");

//fs.appendFileSync(fileToBeAppend,"\nMy Organization name is ABC Technology"); //Sync way

fs.appendFile(fileToBeAppend,"\nI have almost 4 yrs of Exp",(err)=>{
    if(err){
        console.log(`Error Occured ${err}`);
    }else{
        console.log(`Append Done`);
    }
})
*/
/* Delete File
const fileToBeDeleted = path.resolve(__dirname, "f1.txt");
const fileToBeDeleted1 = path.resolve(__dirname, "f1.json");

//fs.unlinkSync(fileToBeDeleted);

fs.unlink(fileToBeDeleted1,(err)=>{
    if(err){
        console.log(`Error Occured ${err}`);
    }else{
        console.log(`Deletion Done`);
    }
})
*/
/* Delete file via 'rm'
const fileToBeDeleted = path.resolve(__dirname, "dummy.txt");

//fs.rmSync(fileToBeDeleted)

fs.rm(fileToBeDeleted, (err) => {
    if(err){
        console.log(`Error Occured ${err}`);
    }else{
        console.log(`Deletion Done`);
    }
})
*/
/* File Exists or not
const fileToBeDeleted = path.resolve(__dirname, "dummy.txt");

const isExists = fs.existsSync(fileToBeDeleted);
console.log(isExists);
*/
