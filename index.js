//1st we import the packages. using the require keyword

var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);//IO is how wecomminucste between clients

//think of io as the server, passing the data between two or more clients

//app.get(path,callback)
app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

//use express to serve up static files, so that our page can be pretty
app.use(express.static(__dirname+"/public"));

//handle socket events here
io.on('connection',function(socket){
	socket.on('chat message',function(msg){
		io.emit('chat message',msg);
	});
});

//tell the server where it should run on the host
http.listen(process.env.PORT || 3000,function(){
	console.log('listening on*:3000');
});