const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.get('/',(req, res)=>{
   res.send("This is home page");
})

// Importing routes
const menuRoutes =  require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');

// use the routes
app.use('/menu', menuRoutes);
app.use('/person', personRoutes)


app.listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`);
})
