const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config('./.env')
const { error, success } = require("../utils/responseWrapper")


// Signup controller
const signupController = async(req,res) =>{

    try {
        
        const {email,name,password} = req.body;

        if(!email || !name || !password){
            return res.send(error(400,'All Fields are required'))
        }

        const isUser = await User.findOne({ email });

        if(isUser){
            return res.send(error(400,'This user already exist'))
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            name,
            email,
            password:hashPassword
        })

        return res.send(success(201,{
            msg : 'User Created Succesfully',
            newUser
        }))

    } catch (e) {
        res.send(error(500,e.message));
    }
}

// login controller
const loginController = async(req,res) =>{

    try {
        
        const {email,password} = req.body;

        if(!email || !password){
            return res.send(error(400,'All fields are required'))
        }

        const isUser = await User.findOne({ email });

        if(!isUser){
            return res.send(error(404,'User is not registered, please do signup first'))
        }

        const matched = await bcrypt.compare(password,isUser.password);

        if(!matched){
            return res.send(error(403,'Incorrect Password'));
        }
        

        const token = generateAccessToken({_id:isUser._id})

        return res.send(success(200,{
            msg : 'User Login Succesfully',
            token
        }))

    } catch (e) {
        return res.send(error(500,'server error'))
    }
}


// internal functions

const generateAccessToken = (data)=>{

    const token = jwt.sign(data,process.env.ACCESS_TOKEN_ACCESS_KEY,{
        expiresIn : '1d'
    })

    return token;
}

module.exports = {
    loginController,
    signupController
}