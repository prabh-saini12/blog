const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// register route ('/api/v1/auth/register')

router.post("/register", async (req, res) => {
  try {
    let saveduser = await User.findOne({ email: req.body.email });
    if (saveduser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(req.body.password, salt);

    saveduser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securedPassword,
    });
    res.json(saveduser);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//login route ('/api/v1/auth/login')

module.exports = router;
