App.Run = function(){

	$("#c #f a").on('touchstart', function(e){
		e.preventDefault();
		e.stopPropagation();

		var value = $(this).attr('href').replace('#', '');
	
		App.Socket.emit('msg', {
			sender: App.sender,
			action: 'buttonDown',
			value: value
			
		});


	});

	$("#c #f a").on('touchend', function(e){
		e.preventDefault();
		e.stopPropagation();

		var value = $(this).attr('href').replace('#', '');
	
		App.Socket.emit('msg', {
			sender: App.sender,
			action: 'buttonUp',
			value: value
			
		});

	});


};