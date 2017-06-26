var socket = io();//we imported socket.io in the html
$("form").submit(function(){
	socket.emit('chat message',$('#messageField').val());
	$('#messageField').val('');
	return false;
});
//socket.on(event,callback fuction)
socket.on('chat message',function(msg){
	$('#messages').append($("<li>").text(msg));
});


