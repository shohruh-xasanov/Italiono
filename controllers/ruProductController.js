const Product = require('../models/Products')
const Category = require('../models/Category')
const {sharpFile,sharpFile_unlink, sharpFile_poster} = require('../fileUpload/sharp')
const path = require('path')
const fs = require('fs')

const Products = {
    createProduct : async (req,res)=>{
        const {nameru, descriptionru, categoryID, price} = req.body
        const files = req.files.images
        const image = req.files.poster[0].filename
        
        const org = await sharpFile_unlink(image, 540, 346)
        const min = await sharpFile_poster(image, 210, 190)
        
        let urls = [];
        if(files) {
            for(let i= 0; i<files.length; i++){
                const file = await sharpFile(files[i].filename,540, 346)
                urls.push({url : file})
            }
        }
        const product = new Product({
            name:{ru:nameru},
            description:{ru:descriptionru},
            categoryID, price,
            poster:{min,org}, images:urls,
        })
        await product.save()
        res.redirect('/api/product/ru')
    },
    getAll : async (req,res)=>{
        const result = await Product.find({['name.ru']:{$gte:0}})
            .sort({createdAt:-1})
            .limit(100)
            .populate('categoryID')
        const user = req.session.admin
        const category = await Category.find().sort({createdAt:-1})
        res.render('admin/productru/index', {
            layout:'admin_layout', result, user,category
        })
    },
    
    getElementByID : async (req,res)=>{
        const {id} = req.params
        const product = await Product.findById(id).populate('categoryID')
        const category = await Category.find().sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/productru/update', {
            layout:'./admin_layout', user, product, category
        })
    },
    productUpdate : async (req,res)=>{
        const result  = await Product.findById(req.params.id)
        if(result.poster){
            fs.unlink(path.join(path.dirname(__dirname) + result.poster.min), (error) => {
                if (error) {
                  return
                }
            });
            fs.unlink(path.join(path.dirname(__dirname) + result.poster.org), (error) => {
                if (error) {
                  return
                }
            });
        }
        if(result.images){
            for(let i=0; i<result.images.length; i++){
                fs.unlink(path.join(path.dirname(__dirname) + result.images[i].url), (error) => {
                    if (error) {
                      return
                    }
                });
            }
        } 
        const {nameru, descriptionru, categoryID, price} = req.body
        const files = req.files.images
        const image = req.files.poster[0].filename
        
        const org = await sharpFile_unlink(image, 270, 280)
        const min = await sharpFile_poster(image, 310, 190)
        
        let urls = [];
        if(files) {
            for(let i= 0; i<files.length; i++){
                const file = await sharpFile(files[i].filename,540, 346)
                urls.push({url : file})
            }
        }

        result.price = price
        result.name.ru = nameru
        result.description.ru = descriptionru
        result.categoryID = categoryID
        result.poster.org = org
        result.poster.min = min
        result.images = urls
        await result.save()
        res.redirect('/api/product/ru')
    },
    productDelete : async (req,res)=>{
        const result  = await Product.findById(req.params.id)
        if(result.poster){
            fs.unlink(path.join(path.dirname(__dirname) + result.poster.min), (error) => {
                if (error) {
                  return
                }
            });
            fs.unlink(path.join(path.dirname(__dirname) + result.poster.org), (error) => {
                if (error) {
                  return
                }
            });
        }
        if(result.images){
            for(let i=0; i<result.images.length; i++){
                fs.unlink(path.join(path.dirname(__dirname) + result.images[i].url), (error) => {
                    if (error) {
                      return
                    }
                });
            }
        }
        await Product.findByIdAndDelete({_id:result._id})
        res.redirect('/api/product/ru')
    }
}

module.exports = Products
