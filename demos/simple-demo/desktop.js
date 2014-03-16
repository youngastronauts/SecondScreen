var Demo = {};

App.Run = function(){

	App.Socket.on('toggle', function(data){
		console.log(data);
		if(data.state == true){
			App.MakeDay();
		} else {
			App.MakeNight();
		}
	});

}

App.MakeDay = function(){
	$(".day").css('opacity', 1);
	$(".night").css('opacity', 0);
}

App.MakeNight = function(){
	$(".day").css('opacity', 0);
	$(".night").css('opacity', 1);
}
