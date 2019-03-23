
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('app'));


app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/app/html/index.html'));
});

app.get("/spotlight", function(req, res){
  res.sendFile(path.join(__dirname + '/app/html/spotlight.html'));
});

app.get("/cartoon", function(req, res){
  res.sendFile(path.join(__dirname + '/app/html/cartoon.html'));
});

app.get("/temp", function(req, res){
  res.sendFile(path.join(__dirname + '/app/html/temp.html'));
});



app.listen(process.env.PORT||3000, function(){
  console.log("Server is running");
});
