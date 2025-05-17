import dotenv from "dotenv";
dotenv.config();


import jwt from 'jsonwebtoken';
export const createToken=async(userId,res)=>{
    const token=jwt.sign({userId},process.env.SECRET_KEY,{
        expiresIn:'1h',
    });
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:3600000,

    });
    return token;
}