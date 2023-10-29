const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let foundUser = await UserModel.findOne({ email });
    if (foundUser) {
      bcrypt.compare(password, foundUser.password, (err, isMatch) => {
        if (err) {
          res.render("error", { error: err.message });
          return;
        }
        if (isMatch) {
          //ULOGOVAN
          res.redirect("/home");
        } else {
          res.render("error", { error: "Credentials not suport" });
        }
      });
    } else {
      res.render("error", { error: " User with this email not exist" });
    }
  } catch (error) {
    console.log(error);
    res.render("error", { error: error.message });
  }
};
module.exports = login;
