App.responseLockedIn = true;
App.requireUserName = true;


App.Run = function(){

	App.dom.question = $(".question-content .question");
	App.dom.media = $(".question-content .media");
	App.dom.answers = $(".question-content .answers");
	App.dom.totalPlayers = $("#total-players span");
	App.dom.questionCounter = $("#question-counter span");

	App.Socket.on('roomUpdate', function(response){
		
		App.dom.totalPlayers.html(response.totalPlayers);
		App.dom.questionCounter.html(response.currentQuestionIndex + "/" + response.totalQuestions);

	});

	App.Socket.on('newQuestion', function(response){
		App.NewQuestion(response);
	});

	App.Socket.on('correctAnswer', function(response){

	});

	App.Socket.on('wrongAnswer', function(response){
	
	});


	

};


App.NewQuestion = function(data){
	// data = {id: 33, question: "Why is the sky blue", answers:[{ k: "a", v: "Because" }, { k: "a", v: "All of the above" }]}

	var id = data.id;
	var question = data.question;
	var answers = data.answers;

	var q = new Question(id, question, answers);

	App.dom.question.html(q.question);

	var answerListHtml = '';
	for(i=0;i<answers.length;i++){
		var a = answers[i];
		answerListHtml += '<li data-answer-id="'+ a.k +'" data-question-id="'+ q.id +'">' + a.v + '</li>';
	}

	App.dom.answers.html(answerListHtml);

	App.responseLockedIn = false;

	App.dom.answers.removeClass('locked');
	App.dom.answers.find('li').removeClass('selected');

	$(".answers li").on('click tap', function(){

		if(!App.responseLockedIn){

			App.responseLockedIn = true;
			App.dom.answers.addClass('locked');
			$(this).addClass('selected');

			var questionId = $(this).data('question-id');
			var answerId = $(this).data('answer-id');

			App.Socket.emit('giveAnswer', {questionId: questionId, answerId: answerId});
		}

	});

}


