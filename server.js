// Dependencies
// npm packages used to give our server useful functionality
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

// set up properties for express server
// indicate to Node that we are creating express server
var app = express();

// Set a port that will be our listener later on
var PORT = process.env.PORT || 8000;

// set the express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTER
// this gives our server a map of how to respond when users visit or resquest data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
// this code effectively "starts" our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});