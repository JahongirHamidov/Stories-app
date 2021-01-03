const mongoose = require('mongoose')

const dbConnection = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            //useCreateIndex:true,
            useFindAndModify:false,
        })
        console.log(`DB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    } 
}

module.exports = dbConnection