App.Run = function(){

	$(".switch").on('click', function(e){
		e.preventDefault();

		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
			App.Socket.emit('toggle', { state: false});
		} else {
			$(this).addClass('checked');
			App.Socket.emit('toggle', { state: true});
		}

	});

};



