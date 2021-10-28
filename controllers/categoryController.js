const Category = require('../models/Category')
const Product = require('../models/Products')
const path = require('path')
const fs = require('fs')

const getCategory = {
    createCategory : async (req,res)=>{
        try {
            const {uz,ru} = req.body
            const category = new Category({name:{uz, ru}})
            await category.save() 
            res.redirect('/api/category')
        } catch (error) {
            // res.redirect('/category')
            res.json({msg:error.message})
        }
    },
    getCategory : async (req,res)=>{
        const category =await Category.find().sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/category/index', {
            layout:'admin_layout',
            category,user
        })
    },
    getCategoryById : async (req,res)=>{
        const category = await Category.findById(req.params.id)
        const user = req.session.admin
        res.render('admin/category/update',{
            layout:'admin_layout', category, user
        })
    },
    categoryDelete : async(req,res)=>{
        const {id} = req.params
        await Category.deleteMany({_id:id})
        const products = await Product.find({categoryID:id})
        for(let a=0; a<products.length; a++){
        if(products[a].images){
        for(let i=0; i<products[a].images.length; i++){
                fs.unlink(path.join(path.dirname(__dirname) + products[a].images[i].url), (error) => {
                    if (error) {
                     return
                }
            });
        }
        }
        fs.unlink(path.join(path.dirname(__dirname) + products[a].poster.org), (error) => {
            if (error) {
              return
            }
        });
        fs.unlink(path.join(path.dirname(__dirname) + products[a].poster.min), (error) => {
            if (error) {
              return
            }
        });
        }
        await Product.deleteMany({categoryID:id}).then((data)=>{
            console.log(data)
        })
        res.redirect('/api/category')
    },
    categoryUpdate : async (req,res)=>{
        const {id} = req.params
        try {
            const {uz,ru} = req.body
            const category = await Category.findByIdAndUpdate({_id:id}, {name:{uz, ru}})
            await category.save()
            res.redirect('/api/category')
        } catch (error) {
            res.redirect(`/api/category/${id}`)
        }
    }
}
module.exports = getCategory
