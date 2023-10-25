import User from "../models/userModel.js";
import tokenCookiegenrate from "../utils/tokenCookiegenrate.js";
import bcrypt from "bcryptjs"


const signupUser = async(req , res) =>{
    try{

        console.log("Request Body" , req.body)
        const {name , username , email , password} = req.body

        if (!name || !username || !email || !password) {
            return res.status(400).json({
              error: `Missing user ${name} , ${username} , ${password} , ${email} information in the request body`,
            });
          }

        const user = await User.findOne({$or : [{email},{username}]});

        if(user){
            return res.status(400).json({
                error:"User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            name,
            username,
            email,
            password:hashPassword,
        });

        await newUser.save();

        if(newUser){
            tokenCookiegenrate(newUser._id , res);

            res.status(201).json({
                _id:newUser._id,
                name:newUser.name,
                username:newUser.username,
                email:newUser.email,
            });
        }else{
            res.status(400).json({error:"Invalid user data"});
        }
        
    }catch(error){
        res.status(500).json({
            error:error.message
        });
        console.log("ERRor in signupUser" , error.message)
    }
};


const loginUser = async(req , res) =>{
    try{
        
        const {username , password } = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({
                error:"Invalid username or Password"
            });
        }

        tokenCookiegenrate(user._id , res);

        res.status(200).json({
            _id:user._id,
            name:user.name,
            username:user.username,
            email:user.email,
        })

    }catch(error){
        res.status(500).json({ error: error.message });
		console.log("Error in loginUser: ", error.message);
    }
}

export {signupUser , loginUser};