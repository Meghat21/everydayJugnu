import express from "express";
import database from "./config/db.js";
import authRoutes from './routes/authRoute.js';

const app=express();
database;
// middleware
app.use(express.json());


// routes
app.use('/api/auth', authRoutes);


// error middleare
app.use((err, req, res, next) =>{
    const stausCode=err.stausCode || 500;
    const message=err.message || "Server Error";
    return res.status(stausCode).json({
        success:false,
        stausCode:stausCode,
        message:message,

    })
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})

