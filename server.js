const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const dbConnection = require('./config/db')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')


//Load config 
dotenv.config({path:'./config/config.env'})

// Passport config
require('./config/passport')(passport)

dbConnection()

//logging
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

//use template engine
app.engine('.hbs', exphbs({defaultLayout:'main' ,extname:'.hbs'}))
app.set('view engine', '.hbs')

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))

app.listen(process.env.PORT || 5000,console.log(`server ${process.env.PORT} ga ulandi`))