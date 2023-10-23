require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use("/", require("./routes"));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error.message));

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Server running");
  }
});
