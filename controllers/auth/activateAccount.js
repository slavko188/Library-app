const UserModel = require("../../models/UserModel");

const activateAccount = async (req, res) => {
  let { id } = req.params;
  try {
    let activateStatus = await UserModel.updateOne(
      { _id: id },
      { $set: { isActivate: true } }
    );
    if (activateStatus.acknowledged) {
      res.render("activateAccount", {
        activateStatus: "You account is activated",
        redirect: "/login",
        linkCaption: "Go to login ",
      });
    } else {
      res.render("activateAccount", {
        activateStatus: "Activation link is not valid!",
        redirect: "/",
        linkCaption: "Register",
      });
    }
  } catch (error) {
    res.render("error", {
      user: req.session.user,
      error: error.message,
      cbUrl: req.header.referer,
    });
  }
};
module.exports = activateAccount;
