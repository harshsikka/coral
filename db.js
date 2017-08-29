var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://harshsikka:coral@ds159033.mlab.com:59033/coral-mvp-database');

mongoose.connection.once('open', function() {
  console.log('database is connected');
});

mongoose.connection.on('error', function(error) {
  console.log('database connection error: ' + error);
});

var postSchema = new Schema({
  url: String,
  title: String,
  upvotes: { type: Number, default: 0 }
});

var Post = mongoose.model('Post', postSchema);

var google = new Post({url:'https://www.google.com/', title: 'Where you can search anything', upvotes: 3});

google.save(function(error){
  if(error) {
    console.log(error);
  }
});

