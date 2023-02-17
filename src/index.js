const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/products");

const app = express();

const port = process.env.PORT || 4000;

//middleware
app.use("/api", userRoutes);

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
