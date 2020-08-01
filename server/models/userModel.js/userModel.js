const mongoose = require('mongoose');
const { number } = require('prop-types');
const Schema = mongoose.Schema;




// sets a schema for the 'species' collection
const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
});

// creates a model for the 'species' collection that will be part of the export


// exports all the models in an object to be used in the controller
module.exports = mongoose.model('User', userSchema);