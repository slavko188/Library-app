const UserModel = require("../../models/UserModel");
const bcryptjs = require("bcryptjs");
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let foundUser = await UserModel.findOne({ email, isActivate: true });
    if (foundUser) {
      bcryptjs.compare(password, foundUser.password, (err, isMatch) => {
        if (err) {
          res.render("error", { error: err.message });
          return;
        }
        if (isMatch) {
          //ULOGOVAN
          (req.session.user = {
            _id: foundUser._id,
            firstName: foundUser.firstName,
            role: foundUser.role,
            image: foundUser.image,
          }),
            res.redirect("/home");
        } else {
          res.render("error", { error: "Password is incorect!" });
        }
      });
    } else {
      res.render("error", {
        error:
          " User with this email not exist or account is not activate! Check your mail.",
      });
    }
  } catch (error) {
    res.render("error", { error: error.message });
  }
};
module.exports = login;
