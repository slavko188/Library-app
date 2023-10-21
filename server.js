const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./routes"));

mongoose
    .connect("mongodb://127.0.0.1:27017/library")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error.message));







app.listen(PORT, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(`Server running on http://localhost:${PORT}`);
    }
});
