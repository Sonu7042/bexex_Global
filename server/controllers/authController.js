const User =require('../models/User');
const brypt = require("bcryptjs");
const jwt= require('jsonwebtoken');
const sendEmail= require('../utils/sendEmail');
const crypto= require('crypto');



// signup controller


const signup= async (req, res)=>{
    const {name, email, password}= req.body;

    const userExists= await User.findOne({email})
    if(userExists){
        return res.status(400).json({meassage:"User already exists"})
    }

    const hashedPassword= await brypt.hash(password,10)

    const verificationCode= crypto.randomInt(100000, 999999).toString();

    const user= new User({
        name,
        email,
        password:hashedPassword,
        verificationCode,
        verificationCodeExpiry: Date.now() + 10 * 60 * 1000, // 10 minutes
    })


    await user.save();

    await sendEmail(
        email,
        "Email Verification",
        `Your verification code is: ${verificationCode}`
    )

    
    await res.status(201).json({
        message:"User Signup successfully. Verification code sent to email."
    })
}




// verify email
const verifyEmail= async(req, res)=>{
     const {email, code}= req.body;

     const user = await User.findOne({email});

     if(!user || user.verificationCode !== code || user.verificationCodeExpiry < Date.now()){
        return res.status(400).json({message: "Invalid or expired verification code."});
     }


     user.isVerified=true
     user.verificationCode= undefined;
     user.verificationCodeExpiry= undefined;

     await user.save();

      const token= jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'1d'}
    )







     res.status(200).json({
        message: "Email verified successfully.",
        token,
        user:{  
            id:user._id,
            name:user.name,
            email:user.email,
        }
    });
}




const login= async(req, res)=>{
    const {email, password}= req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message: "Invalid credentials."});
    }

    if(!user.isVerified){
        return res.status(400).json({message: "Email not verified."});
    }

    const isMatch = await brypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials."});
    }

    const token= jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'1d'}
    )

    res.json({
        message:"Login successful",
        token,
        user:{  
            id:user._id,
            name:user.name,
            email:user.email,
        }
    })

}



module.exports= {
    signup,
    verifyEmail,
    login,
}



