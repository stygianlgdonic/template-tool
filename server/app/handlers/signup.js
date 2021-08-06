const signup = async (req, res, next) => {
  res.json({
    message: "Signup successful",
    user: req.user,
  });
};

module.exports = { signup };
