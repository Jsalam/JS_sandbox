
var phone;
var img;
var ui;

var preload = function() {
	img = loadImage('./images/iPhoneX.png');
};

var setup = function(){
	createCanvas(571,950);
	phone = new iPhoneX();
	phone.setup(71,40);
	ui = new UIGuides();
}

var draw = function(){
	background(255);
	phone.show();
	ui.vertKeylines(phone.screenX,phone.screenY);
	ui.hrzKeylines(phone.screenX,phone.screenY);
	ui.spacers(phone.screenX,phone.screenY);
	image(img, 0,0);

	text(mouseX + "," + mouseY, mouseX, mouseY);
}
