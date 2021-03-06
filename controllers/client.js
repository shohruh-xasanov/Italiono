const Client = require('../models/Client')
const bcrypt = require('bcrypt')
const session = require('express-session')

const getUser = {
    /* Add user */
    createUser : async (req,res)=>{
        try {
            const {email, name,phone,password} = req.body
            const client = new Client({email, name,phone,password})
            await client.save()
            req.session.user = data={id:client._id, name:client.name}
            req.session.save()
            res.redirect('/')
        } catch (error) {
            res.redirect('/api/create/client')
        }
    },
    createUserPage : async (req,res)=>{
        const lang = req.session.lang
        res.render('client/profile/reg', {
            layout:false,lang, title:"Registration"
        })
    },
    userFind :async (req,res)=>{
        const lang = req.session.lang
        const result = await Client.findById(req.params.id).select('-password -login -role')
        res.render('client/profile/reg',{
            layout:false, result,lang, title:"Registration"
        })
    },
    /* User update */
    userUpdate : async (req, res)=>{
        try {
        const {fullname,login ,password,oldpassword  } = req.body
        const user = await  Client.findByIdAndUpdate(req.params.id,{fullname, login})
        if(!bcrypt.compareSync(oldpassword, user.password)){
            return res.redirect(`/user/search/${req.params.id}`)
         }
        user.password = password
        await user.save()
        res.redirect('/')
        } catch (error) {
            res.redirect(`/api/user/search/${req.params.id}`)
        }
    },
    getLogin : async (req,res)=>{
        const lang = req.session.lang
        res.render('client/profile/login',{
            layout:false, lang, title:"Login"
        })
    },
    login : async (req,res,next)=>{
        try {
            const {email, password} = req.body
        if (!email && !password) {
          res.redirect("/reg");
        }
        await Client.findOne({email}).then((user)=>{
            const lang = req.session.lang
            if(!user){
                    return res.render('client/profile/login',{
                        layout:false, data:"Parol yoki login xato",lang,title:"Login"
                    })
                } user.matchPassword(password, (err, isMatch)=>{
                    if(err){
                       return res.render('client/profile/login',{
                        layout:false, data:"Parol yoki login xato",lang,title:"Login"
                    })
                    }
                    if (!isMatch) {
                       return res.render('client/profile/login',{
                        layout:false, data:"Parol yoki login xato",lang,title:"Login"
                    })
                      }else{
                          req.session.user = data={id:user._id, name:user.name}
                          req.session.save()
                          res.redirect('/')
                      }
                });
        })
        } catch (error) {
            res.redirect('/reg')
        }
    },
    logout : async (req,res,next)=>{
        req.session.destroy();
        res.clearCookie("connect.sid");
        res.redirect('/')
    }
    
}


module.exports = getUser