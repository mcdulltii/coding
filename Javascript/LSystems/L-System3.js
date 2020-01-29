var axiom = "F";
var sentence = axiom;
var lenS = 0;
var len = 2 + lenS;

var rules = [];
rules[0] = {
	a:"F",
	b:"+F==F+"
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
	CCurve();
}

function CCurve() {
	background(51);
	translate(width/3,height/3);
	rotate(PI/2);
	stroke(255);
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
			lenS += 2;
		}
		if (keyCode == CONTROL) {
			lenS -= 2;
		}
	} else if (len <= 0) {
		background(51);
		len = 2;
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
	len = 2+lenS;
}

