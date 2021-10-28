const Chegirma = require('../models/Chegirma')
const Product = require('../models/Products')

const chegirmaController = {
    createChegirma : async (req,res)=>{
        const {count, productID} = req.body
        const chegirma = new Chegirma({count, productID})
        await chegirma.save()
        res.redirect('/api/chegirma')
    },
    getAll : async (req,res)=>{
        const result = await Chegirma.find().sort({createdAt:-1}).populate('productID')
        const user = req.session.admin
        const product = await Product.find().sort({createdAt:-1})
        res.render('admin/chegirma/index', {
            layout:'./admin_layout', result,user,product
        })
    },
    deleteChegirma : async(req,res)=>{
        const {id} = req.params
        await Chegirma.findByIdAndDelete(id)
        res.redirect('/api/chegirma')
    }
}
module.exports = chegirmaController