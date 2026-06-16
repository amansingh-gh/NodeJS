console.log("Start exe")
setTimeout(() => {
    console.log("Logic exe")
}, 2000)
console.log("end exe")



// Drawback
let a = 10;
let b = 0;
setTimeout(() => {
    b = 20;
}, 2000)

console.log(a + b);




// Handling the Drawback
let x = 10;
let y = 0;

let WaitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(40);
    }, 2000);
})

WaitingData.then((data) => {
    y = data;
    console.log(x + y);
})