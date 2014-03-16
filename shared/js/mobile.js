var App = {};

App.passcodeInput = [];

App.Init = function(){

	App.Cache();
	App.Bind();
	App.Size();

	App.Connect();

};


App.Cache = function(){

	App.dom = {};
	App.win = {};

	App.dom.authButtons = $("#numberPad .button");
	App.dom.passcode = $("#inputted-digits");

};

App.Bind = function(){

	

	$(window).resize(function(){
		App.Size();
	});

	App.dom.authButtons.on('click', function(){
		App.RegisterPasscodeButton($(this));
	});

};

App.Size = function(){

	App.win.window = $(window);
	App.win.width = App.win.window.width();
	App.win.height = App.win.window.height();

};

App.Connect = function(){

	App.sender = 'mobile';
	App.Socket = io.connect(Settings.socketServer);
	
	console.log('App Running');


};


App.RegisterPasscodeButton = function($sender){

	var val = $sender.text();

	if(val == 'Go'){
	    App.SubmitPasscode();
	    return;
	}

	if(val == 'C'){
	    App.dom.authButtons.removeClass('green');
	    App.passcodeInput = [];
	    App.dom.passcode.html("_ _ _ _");
	    return;
	}

	var i = App.passcodeInput.length;
	if(i < 4){
	    App.passcodeInput[i] = val;
	} else {
	    App.dom.authButtons.removeClass('green');
	    App.passcodeInput = [];
	    App.passcodeInput[0] = val;
	}

	var val = '';
	switch(App.passcodeInput.length){
		case 0:
			val = "_ _ _ _";
			break;
		case 1:
			val = App.passcodeInput[0] + " _ _ _";
			break;
		case 2:
			val = App.passcodeInput.join(' ') + " _ _";
			break;
		case 3:
			val = App.passcodeInput.join(' ') + " _";
			break;
		case 4:
			val = App.passcodeInput.join(' ');
			break;
	}
	

	App.dom.passcode.html(val);

	$sender.addClass('green');

};

App.SubmitPasscode = function(){
	
	if(App.passcodeInput.length < 4){
		alert("Please input the 4 digit passcode.")
		return false;
	}

	var username = false;
	if(App.requireUserName){
		username = prompt("What's your name?");
	}

	var color = false;
	if(App.requireColor){
		color = prompt("Favorite Color?", '#BADA55');
		App.userColor = color;
	}

	var passcode = App.passcodeInput.join('');

	App.Socket.emit('sendPasscode', {
	    passcode: passcode,
	    username: username,
	    color: color
	});

	App.Socket.on('begin', function(data){
		console.log("Time To Fight");

		App.RemovePasscodeConsole();
		App.Run();

	});

};


App.RemovePasscodeConsole = function(){

	$(".cover").fadeOut(300);

};


$(document).ready(function(){

	App.Init();

});