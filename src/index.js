const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 4000;

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//Db connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("🟢 mongodb connection was successful 🟢"))
  .catch((error) =>
    console.error("🔴 mongodb connection failed: " + error + " 🔴")
  );

app.listen(port, () => console.log("listening on port", port));
