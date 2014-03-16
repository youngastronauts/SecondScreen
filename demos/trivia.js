var App = {};

App.currentQuestionIndex = -1;
App.currentQuestionKey = -1;

App.totalPlayers = 0;
App.clients = [];

App.Init = function(){

	console.log('App Running');

	App.io = require('socket.io').listen(7777);

	App.io.sockets.on('connection', function (socket) {
		App.ConnectionMade(socket);		
	});

	App.GenerateQuestions();

};

App.GameData = function(){

	var players = [];
	var roster = App.io.sockets.clients(App.roomName);
	roster.forEach(function(player){
		players.push(player.nickname);
	});


	var data = {
		totalPlayers: App.totalPlayers, 
		totalQuestions: App.QuestionDB.length, 
		currentQuestionIndex: App.currentQuestionIndex + 1,
		players: players
	};

	return data;
}

App.ConnectionMade = function(socket){

	App.clients.push(socket);
	console.log('Connection Made');

	//generate random room name
	App.roomName = Util.pad((parseInt(Math.random() * 9999) + 1), 4);

	socket.emit('handshake', {
	    passcode: App.roomName
	});

	socket.join(App.roomName);
	
	App.io.sockets.in(App.roomName).emit('roomUpdate', App.GameData());

	socket.on('sendPasscode', function (data) {
	    App.roomName = data.passcode;
	    socket.join(App.roomName);
	    if(data.username){
	    	socket.nickname = data.username;
	    }
	    App.totalPlayers++;

	    App.io.sockets.in(App.roomName).emit('begin', App.GameData());
	    App.io.sockets.in(App.roomName).emit('roomUpdate', App.GameData());
	
	});

	socket.on('msg', function (message) {
		console.log("MSG");
	    App.io.sockets.in(App.roomName).emit('msg', {
	    	sender: message.sender,
	        action: message.action,
	        value: message.value
	    });
	});

	socket.on("newQuestion", function(){

		App.currentQuestionIndex++;

		var question = App.QuestionDB[App.currentQuestionIndex];
		if(question){
			App.currentQuestionKey = question.id;
			App.io.sockets.in(App.roomName).emit('newQuestion', question);
		} else {
			console.log("GAME OVER");
			App.io.sockets.in(App.roomName).emit('gameOver', {});
		}

	});

	socket.on("giveAnswer", function(data){

		var questionId = data.questionId;
		var answerId = data.answerId;

		var correct = App.CheckAnswer(questionId, answerId);

		var answerData = {};
		if(correct === true){
			socket.emit("correctAnswer", {questionId: questionId, correctAnswer: answerId});
			answerData.correct = true;
		} else {
			socket.emit("wrongAnswer", {questionId: questionId, correctAnswer: correct});
			answerData.correct = false;
		}

		answerData.username = socket.nickname;
		

		App.io.sockets.in(App.roomName).emit('playerResponded', answerData);

	});



	App.io.sockets.in(App.roomName).on('disconnect', function () {
		App.totalPlayers--;
		var i = App.clients.indexOf(socket);
		delete App.clients[i];
		App.io.sockets.in(App.roomName).emit('roomUpdate', App.GameData());
		console.log("DISSCONNECT: " + App.totalPlayers);
	});


};


App.GenerateQuestions = function(){
	App.QuestionDB = [];

	App.QuestionDB.push(
		new Question(1, " In which town do the Simpsons reside?", 
			1, //correct answer key
			[
				new Answer(1, "Springfield"), 
				new Answer(2, "Shelbyville"), 
				new Answer(3, "Seinfeld"), 
				new Answer(4, "Petoria")
			]
		)
	);

	App.QuestionDB.push(
		new Question(2, "What was the name of Fred's boss at the stone quarry in The Flintstones?", 
			3, //correct answer key
			[
				new Answer(1, "Barney"), 
				new Answer(2, "Mr Flint"), 
				new Answer(3, "Mr Slate"), 
				new Answer(4, "Wilma")
			]
		)
	);

	App.QuestionDB.push(
		new Question(3, "In the Lion King, where does Mufasa and his family live?", 
			4, //correct answer key
			[
				new Answer(1, "Hakunamata"), 
				new Answer(2, "In the Jungle"), 
				new Answer(3, "Zazzoland"), 
				new Answer(4, "Pride Rock")
			]
		)
	);

	App.QuestionDB.push(
		new Question(4, "Before Mickey Mouse, what Disney character was suggested to be the Sorcerer's Apprentice in Fantasia?", 
			2, //correct answer key
			[
				new Answer(1, "Goofy"), 
				new Answer(2, "Dopey"), 
				new Answer(3, "Aladin"), 
				new Answer(4, "A Broom")
			]
		)
	);

	App.QuestionDB.push(
		new Question(4, "In Futurama, what planet does Santa Claus live on?", 
			1, //correct answer key
			[
				new Answer(1, "Neptune"), 
				new Answer(2, "Planet North Pole"), 
				new Answer(3, "Earth"), 
				new Answer(4, "Zantaland")
			]
		)
	);


	App.QuestionDB = Util.shuffleArray(App.QuestionDB);

}

App.CheckAnswer = function(questionId, answerId){

	for(i=0; i<App.QuestionDB.length; i++){
		var q = App.QuestionDB[i];
		if(q.id.toString() == questionId.toString()){

			if(answerId.toString() == q.correctAnswerKey.toString()){
				return true;
			}
			return q.correctAnswerKey;
		}
	}

	return false;
}



/* Helper Functions */

var Util = {};




Util.pad = function(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

Util.shuffleArray = function(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}






/* Classes */


function Question(id, question, correctAnswerKey, answers){
	this.id = id;
	this.question = question;
	this.correctAnswerKey = correctAnswerKey;

	var answerArray = [];
	for(i=0; i<answers.length; i++){
		var answer = answers[i];
		answerArray.push(new Answer(answer.k, answer.v));
	}

	this.answers = answers;
}


function Answer(k, v){
	this.k = k;
	this.v = v;
}



/* Initialize */


(function(){
	App.Init();
}).call(this);


