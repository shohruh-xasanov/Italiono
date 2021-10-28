const Customer = require('../models/Customers')
const {sharpFile} = require('../fileUpload/sharp')
const fs = require('fs')
const path = require('path')

const customerController = {
    createCustomer : async (req,res)=>{
        const file = req.file.filename
        const customer = new Customer({image:file})
        await customer.save()
        res.redirect('/api/customer')
    },
    getAll : async (req,res)=>{
        const result = await Customer.find().sort({createdAt:-1})
        const user = req.session.user
        res.render('admin/customer/index', {
            layout:'./admin_layout', result,user
        })
    },
    deleteCustomer : async(req,res)=>{
        const customer = await Customer.findById(req.params.id)
        fs.unlink(path.join(path.dirname(__dirname) + customer.image), (error) => {
            if (error) {
              return
            }
        });
        await Customer.findByIdAndDelete(req.params.id)
        res.redirect('/api/customer')
    }
}
module.exports = customerController