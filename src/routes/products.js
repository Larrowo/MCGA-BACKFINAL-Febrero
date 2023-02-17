const express = require("express");

const router = express.Router();

//create user
router.post("/users", (req, res) => {
  res.send("This is a response to a petition");
});

module.exports = router;
