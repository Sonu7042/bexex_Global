const axios = require("axios");
const jwt = require("jsonwebtoken");
const User = require('../models/User')

const facebookAuth = async (req, res) => {
    try{
        const { accessToken, userID } = req.body;

        const fbRes = await axios.get(
             `https://graph.facebook.com/v18.0/${userID}`,

             {
                params: {
                    fields: "id,name,email",
                    access_token: accessToken,
                }
             }
        )


        const { id, name, email } = fbRes.data;

        const user= await User.findOne({ email });
        if(!user){
            user= new User.create({
                name,
                email,
                password: id,
                provider: "facebook",
                providerId: id,
                isVerified: true,
            });
            await user.save();
        }

        const jwtToken = jwt.sign(
            {
              userId: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );                        

        res.status(200).json({
            success: true,
            message: "facebook Authentication successful",
            token: jwtToken,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
            },
        });

    }catch(err){
        res.status(401).json({
            success: false,
            message: "facebook Authentication failed",
          });
    }
}



module.exports= facebookAuth;