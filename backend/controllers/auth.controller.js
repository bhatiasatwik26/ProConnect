import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookies, generateVerificationCode } from "../utils/verification.utils.js";
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next)=>{
    console.log("hit");
    const {username, email, password} = req.body;
    try{
        const userExist = await User.findOne({email});
        if(userExist)
            return next(errorHandler(400, 'User already exists'));
        const hashPass = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashPass
        });
        await newUser.save();
        signIn(req, res, next);
    }
    catch(err){
        console.log(err);
    }
}
export const signIn = async (req, res, next)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user)
            return next(errorHandler(400, 'User not found'));
        if(!bcrypt.compareSync(password, user.password))
            return next(errorHandler(400, 'Invalid password'));
        generateTokenAndSetCookies(res, user._id);
        res.status(200).json({
            success: true,
            message: 'Signed into account',
            user:{ ...user._doc, password: undefined }
        });
    }
    catch(err){
        console.log(err);
    }
}
export const logOut = async (req, res)=>{
    res.clearCookie('token').status(200).json({
        success: true,
        message: 'Logged out successfully'
    });
}
