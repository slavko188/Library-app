const renderHomePage = (req, res) => {
  let { user } = req.session;
  res.render("renderHome", { user });
};
module.exports = renderHomePage;
