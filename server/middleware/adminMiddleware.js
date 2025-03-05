const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const adminProtect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(401);
        throw new Error("Unauthorised Access : Admin Only");
      }
    } catch (error) {
      res.status(401);
      throw new Error("Unauthorised Access : Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("Unauthorised Access : Token Not Found");
  }
});

module.exports = adminProtect;
