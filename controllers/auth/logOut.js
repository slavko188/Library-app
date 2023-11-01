const logOut = (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/login");
  } catch (error) {
    res.render("error", { error: error.message });
  }
};
module.exports = logOut;
