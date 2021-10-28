require('express-async-errors');
const {roles} = require('../middleware/auth')
const errorHandler = require('../middleware/error')


module.exports = function (app) {
    app.use('/', require('../routes/userRouter'))
    app.use('/', require('../routes/mainRouter'))
    app.use('/', require('../routes/searchRouter'))
    app.use('/', require('../routes/clientRouter'))
    app.use('/ru', require('../routes/mainru'))
    app.use('/api', require('../routes/orderRouter'))
    app.use('/api', require('../routes/basketRouter'))
    app.use('/api',roles, require('../routes/categoryRoutes'))
    app.use('/api',roles, require('../routes/chegirmaRoutes'))
    app.use('/api',roles, require('../routes/contactRouter'))
    app.use('/api',roles, require('../routes/customerRoutes'))
    app.use('/api',roles, require('../routes/productRouter'))
    app.use('/api',roles, require('../routes/ruProductRputer'))
    app.use('/api',roles, require('../routes/collectionRouter'))
    app.use('/api',roles, require('../routes/aboutRouter'))
    app.use('/api',roles, require('../routes/masterRouter'))
    app.use('/api',roles, require('../routes/galleryRouter'))
    app.use('/api',roles, require('../routes/dashboard'))
    
    app.use((req,res,next)=>{
        res.status(404)
        res.render('client/err',{
            layout:false
        })
        next()
    })
    
    // app.use(errorHandler)
    // app.use(function (err, req,res,next){
    //     if(err){
    //         res.render('client/err',{
    //             layout:false
    //         })
    //     }
    //     next()
    // })
    
}
