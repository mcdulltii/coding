var axiom = "FX";
var sentence = axiom;
var lenS = 0;
var len = 1 + lenS;

var rules = [];
rules[0] = {
	a:"X",
	b:"X(YF("
}

rules[1] = {
	a:"Y",
	b:")FX)Y"
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
	createP(sentence);
	dragon();
}

function dragon() {
	background(51);
	translate(width/2,height/2);
	stroke(255);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "(") {
			rotate(PI / 2);
		} else if (current == ")") {
			rotate(-PI / 2);
		}  
	}
}

function keyPressed() {
	if (len > 0) {
		if (keyCode == SHIFT) {
			lenS += 1;
			axiom = "FX";
		}
		if (keyCode == CONTROL) {
			lenS -= 1;
			axiom = "FX";
		}
	} else if (len <= 0) {
		background(51);
		len = 1;
		lenS = 0;
		axiom = "FX";
	}
	if (keyCode == ALT) {
		generate();
	} else if (keyCode == 'z' || 'Z') {
		background(51);
		axiom = "FX";
		sentence = axiom;
	}
	return false;
}

function setup() {
	createCanvas(3*screen.width,3*screen.height);
	background(51);
	createP(axiom);
	var button = createButton("generate");
	button.mousePressed(generate);
}

function draw() {
	len = 1+lenS;
}

