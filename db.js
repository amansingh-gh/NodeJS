const mongoose = require('mongoose')
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDB Server");
})

db.on('disconnected',()=>{
    console.log("Server Disconnected");
})

db.on('error',(err)=>{
    console.log('Mongo Connection error' ,err);
})

module.exports=db;