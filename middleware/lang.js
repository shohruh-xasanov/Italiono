const language = {
    changeuz : async (req,res,next)=>{
        lang = req.session.lang;
        if(lang === 'uz' || lang === undefined){
            next()
        }
        if(lang === 'ru'){
            return res.redirect('/ru')
        }
    },
    changeru : async (req,res,next)=>{
        lang = req.session.lang;
        if(lang === 'ru' || lang === undefined){
            next()
        }
        if(lang === 'uz'){
            return res.redirect('/')
        }
    }
}
module.exports = language