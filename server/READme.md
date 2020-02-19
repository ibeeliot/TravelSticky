// THINGS TO FINISH BEFORE APP IS "FULL-STACK"
Setup Server
[x] Install Dependencies
[x] Install / Setup Linter
[x] Setup Express App
[x] Setup Not Found and Error Middlewares
[x] Model DB
What data will we store?
[x] Setup Mongoose Model(s)
[x] POST /logs
Create a new log entry
[x] GET / logs
List all log entries
[] Setup Client
[] Create Form to add a new entry
[] Setup Map SDK on client
[] List all log entries on map
DEPLOY!

// Notes while doing this project

// Modules installed / Used
// 1. Express (for Node.js serverside scripting)
// 2. Mongodb (for database storage)
// 3. Helmet (for protection of header-type transparency)
// 4. Cors (for handling client/server relationship)
// 5. Morgan (for tracking any HTTP requests coming into endpoints)
// 6. learned how to set up an .ENV file and be able to require it bey using app.use and the require("dotenv").config(); command line
// 7. Added a body parser for express
// 8. Used react-map-gl alongside ReactMapGL component schema to fill in correct properties
// 9. Learned how to use API token key for Mapbox
// 10. Used React Hooks in order to maintain state (useState) property
// 11. Learned what a service worker does - helps cache with service worker behind the scene, but downfall is that cache is potentially hard to break (not used in source code but knows file and caches them behind the scenes)
// 12. Used IIFE in order to work with react useEffect component

// Learned More React
// 1. When first starting react using npx create-react-app client, you can safely delete the following:
// a. index.css(\*delete only the code class. Leave the body reset alone) / b. app.css / logo.svg / serviceworker.js / index.js (delete bit about
// service worker)

// Learned More Node.Js/Express
// 1. Got the get and post endpoints to be able to communicate via using POSTMAN
// 2. Confirmed that database from LogEntry (entries schema) were being displayed

// Learned More MongoDB/Mongoose
// 1. connected my mongoose to my current database URL, which is my localhost (for now)

// STRETCH GOALS
// 1. Play with ability to usestate on zoom for app component => useState{zoom: `${zoom._id}`}
// 2. Be able to change various MAP styles using a ENV file that can hold your various maps
// 3. Install webpack to work as a bundler
