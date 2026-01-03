const {User} = require('../models/User');
const { createSecretToken } = require('../utils/SecretToken');

module.exports.signin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    const user = await User.create({ username, email, password });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
        httpOnly: true,
        secure : true,
        samSite: "none"
    });


    return res.status(201).json({
      success: true,
      message: "You signed up successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
