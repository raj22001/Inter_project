import  jwt  from "jsonwebtoken";


const tokenCookiegenrate = (userId , res) =>{
    const token = jwt.sign({userId} , process.env.JWT_SECRET , {
        expiresIn:"5d",
    });


    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:5 * 24 * 60 * 60 * 1000,
        sameSite:"Strict", 
    })

    return token
};

export default tokenCookiegenrate