module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("warning_msg", "Please Log in first");
    res.redirect("/users/login");
  },
};
