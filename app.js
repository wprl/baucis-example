var express = require('express');
var mongoose = require('mongoose');
var baucis = require('baucis');

mongoose.connect('mongodb://localhost/aAa-BaUcIs-ExAmPlE-AaA');

var Vegetable = new mongoose.Schema({ name: String });

// Note that Mongoose middleware will be executed as usual
Vegetable.pre('save', function (next) {
  console.log('A vegetable was saved to Mongo: %s.', this.get('name'));
  next();
});

// Register the schemata
mongoose.model('vegetable', Vegetable);

// Create dummy data
var names = [ 'tomato', 'turnip', 'lovage', 'snap pea', 'carrot', 'zucchini' ];
var vegetables = names.map(function (name) { return { name: name } });

mongoose.model('vegetable').remove(function (error) {
  if (error) throw error;

  mongoose.model('vegetable').create(vegetables, function () {
    if (error) throw error;

    // Create the API routes
    baucis.rest('vegetable');

    // Create the app and listen for API requests
    var app = express();
    app.use('/api/v1', baucis());
    app.listen(3333);

    console.log('Server listening on port 3333.');
  });
});

