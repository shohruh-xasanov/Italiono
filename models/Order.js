const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    address:{
        type:String,
        required:true
    },  
    productID:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    },
    userID:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    process:{
        type:String,
        enum:['seen', 'unseen'],
        default:'unseen'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Order', orderSchema)