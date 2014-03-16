var Demo = {};

App.Run = function(){

	//emulator
	new JSNES({
        'swfPath': 'swf/',
        'ui': $('.nes').text('').JSNESUI({
            "Games": [
                ['Super Mario Bros. 3', 'roms/smb3.nes'],
            ]
        })
    });

	App.Socket.on('msg', function(response){

	    var sender = response.sender;
	    var action = response.action;
	    var value = response.value;

	    switch(action){
	        case "buttonDown":
	            Demo.ButtonTapped(value, 'down');
	            break;
	        case "buttonUp":
	            Demo.ButtonTapped(value, 'up');
	            break;
	    }

	});

}


Demo.ButtonTapped = function(value, type){

	var keys = {};

	keys['start'] = 13;
	keys['select'] = 17;
	keys['up'] = 38;
	keys['down'] = 40;
	keys['left'] = 37;
	keys['right'] = 39;
	keys['a'] = 88;
	keys['b'] = 89;


	if(type == 'down'){
		var e = $.Event('keydown');
		e.which = keys[value];
		e.keyCode = keys[value];
		App.NES.keyboard.keyDown(e);
	} else if(type == 'up') {
		var e = $.Event('keyup');
		e.which = keys[value];
		e.keyCode = keys[value];
		App.NES.keyboard.keyUp(e);
	}


};




Util.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}