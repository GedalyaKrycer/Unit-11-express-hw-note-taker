// Server
const express = require('express');

// Node file system utility 
const fs = require('fs');

// Unique ID Generating package 
const { v4: uuidv4 } = require('uuid');

// Local JSON file that acts as a "Database"
let notesData = require("../db/db.json");

// Handles URLs for HTTP Requests
const router = express.Router();

// When the "notes" route is requested it asks for the data in the JSON file and returns it with res.json()
router.get("/notes", function (req, res) {
    res.json(notesData);
});

// When the "notes" route is requested it send data to the JSON file. 
router.post("/notes", function (req, res) {

    // Stores the post data into a variable object
    const data = req.body;

    // Adds a unique id to the object
    data.id = uuidv4(data.id);

    // Takes the data object and pushes it into the JSON file's array
    notesData.push(data);

    // Write the new array into the JSON file (stringify'ing it first) and confirms the action with a console.log
    fs.writeFile('db/db.json', JSON.stringify(notesData), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    res.json(true)

});


// When the "notes" route is requested it deletes data from the JSON file, based on the submitted ID. 
router.delete("/notes/:id", function (req, res) {

    // Stores the ID from the url parameter into a variable 
    const targetedID = req.params.id;
    
    // Filters through the JSON file's array and restores objects that don't match the client submitted id 
    notesData = notesData.filter((note, index) => {
        return targetedID !== note.id;
    })

    // Writes the new array to the JSON database
    fs.writeFile('db/db.json', JSON.stringify(notesData), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    res.json(true);
});


module.exports = router;