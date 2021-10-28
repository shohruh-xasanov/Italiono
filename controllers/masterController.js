const Master = require('../models/Masters')
const {sharpFile} = require('../fileUpload/sharp')
const path = require('path')
const fs = require('fs')

const getMaster = {
    createMaster : async (req,res)=>{
        try {
            const {name,job} = req.body
            const files = req.file.filename
            const image = await sharpFile(files, 296, 324)
            const master = new Master({name, job, image})
            await master.save() 
            res.redirect('/api/master')
        } catch (error) {
            // res.redirect('/category')
            res.json({msg:error.message})
        }
    },
    getAll : async (req,res)=>{
        const result =await Master.find().sort({createdAt:-1})
        const user = req.session.admin
        res.render('admin/master/index', {
            layout:'admin_layout',
            result,user
        })
    },
    masterDelete : async(req,res)=>{
        const {id} = req.params
        const master = await Master.findOne({_id:id})
            fs.unlink(path.join(path.dirname(__dirname) + master.image), (error) => {
                    if (error) {
                     return
                }
            });
        await Master.findByIdAndDelete(id)
        res.redirect('/api/master')
    }
}
module.exports = getMaster
