var y;

function setup() {
  // put setup code here
  var canvas = createCanvas(150,150);
  canvas.parent('sketch-holder2')
  y = height;
}

function draw() {
  // put drawing code here
	background(100,30,170);
	line(0,y,height,width/2);
	y = y-1;
	if (y < 0){
		y = height;
	}
	
}