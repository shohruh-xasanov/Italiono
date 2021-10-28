const Contact = require('../models/Contact')

const contactController = {
    createContact : async(req,res)=>{
        const {fullname,phone} = req.body
        const contact = new Contact({fullname,phone})
        await contact.save()
        res.redirect('/')
    },
    getAll : async (req,res)=>{
        const result = await Contact.find().sort({createdAt:-1})
        const user = req.session.user
        res.render('admin/contact/unseen', {
            layout:'./admin_layout', user, result
        })
    },
    deleteContact : async (req,res)=>{
        const {id} = req.params
        await Contact.findByIdAndDelete(id)
        res.redirect('/api/contact')
    }
}

module.exports = contactController