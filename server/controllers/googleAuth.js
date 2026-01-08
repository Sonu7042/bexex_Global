const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;

    
    
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    console.log("Received payload:", payload);
    
    const { sub, email, name } = payload;

    let user = await User.findOne({ email });


    if (!user) {
      user =  User.create({
        name,
        email,
        password: sub,
        provider: "google",
        providerId: sub,
        isVerified: true,
      });
    }

    const jwtToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
        success: true,
        message: "Authentication successful",
        token: jwtToken,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
    })


  } catch (err) {
      res.status(401).json({
      success: false,
      message: "Google authentication failed",
    });
  }
};

module.exports = googleAuth;
