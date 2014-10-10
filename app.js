var textBox,
	answer,
	savedNumber;
	
// Executed when the page has fully loaded.
window.onload = function() {
	document.addEventListener("keydown", function(e) {checkKey(e);}, false);
	textBox = document.getElementById("textBox");
};


function updateTextBox(str) {
	textBox.value += str;
}

function evaluateExpression() {
	answer = eval(textBox.value);
}	

function saveMemory() {
	evaluateExpression();
	showAnswer();
	savedNumber = answer;
}

function showMemory() {
	textBox.value += savedNumber;
}


function sinThis() {
	evaluateExpression();
	answer = Math.sin(answer * Math.PI / 180);
	showAnswer();
}

function cosThis() {
	evaluateExpression();
	answer = Math.cos(answer * Math.PI / 180);
	showAnswer();
}

function tanThis() {
	evaluateExpression();
	answer = Math.tan(answer * Math.PI / 180);
	showAnswer();
}

function logThis() {
	evaluateExpression();
	answer = Math.log(answer) / Math.log(10);
	showAnswer();
}

function randomNum() {
	updateTextBox(Math.random());
}

function roundNum() {
	evaluateExpression();
	answer = Math.round(answer);
	showAnswer();
}

function showAnswer() {
	textBox.value = answer;
}

function clearAll() {
	textBox.value = "";
}

function checkKey(e) {
    var keyID = e.keyCode || e.which;
    if (keyID === 13) { // enter key
		evaluateExpression();
    	showAnswer();
        e.preventDefault();
    } else if (keyID === 27) { // esc key
    	clearAll();
        e.preventDefault();
    }
}