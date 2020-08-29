const express = require('express');
const fs = require('fs');
const notesData = require("../db/db.json");


const router = express.Router();

// ===============================================================================
// ROUTING
// ===============================================================================

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

router.get("/notes", function (req, res) {
    res.json(notesData);
});


router.post("/notes", function (req, res) {
    console.log(req.body)

    data = JSON.stringify(req.body, null, 2);

    fs.appendFile('./db/db.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

});




// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

// router.post("/clear", function (req, res) {
//   // Empty out the arrays of data
//   tableData.length = 0;
//   waitListData.length = 0;

//   res.json({ ok: true });
// });

// ===============================================================================
// EXPORT
// Exports the router to be used as middleware
// ===============================================================================
module.exports = router;