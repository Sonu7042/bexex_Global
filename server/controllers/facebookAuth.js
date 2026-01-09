const axios = require("axios");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const facebookAuth = async (req, res) => {
  try {
    const { accessToken, userID } = req.body;


    if (!accessToken || !userID) {
      return res.status(400).json({
        success: false,
        message: "Access token or userID missing",
      });
    }

    // 🔹 Fetch Facebook profile
    const fbRes = await axios.get(
      `https://graph.facebook.com/v18.0/${userID}`,
      {
        params: {
          fields: "id,name,email",
          access_token: accessToken,
        },
      }
    );

    const { id, name, email } = fbRes.data;


    const userEmail = email || `${id}@facebook.com`;

    let user = await User.findOne({ email: userEmail });

    if (!user) {
      user = await User.create({
        name,
        email: userEmail,
        password: id, 
        provider: "facebook",
        providerId: id,
        isVerified: true,
      });
    }

    // 🔹 Generate JWT
    const jwtToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Facebook authentication successful",
      token: jwtToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.error("FB AUTH ERROR:", err.response?.data || err.message);

    return res.status(401).json({
      success: false,
      message: "Facebook authentication failed",
    });
  }
};

module.exports = facebookAuth;
