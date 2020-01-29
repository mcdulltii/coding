var axiom = "L==F==L==F";
var sentence = axiom;
var lenS = 0.0;
var len = 2.0 + lenS;

var rules = [];
rules[0] = {
	a:"L",
	b:"+R=F=R+"
}

rules[1] = {
	a:"R",
	b:"=L+F+L="
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
	translate(width /2,height);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 4);
		} else if (current == "=") {
			rotate(-PI / 4);
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
		axiom = "L==F==L==F";
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
