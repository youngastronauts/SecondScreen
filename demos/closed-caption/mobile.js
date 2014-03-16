App.Run = function(){

	App.Socket.on('msg', function(message){
		switch(message.action){
			case "cc":
				App.UpdateCC(message.value);
				break;
		}
	});

};

App.UpdateCC = function(text){

	$(".cc").html(text);

}