// importing mongoose library which requires a schema
const mongoose = require("mongoose");
// imports a timestamp property for mongoose
const Timestamps = require("mongoose-timestamp");
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
  required: true
};

const requiredNumber = {
  type: String,
  required: true
};

// const requiredDate = {
//   type: Date,
//   default: Date.now
// };

// Mongoose time created/update at module

const logEntrySchema = new Schema({
  // using built-in validators provided by Mongoose so that schemas are ALWAYS restricted to what was being set
  // and the type being set as values to the various schemas
  title: requiredString, // String is shorthand for {type: String}
  description: String,
  comments: String,
  image: String,
  rating: { type: Number, min: 0, max: 10, default: 0 },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180
  },
  visitDate: {
    required: true,
    type: Date
  }
  // created at & updated can be automatically set to any schema if timestamps is set to true
  // created_at: requiredDate,
  // updated_at: requiredDate,
  // timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

// plugging in Timestamps for this schema so that logEntrySchema.createdAt and logEntrySchema.updatedAt both
logEntrySchema.plugin(Timestamps);

// initialize the schema online
const logEntry = mongoose.model("LogEntry", logEntrySchema);

// export the module
module.exports = logEntry;
