
var csvParser = new SimpleExcel.Parser.CSV();
var records = [];

function setup(){

	createCanvas (400,400);
	// read a CSV file
	
	var fileInput = document.getElementById('fileInput');
	// parse when file loaded, then print the result to console
	fileInput.addEventListener('change', function (e) {            
		var file = e.target.files[0];
		csvParser.loadFile(file, function () {
			var count = 0;
			while (count < csvParser.getSheet().length){
				records.push(record( csvParser.getSheet()[count]));
				count ++;
			}
			console.log(records[0].getName());
		});
	});	
}

function draw(){
	background(240);
	if (records.length > 0){
		text (records[0].name, 50, 30);
	}
}

function record(line){
	var person = {
		name:line[0],
		class:line[1],
		email: line[2],
		id: line[3],
		getName: function(){
			return person.name + ", " +person.email ;
		} 
	};
	return person;
}


