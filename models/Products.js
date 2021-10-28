const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name:{
        uz:{type:String},
        ru:{type:String}
    },
    bestSeller_count:{
        type:Number,
        default:0
    },
    description:{
        ru: { type: String},
        uz: { type: String}
    },
    poster:{
        min:{type:String, required:true},
        org:{type:String, required:true}
    },
    categoryID:{
            type:mongoose.Schema.ObjectId,
            ref: 'Category',
            required: true 
    },
    price: {
        type: Number,
         required: true
    },
    delverTime :
    {
        type: String, required:false
    },
    prev_payment: {
        type:Number,
        default:0
    },
    images:[
    { url: {
            type:String,
            required:true
        } }
    ]
},{
    timestamps:true
});

module.exports = mongoose.model('Product', Product)
