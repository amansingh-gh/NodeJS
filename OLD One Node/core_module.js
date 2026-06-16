// Core Module : Individulas that are included with the service like API call, buffer, etc.
// Global Module: It is a type of module which don't have to import. like: console
console.log("HEllo World");
// Non Global Module : We need to define first then we can use. like fileSystem.
const fs = require('fs');
fs.writeFileSync("new.txt", "HEy SOS");

// To check which directory you are using
console.log("You are in this directory: ", __dirname);

// To check in which you are currently using :
console.log("File name is : ", __filename);