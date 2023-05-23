const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const url = `${process.env.MONGODB_URL}`

const connectDB =()=>{
    mongoose.connect(url, ()=>{
        console.log("Mongodb connected succesfully")
    })
}

module.exports = connectDB