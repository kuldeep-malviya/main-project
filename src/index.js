import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import connectDb from "./DB/index.js";
dotenv.config({
    path: "./.env"
});

connectDb()
.then(() =>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("monngoDb connection failed!! ", error)
})













// import express from "express";
// const app = express();
// (async()=>{
//     try {
//         const connectDb = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error", error)
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.log("ERROR",error)
//     }
// })()