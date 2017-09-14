// Dependencies
// Include the path package to get the correct file path for our html. 
var path = require("path");

// var friends = require("../data/friends.js");

// Routing: 
module.exports = function(app){
    // HTML Get Requests

    // Get request for the survey page.
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Get request for the default/catch-all route that leads back to the home page.
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Get request for the default/catch-all route that leads back to the home page.
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};