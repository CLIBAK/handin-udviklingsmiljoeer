var pos = 0
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chaB;
var chC;
var correct = 0;

var questions = [
	["Hvad hedder jeg","charlotte","cecilie","camilla","A"],
	["Hvad hedder jeg","charlotte","cecilie","camilla","A"],
	["Hvad hedder jeg","charlotte","cecilie","camilla","A"],
	["Hvad hedder jeg","charlotte","cecilie","camilla","A"]

];

export function printQuestion (){
	test = document.getElementById("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2> You got "+correct+" of "+questions.length+" questions correct</h2><button id='btn2'>Restart</button>";
		document.getElementById("btn2").addEventListener("click", printQuestion);
		document.getElementById("test_status").innerHTML = "Test completed";
		pos = 0;
		correct = 0;
		return false;
	}
	document.getElementById("test_status").innerHTML = "Quiestion "+ (pos + 1)+" of"+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1]
	chB = questions[pos][2]
	chC = questions[pos][3]
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br><br>";
	test.innerHTML += "<button id='btn'>Submit</button>";
	document.getElementById("btn").addEventListener("click", check);
	console.log("hej");
}

function check(){
	choices = document.getElementsByName("choices");
	for(var i =0; i<choices.length; i++){
		if (choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	printQuestion();
}

window.addEventListener("load", printQuestion, false);
