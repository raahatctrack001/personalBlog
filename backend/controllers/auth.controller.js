import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    //handling edge cases
    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return  next(errorHandler(400, 'All fields are necessary'));
    }
    
    const saltRound = 10;
    const hashedPassword = bcryptjs.hashSync(password, saltRound);
    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });

    try{
        await newUser.save();
        res.json("signup successfull");
    }
    catch(error){
        next(error);
    }
};

export default signup;