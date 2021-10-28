const Order = require('../models/Order')
const Product = require('../models/Products')
const Basket = require('../models/Basket')

const order = {
    create : async (req,res)=>{
        const {name, phone,address, email,productID} = req.body
        const user = req.session.user
        const order = new Order({name, phone,address, email,productID, userID:user.id})
        await order.save()
        res.redirect(`/api/basket/all/${user.id}`)
    },
    getElementById : async (req,res)=>{
        const user = req.session.user
        const basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
        const result = await Product.findById(req.params.id)
        res.render('client/order/order',{
            layout:false,result,user,basket
        })
    },
    getAll : async (req,res)=>{
        const user = req.session.admin
        const order = await Order.find().sort({createdAt:-1}).populate(['productID', 'userID'])
        res.render('admin/order/index', {
            layout: "./admin_layout",
            order, user
        })
    },
    orderDelete : async (req,res)=>{
        await Order.findByIdAndDelete(req.params.id)
        res.redirect('/api/order')
    }
}

module.exports = order