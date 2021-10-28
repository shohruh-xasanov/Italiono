const Collection = require('../models/Collection')
const Product = require('../models/Products')

const collection = {
    create : async (req,res)=>{
        const {nameuz,nameru,titleuz, titleru, productID} = req.body
        const collection = new Collection({name:{uz:nameuz, ru:nameru},title:{uz:titleuz,ru:titleru }, productID})
        await collection.save()
        res.redirect('/')
    },
    getAll : async (req,res)=>{
        const result = await Collection.find().populate('productID')
        const product = await Product.find().sort({createdAt:-1}).populate('categoryID').select('-description -images')
        const user = req.session.admin
        res.render('admin/collection/index', {layout:'./admin_layout', user, product, result})
    },
    elementDelete : async (req,res)=>{
        await Collection.findByIdAndDelete(req.params.id)
        res.redirect('/api/collection')
    }
}

module.exports = collection
