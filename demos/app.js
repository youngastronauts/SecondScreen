var App = {};



App.Init = function(){

	console.log('App Running');

	App.io = require('socket.io').listen(7777);

	App.io.sockets.on('connection', function (socket) {
		App.ConnectionMade(socket);
	});

};


App.ConnectionMade = function(socket){

	console.log('Connection Made');

	//generate random room name
	App.roomName = Util.pad((parseInt(Math.random() * 9999) + 1), 4);

	socket.emit('handshake', {
	    passcode: App.roomName
	});

	socket.join(App.roomName);

	socket.on('sendPasscode', function (data) {
	    App.roomName = data.passcode;
	    socket.join(App.roomName);
	    if(data.username){
	    	socket.nickname = data.username;
	    }
	    if(data.color){
	    	socket.nickname = data.color;
	    }
	    App.io.sockets.in(App.roomName).emit('begin', {});
	});

	socket.on('msg', function (message) {
		console.log("MSG");
	    App.io.sockets.in(App.roomName).emit('msg', {
	    	sender: message.sender,
	        action: message.action,
	        value: message.value
	    });
	});


	socket.on('draw', function (data) {
	    App.io.sockets.in(App.roomName).emit('draw', {x : data.x, y : data.y, type: data.type, color:socket.nickname});
	});

	socket.on('toggle', function (data) {
		console.log("Toggle: " + data.state);
	    App.io.sockets.in(App.roomName).emit('toggle', { state: data.state });
	});


};

//initialize
(function(){
	App.Init();
}).call(this);



var Util = {};

Util.pad = function(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}