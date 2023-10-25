import express from "express"
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./db/connectDB.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config();
connectDB();
const app = express();


const PORT = process.env.PORT || 3000 ;

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json()); 

app.use("/api/users" , userRoutes )

app.listen(PORT , () =>{
    console.log(`server is running on PORT ${PORT}`)
})