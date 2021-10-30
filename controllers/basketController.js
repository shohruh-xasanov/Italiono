const Basket = require('../models/Basket')
const Product = require('../models/Products')
const Order = require('../models/Order')

const basketController = {
    createBasket : async (req,res)=>{
        const user = req.session.user
        if(!user){
            res.redirect('/api/login')
        }
        const {id} = req.params
        const basket = new Basket({userID:user.id, productID:id})
        await basket.save()
        res.redirect('/')
    },
    basketSearch : async(req,res)=>{
        const {id} = req.params
        const user = req.session.user
        const basket = await Basket.find({userID:id}).sort({createdAt:-1}).populate('productID')
        const order = await Order.find({userID:id}).sort({createdAt:-1}).populate('productID')
        res.render('client/basket/basket', {
            layout:false, basket,user,order
        })
    },
    basketDelete : async(req,res)=>{
        const user = req.session.user
        await Basket.findByIdAndDelete(req.params.id)
        res.redirect(`/api/basket/all/${user.id}`)
    }
}
module.exports = basketController