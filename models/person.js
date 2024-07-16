const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    age:{
        type:Number,
        required: true
    },
    work:{
        type : String,
        required :true
    }
})

const Empp = mongoose.model('coll1', personSchema);
module.exports = Empp;