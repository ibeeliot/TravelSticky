// USE THIS FILE TO HANDLE MIDDLEWARE FOR ERRORS AND MAIN PAGE
// ROUTES WILL BE BUILT ON DIFFERENT FILE
// MIDDLEWARES IMPORTED FROM './middleware/middleware.js'

// ******************* //
/*
Setting Up Our Imports/Modules 
*/
// ******************* //

// Express APP will be created here and the start from package.json will also lead to here
// pulling in the express library via a variable that can be invoked like a function
const express = require("express");
// helps to organize logs of user
const morgan = require("morgan");
// helps to shield content type header so "powered by express" is disguised
const helmet = require("helmet");
// helps with separating concern of front/backend
const cors = require("cors");
// pull in mongoose module
const mongoose = require("mongoose");
// automatically reads a .env file (if it exists), set those environment variables and then you are able to use them
require("dotenv").config();
// create separate middleware error module and import those modules as objects from there
const middleware = ({
  pageNotFound,
  errorHandler
} = require("./middleware/middleware.js"));

// importing path to be used by express
// const path = require("path");

// import a body parser to parse incoming JSON data
// const bodyParse = require("body-parser");
// initializes app with the express built-in functions
const app = express();

// importing our LOGS routers (everything related to entries)
const logs = require("./api/logs.js");

// connects MongoDB to the local environment
mongoose.connect("mongodb://localhost/travel-log", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// you can see what IP addresses &  HTTPS requests are being hit on your site as well as the miliseconds it took,
// as well as status code
app.use(morgan("common"));
// helmet hides the header content type for back-end platforms, so hackers don't know you're using express, potentially
app.use(helmet());
// sets our origin to localhost:3000 so that ONLY this endpoint can return back info
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);

// express's JSON parser; does not parse text or javascript, just JSON
app.use(express.json());
// initialize bodyParse in your start file index.js
// app.use(bodyParse.json());
// app.use(bodyParse.urlencoded({ extended: true }));
// intializes the port that we're going to "listen to"

// ******************* //
/*
Getting our Servside 
Requests
*/
// ******************* //

// GET to /
// NOT a middleware. Just an immediate response to anybody going to localhost:1337
app.get("/", (req, res) => {
  res.status(200).json(`To be built...Hold your horses, people.`);
});

// put log routes before middleware of errors
// use "use" as the method and you can then define the route handler better on a different route file
// this essentially tells the thread of execution to look for the router in "logs" (an imported/required object)
app.use("/api/logs", logs);

// posting information to the  travel-log/api/logs endpoint
// app.post("api/logs", logs);

// PAGE NO FOUND ERROR HANDLING
// pageNotFound imported from middleware module
app.use(middleware.pageNotFound);

// GLOBAL HANDLER FOR SERVER-SIDE ERRORS
// errorHandler imported from middleware module
app.use(middleware.errorHandler);

// needed in order to open up the express route to listen to a port
const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening to localhost: ${port}`);
});
