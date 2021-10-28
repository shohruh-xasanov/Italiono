const mongoose=require('mongoose')
const Chegirma=mongoose.Schema({
    productID:{
        type:mongoose.ObjectId,
        ref:"Product",
        required:true,

    },
    count:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Chegirma',Chegirma)