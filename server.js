// ----------------------------[Requires]
require('dotenv').config()
require('./config/database');
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const app = express();
// ----------------------------[Middleware]
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));




// ----------------------------[Routes]
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ----------------------------[Server]
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
