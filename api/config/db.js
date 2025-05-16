import mongoose from "mongoose";

const database=await mongoose.connect('mongodb://localhost:27017/jugnuEveryday').then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error in connecting");
})

export default database;