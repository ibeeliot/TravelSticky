// this is where we'll handle the routers for logging of user-input data
const { Router } = require("express");

const LogEntry = require("../models/LogEntry.js");
// console.log(`${LogEntry}, this is log entry `);

// const LogEntry = require("../models/LogEntry");

const router = Router();

// bring in API key to be verified against

const { API_KEY } = process.env;
// if the router is already being called, then you just only use "/"
router.get("/", async (req, res) => {
  //   res.status(200).json(`Welcome to your logs! 🤗`); // just playing around before real code gets put in
  // by using "find" on the Mongoose schema, we can return all instances because of JSON objects
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    return next(error);
  }
});

// making this post request ASYNC
router.post("/", async (req, res, next) => {
  // try is for async and it's the the "successful" path while catch is for error catching
  try {
    if (req.get("X-API-KEY") !== API_KEY) {
      // if there is a HEADER that has this API key in the header, then we can go ahead and allow it to pass as a user
      // OTHERWISE, we can reject using the throw syntax
      throw new Error("UnAuthorized");
    }
    // pass the req.body into the new Schema
    const logEntry = new LogEntry(req.body);
    // when the post has been made, then save it as a schema
    const createdEntry = await logEntry.save();
    // send back the entry you just made to the schema via the save method
    res.json(createdEntry);
  } catch (error) {
    console.log(error.name);
    if (error.name === "ValidationError") {
      res.status(422);
    }
    return next(error);
  }
});

module.exports = router;
