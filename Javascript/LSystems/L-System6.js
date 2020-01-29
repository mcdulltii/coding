var axiom = "F+F+F+F";
var sentence = axiom;
var lenS = 0.0;
var len = 5.0 + lenS;

var rules = [];
rules[0] = {
	a:"F",
	b:"F+f=FF+F+FF+Ff+FF=f+FF=F=FF=Ff=FFF"
}

rules[1] = {
	a:"f",
	b:"ffffff"
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
	Box();
}

function Box() {
	background(51);
	translate(width/2,height/2);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 2);
		} else if (current == "=") {
			rotate(-PI / 2);
		} else if (current == "f") {
			line (0,0,0,-len/2);
			translate(0, -len/2);
		} 
	}
}

function keyPressed() {
	if (len > 0) {
		if (keyCode == SHIFT) {
			lenS += 2.0;
		}
		if (keyCode == CONTROL) {
			lenS -= 2.0;
		}
	} else if (len <= 0) {
		background(51);
		len = 5.0;
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
	len = 5.0+lenS;
}
