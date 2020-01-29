var axiom = "F";
var sentence = axiom;
var lenS = 0.0;
var len = 2.0 + lenS;

var rules = [];
rules[0] = {
	a:"F",
	b:"F+X++X=F==FF=X+"
}

rules[1] = {
	a:"X",
	b:"=F+XX++X+F==F=X"
}

function generate() {
	stroke(255);
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
	Spiral();
}

function Spiral() {
	background(51);
	translate(width /3,height /3);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 3);
		} else if (current == "=") {
			rotate(-PI / 3);
		} else if (current == "X") {
			line (0,0,0,-len);
			translate(0, -len);
		} 
	}
}

function keyPressed() {
	if (len > 0) {
		if (keyCode == SHIFT) {
			lenS += 1.0;
		}
		if (keyCode == CONTROL) {
			lenS -= 1.0;
		}
	} else if (len <= 0) {
		background(51);
		len = 2.0;
		lenS = 0.0;
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
	len = 2.0+lenS;
}
