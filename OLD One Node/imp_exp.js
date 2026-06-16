// This type of importing and exporting is not valid in node js.
// export let x = 50;
// export let y = 70


// import { x } from "index2.js";
// console.log(x);




// we can importing like this in node js. 
// const imp_exp2 = require('./imp_exp2');
// console.log(imp_exp2.z());


const arr = [2,4,6,57,8,9,31,20];
let res = arr.filter((item)=>{
    return item >= 30;
})
console.log(res)
