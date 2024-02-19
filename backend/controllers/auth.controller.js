import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

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

const signin = async (req, res, next)=>{
    const {email, password} = req.body;
    if(!email || !password || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required'));
    }

    try{
        const isValidUser = await User.findOne({email});
        if(!isValidUser){
            return next(errorHandler(404, 'User not found'));
        }
        
        const isPasswordValid = bcryptjs.compareSync(password, isValidUser.password);
      
        if(!isPasswordValid){
            return next(errorHandler(400, 'invalid password'));
        }
        //if user exists, generate token to search whether correct user is trying to login
        const token = jwt.sign(
            {
                id: isValidUser._id,
            },
            process.env.jwt
        );

        //removing password section from valid use before sending them 
        const {password : pass, ...rest} = isValidUser._doc;
        res //now send the data
        .status(200)
        .cookie('access_token', token, { //access_token: changable
            httpOnly:true,
        })
        .json(rest);
    }
    catch(error){
        next(error);
    }

}

export {signup, signin};