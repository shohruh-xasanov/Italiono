const Product = require('../../models/Products')
const Chegirma = require('../../models/Chegirma')
const Customer = require('../../models/Customers')
const Category = require('../../models/Category')
const Collection = require('../../models/Collection')
const About = require('../../models/About')
const Gallery = require('../../models/Gallery')
const Master = require('../../models/Masters')
const Basket = require('../../models/Basket')

const main = {
    getAll : async (req,res)=>{ const user = req.session.user
        let basket = []
        if(user){
            basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
        }
        const collection = await Collection.find().sort({createdAt:-1}).limit(1)
        const chegirma = await Chegirma.find().sort({createdAt:-1}).limit(1).populate('productID').select('-images -description ')
        const category = await Category.find().sort({createdAt:-1})
        const customer = await Customer.find().sort({createdAt:-1}).limit(4)
        const about = await About.find().sort({createdAt:-1}).limit(1)
        const id1 = category[0]._id
        const id2 = category[1]._id
        const product1 = await Product.find({categoryID:id1}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).populate('categoryID').select('-images -description ')
        const product2 = await Product.find({categoryID:id2}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).populate('categoryID').select('-images -description ')
        res.render('clientru/index', {
            layout:false, collection,user, chegirma, customer, product1,product2,about,basket,title:"Italiano Мебель"
        })
    },
    getAbout : async(req,res)=>{ 
        const user = req.session.user
        let basket = []
        if(user){
            basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
        }
        const about = await About.find().sort({createdAt:-1}).limit(1)
        const master = await Master.find().sort({createdAt:-1})
        const gallery = await Gallery.find().sort({createdAt:-1}).limit(4)
        res.render('clientru/about/index3',{
            layout:false, about, master,user,basket, gallery, title:"о нас"
        })
    },
    getElementById : async(req,res)=>{
        const user = req.session.user
        let basket = []
        if(user){
            basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
        }
        const {id} = req.params
        const product = await Product.findById(id).populate('categoryID')
        const result = await Product.find({categoryID:product.categoryID._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8)
        const chegirma = await Chegirma.find().sort({createdAt:-1}).limit(1).populate('productID').select('-images -description ')
        res.render('clientru/single/index',{
            layout:false, product, result,user,basket, chegirma, title:'Продукты'
        })
    },
    getCatalog :async (req,res)=>{
        const user = req.session.user
        let basket = []
        if(user){
            basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
        }
        const category = await Category.find().sort({createdAt:-1})
        const product1 = await Product.find({categoryID:category[0]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        const product2 = await Product.find({categoryID:category[1]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        let product3 = []
        let product4 = []
        let product5 = []
        let product6 = []
        let product7 = []
        let product8 = []
        let product9 = []
        let product10 = []
        let product11 = []
        let product12 = []
        let product13 = []
        let product14 = []
        let product15 = []
        let product16 = []
        let product17 = []
        let product18 = []
        let product19 = []
        let product20 = []
        if(category[2]){
             product3 = await Product.find({categoryID:category[2]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }else{
        }
        if(category[3]){
             product4 = await Product.find({categoryID:category[3]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[4]){
             product5 = await Product.find({categoryID:category[4]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[5]){
             product6 = await Product.find({categoryID:category[5]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[6]){
             product7 = await Product.find({categoryID:category[6]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[7]){
             product8 = await Product.find({categoryID:category[7]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[8]){
             product9 = await Product.find({categoryID:category[8]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[9]){
             product10 = await Product.find({categoryID:category[9]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[10]){
             product11 = await Product.find({categoryID:category[10]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[11]){
             product12 = await Product.find({categoryID:category[11]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[12]){
             product13 = await Product.find({categoryID:category[12]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[13]){
             product14 = await Product.find({categoryID:category[13]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[14]){
             product15 = await Product.find({categoryID:category[14]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[15]){
             product16 = await Product.find({categoryID:category[15]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[16]){
             product17 = await Product.find({categoryID:category[16]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[17]){
             product18 = await Product.find({categoryID:category[17]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[18]){
             product19 = await Product.find({categoryID:category[18]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        if(category[19]){
             product20 = await Product.find({categoryID:category[19]._id}).and({['name.ru']:{$gte:0}}).sort({createdAt:-1}).limit(8).select('-images -description ').populate('categoryID')
        }
        res.render('clientru/category/index2',{
            layout:false, product1,user,basket, product2, product3,product4, product5,product6,product7,category,product8,product9,product10, 
            product11,product12,product13,product14,product15,product16,product17,product18,product19,product20,title:'Каталог'
        })
    },
    getCollection : async(req,res)=>{
        const user = req.session.user
        let basket = []
        if(user){
            basket = await Basket.find({userID:user.id}).limit(3).sort({createdAt:-1}).populate('productID')
        }
        const result = await Collection.findById(req.params.id).populate('productID')
        res.render('clientru/collection/index',{
            layout:false, result,user,basket, title:"Коллекция"
        })
    },
    changelanguage : async (req,res,next)=>{
        req.session.lang = 'ru'
        res.redirect('/ru')
    }
}
module.exports = main