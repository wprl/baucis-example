// __Dependencies__

var express = require('express');
var mongoose = require('mongoose');
var baucis = require('baucis');

// __Main Program__

// Connect to the Mongo instance
mongoose.connect('mongodb://localhost/aAa-BaUcIs-ExAmPlE-AaA');

// Create a Mongoose schema
var Vegetable = new mongoose.Schema({ name: String });

<<<<<<< HEAD
// Note that Mongoose middleware will be executed as usual
Vegetable.pre('save', function (next) {
  console.log('A vegetable was saved to Mongo: %s.', this.get('name'));
  next();
});
=======
// Note: Mongoose middleware will be executed where appropriate
Vegetable.pre('save', function (next) { console.log('>>>>w00t<<<<'), next() });
>>>>>>> b500ae49ff92b93d10077bd823e9b72f602434cf

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

    console.log('Server listening on port 3333.');
  });
});

