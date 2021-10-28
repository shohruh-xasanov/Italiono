const Product = require('../models/Products')
const Basket = require('../models/Basket')

exports.searchNews = async(req,res)=>{
    let searchExpression_name = new RegExp(req.query.name)
    const result = await Product.find().or([
        {['name.uz']:{ $regex: searchExpression_name, $options: 'i'}},
        {['name.ru']:{ $regex: searchExpression_name, $options: 'i'}}
    ])
    .populate('categoryID')
    const user = req.session.admin
    res.render("admin/search/index", {
        layout: "./admin_layout", user, result
    });
}
exports.searchNewsclient = async(req,res)=>{
    let searchExpression_name = new RegExp(req.query.name)
    let search = req.query.name
    const user = req.session.user
    let basket = []
    if(user){
        basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
    }
    const  product = await Product.find().or([
        {['name.uz']:{ $regex: searchExpression_name, $options: 'i'}}
    ]).populate('categoryID').limit(8)
    res.render("client/search/index", {
        title:search,
        layout: false, product, search,basket,user
    });
}
exports.searchNewsclientru = async(req,res)=>{
    let searchExpression_name = new RegExp(req.query.name)
    let search = req.query.search
    const user = req.session.user
    let basket = []
    if(user){
        basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
    }
    const  product = await Product.find().or([
        {['name.ru']:{ $regex: searchExpression_name, $options: 'i'}}
    ]).populate('categoryID').limit(8)
    res.render("clientru/search/index", {
        title:search,
        layout: false, product, search,user,basket
    });
}