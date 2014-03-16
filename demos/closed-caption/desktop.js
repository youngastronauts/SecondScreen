var Demo = {};

App.Run = function(){

	var vid = Popcorn.youtube('#video','http://www.youtube.com/watch?v=4U0AqxlxfBs' );
 
 	vid.cue(0.1, function(){
 		App.SendCaption("Ughhhhh. Now. When I say 'Hello Mr. Thompson'");

 	});

 	vid.cue(2.5, function(){
 		App.SendCaption("And press down on your foot-");

 	});

 	vid.cue(4, function(){
 		App.SendCaption("You smile and nod...");

 	});

 	vid.cue(6, function(){
 		App.SendCaption("No Problem.");

 	});

 	vid.cue(7.2, function(){
 		App.SendCaption("Hello Mr Thompson.");

 	});

 	vid.cue(11.5, function(){
 		App.SendCaption("I think he's talking to you.");

 	});

 	vid.cue(14.5, function(){
 		App.SendCaption("* Facepalm *");

 	});



	$("#start").on('click', function(e){
		e.preventDefault();
		vid.play();
	});

}


App.SendCaption = function(text){

	var message = {};
	message.sender = 'desktop';
	message.action = 'cc';
	message.value = text;

	console.log(message);	

	App.Socket.emit('msg',  message);

}





