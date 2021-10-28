const mongoose =  require("mongoose");
const Master = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model('Master',Master);