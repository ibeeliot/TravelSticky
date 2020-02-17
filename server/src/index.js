// USE THIS FILE TO HANDLE MIDDLEWARE FOR ERRORS AND MAIN PAGE
// ROUTES WILL BE BUILT ON DIFFERENT FILE
// MIDDLEWARES IMPORTED FROM './middleware/middleware.js'

// Express APP will be created here and the start from package.json will also lead to here
// pulling in the express library via a variable that can be invoked like a function
const express = require('express');
// helps to organize logs of user
const morgan = require('morgan')
// helps to shield content type header so "powered by express" is disguised
const helmet = require('helmet');
// helps with separating concern of front/backend
const cors = require('cors');
// create separate middleware error module and import those modules as objects from there
const middleware = { pageNotFound, errorHandler } = require('./middleware/middleware.js')

// initializes app with the express built-in functions
const app = express();

// you can see what IP addresses &  HTTPS requests are being hit on your site as well as the miliseconds it took,
// as well as status code 
app.use(morgan('common'));
// helmet hides the header content type for back-end platforms, so hackers don't know you're using express, potentially
app.use(helmet());
// sets our origin to localhost:3000 so that ONLY this endpoint can return back info
app.use(cors({
    origin: 'http://localhost:3000',
}));


// ******************* //
/*
    Getting our Servside 
    Requests
*/
// ******************* //

// GET to /
// NOT a middleware. Just an immediate response to anybody going to localhost:1337
app.get('/', (req, res) => {
    res.json({message: "hello there"})
})



// intializes the port that we're going to "listen to"
const port = process.env.PORT || 1337;



// PAGE NO FOUND ERROR HANDLING 
// pageNotFound imported from middleware module
app.use(middleware.pageNotFound)


// GLOBAL HANDLER FOR SERVER-SIDE ERRORS
// errorHandler imported from middleware module
app.use(middleware.errorHandler)

// needed in order to open up the express route to listen to a port
app.listen(port, () => {
    console.log(`Listening to localhost: ${port}`)
})