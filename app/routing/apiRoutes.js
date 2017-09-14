// Load Data - we're linking our routes to a series of "data" sources.
// These data sources hold arrays of information in the friends array.

var friends = require("../data/friends.js");

module.exports = function (app) {
    // API Get Requests


    // A GET route with the url / api / friends.This will 
    // be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests

    // A POST routes / api / friends.This will be used to 
    // handle incoming survey results.This route will also
    //  be used to handle the compatibility logic.

    app.post("/api/friends", function (req, res) {
        // Our "server" will respond to requests and provide users with all the "friends"
        friends.push(req.body);
    });

}