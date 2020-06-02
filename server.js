const express = require("express");
const logger = require("morgan");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const API = require("./public/api.js");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password97@ds033865.mlab.com:33865/heroku_ghtdxs5l", { useNewUrlParser: true });

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});