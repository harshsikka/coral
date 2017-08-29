var express = require('express');
var db = require('./db').mongoose;
var Post = require('./db').PostModel;

var app = express();

var port = 3000;

app.listen(3000);

console.log('server is listening at ' + port);

app.use(express.static(__dirname));

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