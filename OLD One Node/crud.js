// What is Buffer ::  Buffers only deal with binary data, and it can not be resizable.


const fs = require('fs');

//  =====================   CREATE  ===============================
// creating a file and input
// fs.writeFileSync("test1.txt", "Hey this is test 1 code"); // => it makes the file over in root directory


// Below line write on a file in existed 'crud' folder
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/test2.txt`;
fs.writeFileSync(filePath, "THis text is for test2")
console.log(path)

//  =====================   READ   =============================


fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})


//  =====================   UPDATE   =============================

fs.appendFile(filePath, ' this line comes form update process', (err) => {
    if (!err) console.log("Your file updated");
    else console.log("Something went wrong");
})



//  =====================   RENAME   =============================

fs.rename(filePath, `${dirPath}/renamedText2.txt`, (err) => {
    if (!err) console.log("Your file name updated");
})




//  =====================   DELETE   =============================

fs.unlinkSync(`${dirPath}/test2.txt`)



