var axiom = "F";
var sentence = axiom;
var lenS = 0;
var len = 5 + lenS;

var rules = [];
rules[0] = {
	a:"F",
	b:"CFF=[D=F+F+F]+[E+F=F=F]"
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
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 180 * 22);
		} else if (current == "=") {
			rotate(-PI / 180 * 22);
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		} else if (current == "C") {
			stroke(0,128,0);
		} else if (current == "D") {
			stroke(150,75,0);
		} else if (current == "E") {
			stroke(0,128,100);
		} 
	}
}

function keyPressed() {
	if (len > 0) {
		if (keyCode == SHIFT) {
			lenS += 2;
		}
		if (keyCode == CONTROL) {
			lenS -= 2;
		}
	} else if (len <= 0) {
		background(51);
		len = 5;
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
	len = 5+lenS;
}
