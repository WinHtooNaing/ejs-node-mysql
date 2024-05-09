const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const postRoutes = require("./routes/post");

const app = express();

// ejs imports
app.set("view engine", "ejs");
app.set("views", "views");

// public folder accepts
app.use(express.static(path.join(__dirname, "public")));

// to get request data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(postRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log("successfully synced");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
    console.log("error is showing");
  });
