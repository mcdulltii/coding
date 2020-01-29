var axiom = "[7]++[7]++[7]++[7]++[7]";
var sentence = axiom;
var lenS = 0;
var len = 10 + lenS;

var rules = [];
rules[0] = {
	a:"6",
	b:"81++91====71[=81====61]++"
}

rules[1] = {
	a:"7",
	b:"+81==91[===61==71]+"
}

rules[2] = {
	a:"8",
	b:"=61++71[+++81++91]="
}

rules[3] = {
	a:"9",
	b:"==81++++61[+91++++71]==71"
}

rules[4] = {
	a:"1",
	b:""
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
	Curve();
}

function Curve() {
	background(51);
	translate(width/2,height/2);
	stroke(255);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "1") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 5);
		} else if (current == "=") {
			rotate(-PI / 5);
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
			lenS += 2;
		}
		if (keyCode == CONTROL) {
			lenS -= 2;
		}
	} else if (len <= 0) {
		background(51);
		len = 10;
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
	len = 10+lenS;
}

