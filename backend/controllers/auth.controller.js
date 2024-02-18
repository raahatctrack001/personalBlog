import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    //handling edge cases
    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({
            message: "All fields are required"
        });
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
        res.status(500).json({
            message: error.message
        });
    }

};

export default signup;