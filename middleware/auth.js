const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const token = req.get("Authorization");
  const decodedToken = jwt.verify(token, "supersecretkey");
  req.username = decodedToken.username;
};
