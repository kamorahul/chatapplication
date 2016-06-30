var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chatdb");

var express = require("express");
var app = express();
var http = require('http').Server(app);
var pubnub  = require("pubnub")({
      publish_key : 'pub-c-5b6c362f-93cd-434b-9d1b-0cbe7447e8e5',
      subscribe_key : 'sub-c-9acbad34-3383-11e6-9edb-02ee2ddab7fe'
});

console.log(__dirname)
app.use(express.static(__dirname+"/view"));

app.get('/user', function(req, res){
      res.sendFile(__dirname + '/view/user.html');
});

app.get('/agent', function(req, res){
      res.sendFile(__dirname + '/view/agent.html');
});

pubnub.subscribe({
    state:{
        name : "rahul"+pubnub.uuid()
    },
      channel : "available_agent",
      callback : function(m){
        console.log("m > >> >> "+m);
      }
})

app.get("/restCall",function(req,res){
    res.send("Test Api");
});  


http.listen(3000, function(){
  console.log('listening on *:3000');
});



//app.listen(3000);


