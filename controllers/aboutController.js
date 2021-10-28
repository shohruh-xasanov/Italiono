const About = require('../models/About')
const {sharpFile} = require('../fileUpload/sharp')
const path = require('path')
const fs = require('fs')

const getAbout = {
    createAbout : async (req,res)=>{
        try {
            const {uz,ru} = req.body
            const files = req.file.filename
            const image = await sharpFile(files, 1079, 620)
            const about = new About({title:{uz, ru}, image})
            await about.save() 
            res.redirect('/api/about')
        } catch (error) {
            // res.redirect('/category')
            res.json({msg:error.message})
        }
    },
    getAll : async (req,res)=>{
        const result =await About.find().sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/about/index', {
            layout:'admin_layout',
            result,user
        })
    },
    aboutDelete : async(req,res)=>{
        const {id} = req.params
        const about = await About.findOne({_id:id})
            fs.unlink(path.join(path.dirname(__dirname) + about.image), (error) => {
                    if (error) {
                     return
                }
            });
        await About.findByIdAndDelete(id)
        res.redirect('/api/about')
    }
}
module.exports = getAbout
