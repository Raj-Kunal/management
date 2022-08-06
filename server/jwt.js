require("dotenv").config();
const jwt = require("jsonwebtoken");


const createToken = (user) => {
  const accessToken = jwt.sign(
    { _id: user._id },
    process.env.JWT_SECRET_KEY
  );
  return accessToken;
};


const validateToken = async (req, res, next) => {
  const accessToken = req.header("x-auth-token");

  if (!accessToken) {
    return res.status(400).json({ message: "no token found" });
  }
  try {
    const verified =  jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log(verified._id)
    if (verified) {
        // req.userId = verified.id;
      req.user = verified;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ message: "invalid token"});
  }
};
module.exports = { createToken, validateToken };
