const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGest } = require("../middleware/auth");

// @desc   Login/Landing page
// @route  GET  /
router.get("/", ensureGest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// @desc   Dashboard
// @route  GET  / dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
  res.render("dashboard");
});

module.exports = router;
