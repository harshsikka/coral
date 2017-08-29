var express = require('express');
var db = require('./db').mongoose;
var Post = require('./db').PostModel;
var bodyParser = require('body-parser');

var app = express();



app.listen(process.env.PORT || 3000)

console.log('server is listening at ' + process.env.PORT || 3000);

app.use(express.static(__dirname));
app.use(bodyParser.json())

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
  console.log('post recieved');
  
  var newPost = new Post({
    url: req.body.url,
    title: req.body.title,
    upvotes: 3
  })

  newPost.save(function(error, newPost){
    if (error) {
      console.log(error);
      res.send('sorry');

    } else {
      res.send(200, newPost);
    }
  });
}




app.post('/addPost', addPosts);
app.get('/get', getPosts);
