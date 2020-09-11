
const express = require("express");

//  Imports routes to be used as middleware 
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// Creates server with Express in Node
const app = express();

// Sets a dynamic and initial port. (Heroku will use the first one)
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// Sets up the imported routes as middleware
app.use('/api', apiRouter);
app.use('/', htmlRouter);


// Starts the actual server 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
