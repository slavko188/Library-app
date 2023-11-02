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
          let subject = "Activation link";
          let html = `<p> Click on activation link </p>
          <a href="http://localhost:3000/auth/activate/${savedUser._id}">Activation link</a>`;
          let sendVerifyLink = await sendMail({ email, subject, html });
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
