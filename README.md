# Express Note Taker 

# [View Deployed Site](https://express-note-book.herokuapp.com/)

## Objective 
The goal was to add an express server functionality to a prebuilt note taker app, connecting the front- and back-ends. 

## Highlights

* Notes can be added on the front end and then get stored in a JSON file.

* Each note is given a unique ID using the `uuid` package, so they can also be deleted or revisited. 

* Express routes are used for the API, but also to direct traffic to the correct URL. Any slug given that isn't `/notes` get redirected to the homepage. 

* Site is deployed to Heroku


## Demo

![Note Taker Demo](./assets/note-taker-demo.gif)