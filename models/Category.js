const mongoose=require('mongoose')
const Category=mongoose.Schema({
    name:{
        ru:{type:String,required:true},
        uz:{type:String,required:true}
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Category',Category)