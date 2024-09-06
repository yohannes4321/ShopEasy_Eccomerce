const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    fullname:String,
    email:{
        type:String,
        unique:true,
        required :true
    },
    password:{
        type:String,
        required:true

    },
    role:String,
    profilePic:String
    

},{timestamps:true})
const userModel=mongoose.model("user",userSchema)
module.exports=userModel