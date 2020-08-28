// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");
// ==============================================================================
// IMPORT ROUTERS
// Imports our routers which will be used as middleware to add routing to our app
// ==============================================================================
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ================================================================================
// ROUTING
// The uses our imported routers as middleware. By giving these a path, it defines
// a root path for any paths included in that router
// These routers give our server a "map" of how to respond when users visit or
// request data from various URLs.
// The order in which we load these is important as our HTML router is including
// a catch-all route (*) which would catch our api requests if it was called
// before our API router.
// ================================================================================
app.use('/api', apiRouter);
app.use('/', htmlRouter);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
