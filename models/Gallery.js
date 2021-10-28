const mongoose =  require("mongoose");
const Gallery = mongoose.Schema({
    image:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model('Gallery',Gallery);