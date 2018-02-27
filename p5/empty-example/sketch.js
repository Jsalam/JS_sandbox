

var counter;

function setup(){
	createCanvas (600,600);
	counter = height;
	fill(100);
}

	function draw(){
		background(200);

		counter = counter - 5;
		console.log(counter);
		ellipse(width/2, counter, 30,30);

		if ( counter < 0){
			counter = height;
		}
	}
