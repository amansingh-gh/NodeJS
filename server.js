const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();
const passport = require('./auth')


const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.json());

// Middleware
const logRequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);


const localAuthMiddleware = passport.authenticate('local', {session : false}) 
app.use(passport.initialize());

app.get('/', localAuthMiddleware ,(req, res)=>{
   res.send("This is home page");
})

// Importing routes
const menuRoutes =  require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');

// use the routes
app.use('/menu',menuRoutes);
app.use('/person', personRoutes)


app.listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`);
})