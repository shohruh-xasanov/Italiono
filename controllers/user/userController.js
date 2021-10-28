const User = require('../../models/User')
const bcrypt = require('bcrypt')

const getUser = {
    /* Add user */
    createUser : async (req,res)=>{
        try {
            const {fullname,login ,password } = req.body
            const user = new User({fullname, login,password})
            
            await user.save()
            res.redirect('/api/dashboard')
        } catch (error) {
            res.redirect('/api/create/user')
        }
    },
    createUserPage : async (req,res)=>{
        const user = req.session.admin
        res.render('admin/profile/index', {
            layout:'./admin_layout', user
        })
    },
    /* Delete user */
    userDelete : async (req,res)=>{
        await User.findByIdAndDelete(req.params.id)
        res.redirect('/api/dashboard')
    },
    userFind :async (req,res)=>{
        const result = await User.findById(req.params.id).select('-password -login -role')
        const user = req.session.admin
        res.render('admin/profile/update',{
            layout:'./admin_layout', user, result
        })
    },
    /* User update */
    userUpdate : async (req, res)=>{
        try {
        const {fullname,login ,password,oldpassword  } = req.body
        const user = await  User.findByIdAndUpdate(req.params.id,{fullname, login})
        if(!bcrypt.compareSync(oldpassword, user.password)){
            return res.redirect(`/user/search/${req.params.id}`)
         }
        user.password = password
        await user.save()
        res.redirect('/api/dashboard')
        } catch (error) {
            res.redirect(`/api/user/search/${req.params.id}`)
        }
    }
}

module.exports = getUser