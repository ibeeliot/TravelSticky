// importing mongoose library which requires a schema
const mongoose = require('mongoose');
const { Schema } = mongoose;



// Title - text
// Description - text
// Comments - text
// Image - text - url
// Start Date = dateTime
// End Date - Datetime
// Latitude - Number
// Longtitude - Number
// Rating - scale 1 through 10
// Created At - DateTime
// Updated At - DateTime



// as a variable to be used 
const requiredString = {
  type: String,
  required: true,
}

const requiredNumber = {
  type: String,
  required: true,
}

const requiredDate = {
  type: Date, 
  default: Date.now
}

const logEntrySchema = new Schema({
// using built-in validators provided by Mongoose so that schemas are ALWAYS restricted to what was being set
// and the type being set as values to the various schemas
  title:  requiredString, // String is shorthand for {type: String}
  description: String,
  comments: String,
  image: String,
  rating: { type: Number, min: 0, max: 10, default: 0 },
  latitude: requiredNumber,
  longtitude: requiredNumber,
  visiteDate: {
    type: Date,
    required: true,
  },
  // created at & updated can be automatically set to any schema if timestamps is set to true
  // created_at: requiredDate,
  // updated_at: requiredDate,
  timestamps: true,
});

// export the module
module.exports = logEntrySchema;