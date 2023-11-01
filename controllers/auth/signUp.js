const sendMail = require("../../lib/sendMail");
const UserModel = require("../../models/UserModel");
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    try {
      let isExistUser = await UserModel.count({ email: email });
      if (isExistUser === 0) {
        bcryptjs.hash(password, saltRounds, async (err, hashPassword) => {
          if (err) {
            res.render("error", { error: err.message });
            return;
          }
          let newUser = new UserModel({ email, password: hashPassword });
          let savedUser = await newUser.save();
          let sendVerifyLink = await sendMail(savedUser._id, email);
          res.redirect("/login");
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
