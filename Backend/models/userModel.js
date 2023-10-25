import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            minLength:8,
            required:true,
        }
        
    },
    {
        timestamps:true
    }
);

const User = mongoose.model("User",userSchema);
export default User;