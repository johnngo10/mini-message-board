const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port 3000");
});
