function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "Vince Gilligan") {
		correct++;
	}
	if (question2 == "Walter White") {
		correct++;
	}	
	if (question3 == "Mr. White") {
		correct++;
	}

	if (question4 == "Jesse Pinkman") {
		correct++;
	}

	if (question5 == "two") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/close.gif", "img/halfway.gif", "img/youtried.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "Cool!", "You're halfway there", "That's just okay", "You really need to do better", "Try again"];
	var score;

	if (correct == 0) {
		score = 5;
	}

	if (correct == 1) {
		score = 4;
	}

	if (correct == 2) {
		score = 3;
	}

	if (correct == 3) {
		score = 2;
	}

	if (correct == 4) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}