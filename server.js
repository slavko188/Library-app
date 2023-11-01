require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const HALF_DAY = 1000 * 60 * 60 * 12;
const NODE_ENV = "development";
const IN_PRODUCTION = NODE_ENV !== process.env.NODE_ENV;

//connection with base
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error.message));

app.set("view engine", "ejs");
//session

app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: HALF_DAY,
      secure: false,
    },
  })
);

//Use midlwere

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/templates/signUp-form"));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use("/", require("./routes"));

// server

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Server running");
  }
});
