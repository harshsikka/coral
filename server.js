var express = require('express');
var db = require('./db').mongoose;
var Post = require('./db').PostModel;

var app = express();

var port = 3000;

app.listen(3000);

console.log('server is listening at ' + port);

app.use(express.static(__dirname));

//populate the db

var google = new Post({url:'https://www.google.com/', title: 'google', upvotes: 3});

google.save(function(error){
  if(error) {
    console.log(error);
  }
});

var twitter = new Post({url:'https://www.google.com/', title: 'twitter', upvotes: 3});

twitter.save(function(error){
  if(error) {
    console.log(error);
  }
});

var youtube = new Post({url:'https://www.google.com/', title: 'facebook', upvotes: 3});

youtube.save(function(error){
  if(error) {
    console.log(error);
  }
});

var facebook = new Post({url:'https://www.google.com/', title: 'youtube', upvotes: 3});

twitter.save(function(error){
  if(error) {
    console.log(error);
  }
});

// database utilities

var getPosts = function(req,res) {
  //grab data from the database
  Post.find({}, function(err, data) {
    if(err) {
      console.log(err);
      res.send(404);
    } else {
      console.log('success');
      res.send(200, data);
    }
  })
}

app.get('/get', getPosts);