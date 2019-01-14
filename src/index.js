var express = require("express");
var app = express();

// Configure app for views
app.use(express.static(__dirname + "/views"));

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
