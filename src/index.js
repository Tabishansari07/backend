//whenever i talk with db so i  use try and catch or promise

// require('dotenv').config({ path: './env' })
import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});


connectDB()
.then(()=>{

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running in port ${process.env.PORT }`)
    })
}
)
.catch((err)=>{
    console.log("Mongo Db connection failed!!!",err)
})








/*
here we are not importing db connection 
import mongoose from "mongoose"
import { DB_NAME } from "./constants";
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log('Error:',error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:",error)
        throw err
    }
})()

*/