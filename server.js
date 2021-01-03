const express = require('express')
const app = express()
const dotenv = require('dotenv')
const dbConnection = require('./config/db')


//Load config 
dotenv.config({path:'./config/config.env'})

dbConnection()

app.listen(process.env.PORT || 5000,console.log(`server ${process.env.PORT} ga ulandi`))