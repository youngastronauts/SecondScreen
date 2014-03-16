function Question(id, question, answers){
	this.id = id;
	this.question = question;

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