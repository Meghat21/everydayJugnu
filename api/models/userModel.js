import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
    }

},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
export default User;