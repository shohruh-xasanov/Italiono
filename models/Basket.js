const mongoose = require('mongoose');
const Basket = mongoose.Schema({
    userID:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    productID:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Basket', Basket );

