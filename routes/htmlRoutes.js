const express = require('express');
const path = require("path");

const router = express.Router();


// HTML GET Requests
// Below code handles when users "visit" a page.
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


// If no matching route is found default to home
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});


// Exports the router to be used as middleware
module.exports = router;