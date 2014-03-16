var Demo = {};

App.Run = function(){

	App.dom.totalPlayers = $("#total-players span");
	App.dom.questionCounter = $("#question-counter span");
	App.dom.playerList = $("#player-list");


	App.dom.question = $(".question-content .question");

	$("#newQuestionButton").on('click', function(e){
		e.preventDefault();

		$(this).text("Next Question");

		App.Socket.emit('newQuestion', {});

	});	

	App.Socket.on('newQuestion', function(response){
		App.NewQuestion(response);
	});

	App.Socket.on('roomUpdate', function(response){
		
		App.dom.totalPlayers.html(response.totalPlayers);
		App.dom.questionCounter.html(response.currentQuestionIndex + "/" + response.totalQuestions);

		var playerList = '';
		for(i=0; i<response.players.length;i++){
			var player = response.players[i];
			if(player){
				playerList += '<li>' + player + '</li>';
				console.log(player);
			}
		}
		App.dom.playerList.html(playerList);

	});


	App.Socket.on('playerResponded', function(response){
		App.AddResponse(response);
	});

}


App.NewQuestion = function(data){
	// data = {id: 33, question: "Why is the sky blue", answers:[{ k: "a", v: "Because" }, { k: "a", v: "All of the above" }]}
	console.log(data);
	var id = data.id;
	var question = data.question;
	var answers = data.answers;

	var q = new Question(id, question, answers);

	App.dom.question.html('<span>' + q.question + '<span>');

	App.ClearResponses();
}


App.AddResponse = function(data){

	var correct = (data.correct) ? 'wisely' : 'poorly';
	var itemClass = (data.correct) ? 'right' : 'wrong';

	var item = '<li class="'+ itemClass +'">' + data.username + ' chose ' + correct + '.</li>';

	$(".response-content ul").append(item);

}


App.ClearResponses = function(){
	$(".response-content ul").html('');
}