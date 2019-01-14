var express = require("express");
const bodyParser = require("body-parser");
var app = express();

// Configure app for views
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: false }));

// Setup Database, Dependencies, and Connection
var mongoose = require("mongoose");

// Local development
mongoose
  .connect(
    "mongodb://mongo:27017/",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// MAIN ROUTES
app.get("/", function(req, res) {
  console.log(req.body);
  res.sendFile("index.html");
});

// Start server
// app.listen(process.env.PORT, function() {
//   console.log("App is running on port: " + process.env.PORT);
// });

app.listen(3000);
