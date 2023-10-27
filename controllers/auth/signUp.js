const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    try {
      let isExistUser = await UserModel.count({ email: email });
      if (isExistUser === 0) {
        bcrypt.hash(password, saltRounds, async (err, hashPassword) => {
          if (err) {
            res.render("error", { error: err.message });
            return;
          }
          let newUser = new UserModel({ email, password: hashPassword });
          await newUser.save();
        });
      } else {
        res.render("error", { error: "User with this email exist" });
      }
    } catch (error) {
      res.render("error", { error: error.message });
    }
  } else {
    res.render("error", { error: "pasword not corect" });
  }
};

module.exports = signUp;
