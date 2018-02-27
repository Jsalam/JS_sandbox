var boxes = [];


function setup(){
	var canvas = createCanvas(400,400);
	canvas.position(100,100);

	for (var i=0; i<10; i++) {
		boxes.push(new TextBox());
	}
	
}



function draw(){
	background(230);

var lastXY = 30;
	for(var i=0; i<boxes.length; i++){
		lastXY = boxes[i].show(100, 10 +(lastXY));
	}
}



function TextBox(){
	// this.posX 0;
	// this.posY 0;
	this.w = 150;
	this.h = 80;
	this.minW = 20;
	this.minH = 20;
	this.maxW = 200; 
	this.maxH = 50;  
	this.over = false;
	this.speed = 15;
	this.opacity = 10;

	this.show = function(posX, posY){

		if (mouseX > posX && mouseX < posX + this.w && mouseY > posY && mouseY < posY + this.h){
			this.over = true;
			fill(255,0,150,this.opacity);
		}else{
			this.over = false;
			fill(255,0,150,this.opacity);
		}

		if (this.over){
			if ( this.w < this.maxW){
				this.w = this.w+this.speed;
			}
			if ( this.h < this.maxH){
				this.h = this.h+this.speed;
			}
		} else {
			if ( this.w > this.minW){
				this.w = this.w-this.speed/5;
			}
			if ( this.h > this.minH){
				this.h = this.h-this.speed/5;
			}
		}

		this.opacity = 105* this.w/this.maxW;

		noStroke()
		rect(posX + 5, posY + 5, this.w -10, this.h - 10);
		stroke(50);
		line(posX, posY, posX, posY+this.h)
		line(posX , posY + this.h, posX + this.w, posY+this.h);

		return posY + this.h;
	}
}