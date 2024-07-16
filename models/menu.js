const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    price:{
        type:Number
    },
    taste:{
        type: String,
        enum:['sour','sweet', 'spicy'],
        required: true

    }
})

const MenuItem = mongoose.model('menuItem', menuItemSchema, 'menuItem');
module.exports = MenuItem;