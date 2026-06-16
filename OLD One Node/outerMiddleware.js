module.exports =  reqFiltr = (req, resp, next)=>{
    if(!req.query.age){
        resp.send('Please enter your age');
    }
    else if(req.query.age<18){
        resp.send('You are below 18')
    }
    else{
        next();
    }
}