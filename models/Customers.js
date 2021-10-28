const mongoose =  require("mongoose");
const Customer = mongoose.Schema({
    image:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model('Customer',Customer);