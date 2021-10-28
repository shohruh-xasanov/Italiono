const mongoose =  require("mongoose");
const About = mongoose.Schema({
    title:{
        ru:{type:String,required:true},
        uz:{type:String,required:true}
    },
    image:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
module.exports = mongoose.model('About',About);