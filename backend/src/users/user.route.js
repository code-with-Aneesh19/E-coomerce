const express = require("express");
const router = express.Router();

// Register endpoint
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(req.body);
    const user = new user({ email, username, password });
    await user.save();
    res.status(201).send({ message: "user Registered successfully!" });
  } catch (error) {}
});
module.exports = router;
