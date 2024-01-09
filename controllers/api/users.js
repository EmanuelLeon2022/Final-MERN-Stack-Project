const User = require("../../models/user");
const jwt = require("jsonwebtoken");
module.exports = {
  create,
};

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user)
    res.json(token)
    console.log(`User : ${req.body}, Token: ${token}`)
    
  } catch (error) {
    res.status(400).json(error);
  }
}


