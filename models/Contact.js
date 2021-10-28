// Ism va telefon raqam buladi 
const mongoose =  require("mongoose");
const Contact = mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model('Contact',Contact);