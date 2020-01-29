var axiom = "F=F=F=F=F";
var sentence = axiom;
var lenS = 0.0;
var len = 4.0 + lenS;

var rules = [];
rules[0] = {
	a:"F",
	b:"F=F++F+F=F=F"
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
	Hex();
}

function Hex() {
	background(51);
	translate(width /3,height /3);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 5 * 2);
		} else if (current == "=") {
			rotate(-PI / 5 * 2);
		} 
	}
}

function keyPressed() {
	if (len > 0) {
		if (keyCode == SHIFT) {
			lenS += 2.0;
			background(51);
		}
		if (keyCode == CONTROL) {
			lenS -= 2.0;
			background(51);
		}
	} else if (len <= 0) {
		background(51);
		len = 4.0;
		lenS = 0.0;
	} 
	if (keyCode == ALT) {
		generate();
	} else if (keyCode == 'z' || 'Z') {
		lenS = 0.0;
		background(51);
		axiom = "F=F=F=F=F";
		sentence = axiom;
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
	len = 4.0+lenS;
}
