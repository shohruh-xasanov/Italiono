const Gallery = require('../models/Gallery')
const {sharpFile} = require('../fileUpload/sharp')
const fs = require('fs')
const path = require('path')

const customerController = {
    createGallery : async (req,res)=>{
        const file = req.file.filename
        const image = await sharpFile(file, 525, 512)
        const gallery = new Gallery({image})
        await gallery.save()
        res.redirect('/api/gallery')
    },
    getAll : async (req,res)=>{
        const result = await Gallery.find().sort({createdAt:-1})
        const user = req.session.user
        res.render('admin/gallery/index', {
            layout:'./admin_layout', result,user
        })
    },
    deleteGallery : async(req,res)=>{
        const gallery = await Gallery.findById(req.params.id)
        fs.unlink(path.join(path.dirname(__dirname) + gallery.image), (error) => {
            if (error) {
              return
            }
        });
        await Gallery.findByIdAndDelete(req.params.id)
        res.redirect('/api/gallery')
    }
}
module.exports = customerController