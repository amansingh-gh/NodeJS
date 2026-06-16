const express = require('express');
const reqFiltr = require('./outerMiddleware');
const app  =  express();

// const reqFiltr = (req, resp, next)=>{
//     if(!req.query.age){
//         resp.send('Please enter your age');
//     }
//     else if(req.query.age<18){
//         resp.send('You are below 18')
//     }
//     else{
//         next();
//     }
// }
// app.use(reqFiltr)

router.use(reqFiltr);

app.get('/',reqFiltr ,(req, resp)=>{
    resp.send('Welcome')
})

route.get('/profile' ,(req, resp)=>{
    resp.send('Welcome Profile')
})

app.listen(3100);