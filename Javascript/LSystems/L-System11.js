var axiom = "X";
var sentence = axiom;
var lenS = 0.0;
var len = 2.0 + lenS;

var rules = [];
rules[0] = {
	a:"X",
	b:"=YF+XFX+FY="
}

rules[1] = {
	a:"Y",
	b:"+XF=YFY=FX+"
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
	Dia();
}

function Dia() {
	background(51);
	translate(width,height);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 2);
		} else if (current == "=") {
			rotate(-PI / 2);
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
	} else if (keyCode == 'z' || 'Z') {
		background(51);
		axiom = "X";
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
	len = 2.0+lenS;
}