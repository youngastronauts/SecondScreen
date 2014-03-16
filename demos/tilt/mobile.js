App.Run = function(){

	gyro.frequency = 50;


	gyro.startTracking(function(o){
		//o.x, o.y, o.z for accelerometer
		//o.alpha, o.beta, o.gamma for gyro

		console.log(o);

		App.Socket.emit('msg', {
			sender: App.sender,
			action: 'orintationUpdate',
			value: o
			
		});

	});




};