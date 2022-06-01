const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

module.exports.verifyJWT = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.sendStatus(401);
  }
  const accesstoken = authHeader.split(' ')[1];
  jwt.verify(
    accesstoken, 
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    }
  )
};

module.exports.connectDB = () => {
  mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`connected to the database at port ${PORT}`);
  });
}