import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
        console.log("signup", req.body);
        const user = await User.findOne({email: email});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({name, email, password: hashedPassword, role});
        
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({message: "User created successfully"});
        }
        else{
            res.status(400).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            });
        }
    } catch (e) {
        console.log("error in auth controller", e);
        res.status(500).json({error:"Server Error"});
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({message: "Invalid email or password"});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
        
    } catch (error) {
        console.log("error in login controller", error);
        res.status(500).json({error:"Server Error"});
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt","", {maxAge:0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({error:"Server Error"});
    }
}