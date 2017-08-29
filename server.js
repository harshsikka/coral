var express = require('express');
var db = require('./db').mongoose;
var Post = require('./db').PostModel;

var app = express();

var port = 3000;

app.listen(3000);

console.log('server is listening at ' + port);

app.use(express.static(__dirname));

// to test populating the database
// var google = new Post({url:'https://www.google.com/', title: 'Where you can search anything', upvotes: 9});

// google.save(function(error){
//   if(error) {
//     console.log(error);
//   }
// });

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

var addPosts = function(req,res) {

}

app.get('/get', getPosts);
app.get('/post', addPosts);