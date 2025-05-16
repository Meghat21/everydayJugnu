import express from "express";
import database from "./config/db.js";

const app=express();
database;

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})