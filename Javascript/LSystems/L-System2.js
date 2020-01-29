var axiom = "X";
var sentence = axiom;
var lenS = 0;
var len = 1 + lenS;

var rules = [];
rules[0] = {
	a:"X",
	b:"F[=X][X]F[=X]+FX"
}

rules[1] = {
	a:"F",
	b:"FF"
}

function generate() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		for (var j = 0; j<rules.length; j++) {
			if (current == rules[j].a) {
				found = true
				nextSentence +=rules[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	/*createP(sentence);*/
	Plant();
}

function Plant() {
	background(51);
	translate(width/2,height);
	stroke(255);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "=") {
			rotate(-PI / 180 * 25);
		} else if (current == "+") {
			rotate(PI / 180 * 25);
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		} 
	}
}

function keyPressed() {
	if (len > 0) {
		if (keyCode == SHIFT) {
			lenS += 1;
		}
		if (keyCode == CONTROL) {
			lenS -= 1;
		}
	} else if (len <= 0) {
		background(51);
		len = 1;
		lenS = 0;
	}
	if (keyCode == ALT) {
		generate();
	}
	return false;
}

function setup() {
	createCanvas(screen.width,screen.height);
	background(51);
	/*createP(axiom);
	var button = createButton("generate");
	button.mousePressed(generate);*/
}

function draw() {
	len = 1+lenS;
}

