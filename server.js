const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
const store = require('./config/db').store
const connectDB = require('./config/db').connectDB
const layout = require('express-ejs-layouts')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const ejs = require('ejs')
const methodOverride = require('method-override')
const app = express()
const fs = require('fs')
const compression = require('compression')

connectDB()

app.use(
    session({
        secret: 'this_is_session_secret_key_07565434546',
        saveUninitialized:false,
        resave:false,
        store:store,

        cookie:{
            httpOnly:true,
            maxAge:1000*60*60*24*10,
            sameSite:'strict'
        }
    })
)

app.use(bodyParser.json())
app.locals.moment = require("moment");
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method',{
    methods:['POST', 'GET']
}))
app.use(compression())
app.use(cookieParser())
app.use(cors())
app.use(layout)
app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/public',express.static('public'));
app.use(express.static(path.join(__dirname + "/public")))
app.use(express.static(path.join(__dirname + "/public/client")))


require('./routes/routes')(app)



app.listen(PORT, ()=>{
    console.log(`Server is running to ${PORT}` )
})
