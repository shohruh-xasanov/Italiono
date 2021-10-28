const User = require('../../models/User')

const dashboart = {
    dashboart : async (req,res)=>{
        const user = req.session.admin
        const users = await User.find().select('-password -login')
        res.render('admin/dashboard', {
            layout:'./admin_layout',
            user, users
        })
    }
}
module.exports = dashboart