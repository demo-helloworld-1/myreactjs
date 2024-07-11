// File System Module

var fs = require('fs');// File System Module, Industry best practices -> Object name should be same as module name.

fs.writeFileSync("Programs/NodeJS Events/Test.txt","Hello World");

console.log(fs.readFileSync("Programs/NodeJS Events/Test.txt").toString())


// Path Module

const { writeFile } = require("fs");
var path = require("path");

var websiteHome = "Desktop/Bucky//thenewbosten/index.html"
var websiteAbout= "Desktop/Bucky//thenewbosten/about.html"

console.log(path.normalize(websiteHome)); //Output: Desktop\Bucky\thenewbosten\index.html
console.log(path.basename(websiteAbout)); //Output: about.html
console.log(path.normalize(path.dirname(websiteAbout))); //Output: Desktop\Bucky\thenewbosten
console.log(path.extname(websiteHome)); //Output: .html



// Difference between setTimeout and setInterval is setTimeout executes only once where as setInterval will be recursively execute the statement at the given interval of time.
setInterval(function(){
    console.log("Helloworld");
},2000);

//This returns the current working directory and current file name in the code.
console.log(__dirname);
console.log(__filename);
