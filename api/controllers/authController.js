import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();


export const Signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password || username==='' || email==='' || password===''){
        next(errorHandler(400,"All fields are required"));
    }
    try {
        const newUser=await User.findOne({email});
        if(newUser) next(errorHandler(401,"User already registered"));
        const hashpassword=bcrypt.hashSync(password,10);
        const user=new User({username,email,password:hashpassword});
        // const token=await user.generateToken();
        await user.save();
        res.status(201).json({user});
    } catch (error) {
        console.error(error);
        next(error);
        
    }
}


export const Signin=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password || email=='' || password==''){
        next(errorHandler(400,"All fields are required"));
    }
    try {
        const user=await User.findOne({email});
        if(!user) next(errorHandler(401,"Invalid email or password"));
        const isMatch=bcrypt.compareSync(password,user.password);
        if(!isMatch) next(errorHandler(401,"Invalid email or password"));
        // const token=await user.gen   erateToken();
        const token=jwt.sign(
            {id:user._id},process.env.SECRET_KEY
        );
        res.status(200).cookie('token',token,{
            httpOnly:true
        }).json(user);
        // res.status(200).json({user});
    } catch (error) {
        console.error(error);
        next(error);
        
    }
}