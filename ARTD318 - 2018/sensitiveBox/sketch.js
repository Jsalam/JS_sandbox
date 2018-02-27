
var posX, posY, w, h, minW, minH, maxW, maxH;
var over;
var speed;
var opacity;

function setup(){
	var canvas = createCanvas(400,400);
	canvas.position(100,100);
	posX = 100;
	posY = 100;
	minW = 20;
	minH = 20;
	w = 150;
	h = 80;
	maxW = 200;
	maxH = 50;
	over = false;
	speed = 3;
	opacity = 10;
}


var i= 0;

function draw(){
	background(230);


	if (mouseX > posX && mouseX < posX + w && mouseY > posY && mouseY < posY + h){
		over = true;
		fill(255,0,150,opacity);
	}else{
		over = false;
		fill(255,0,150,opacity);
	}

	if (over){
		if ( w < maxW){
			w = w+speed;
		}
		if ( h < maxH){
			h = h+speed;
		}
	} else {
		if ( w > minW){
			w = w-speed;
		}
		if ( h > minH){
			h = h-speed;
		}
	}

	opacity = 105* w/maxW

	noStroke()
	rect(posX + 5, posY + 5, w -10, h - 10);
	stroke(50);
	line(posX, posY, posX, posY+h)
	line(posX + w, posY, posX + w, posY+h)

}

