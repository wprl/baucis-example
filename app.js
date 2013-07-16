var express = require('express');
var mongoose = require('mongoose');
var baucis = require('baucis');

mongoose.connect('mongodb://localhost/aAa-BaUcIs-ExAmPlE-AaA');

var Vegetable = new mongoose.Schema({ name: String });

// Note that Mongoose middleware will be executed as usual
Vegetable.pre('save', function (next) { console.log('>>>>w00t<<<<'), next() });

// Register the schema
mongoose.model('vegetable', Vegetable);

// Create dummy data
var names = [ 'tomato', 'turnip', 'lovage', 'snap pea', 'carrot', 'zucchini' ];
var vegetables = names.map(function (name) { return { name: name } });

// Clear the database of old vegetables
mongoose.model('vegetable').remove(function (error) {
  if (error) throw error;

  // Put the fresh vegetables in the database
  mongoose.model('vegetable').create(vegetables, function (error) {
    if (error) throw error;

    // Create the API routes
    baucis.rest('vegetable');

    // Create the app and listen for API requests
    var app = express();
    app.use('/api/v1', baucis());
    app.listen(3333);
  });
});

