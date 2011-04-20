// Timer Object

// Constructor
function Timer(name, initialDate, finalDate){
	this.name = name;
	this.initialDate = initialDate;
	this.finalDate = finalDate;
	this.id = null;
}

// Check if a current date falls in the range
// of initial and final date
Timer.prototype.isValidDate = function(date){
	// TODO: Validate that 'date' object is Date
	return this.initialDate <= date <= this.finalDate
}

Timer.prototype.toString = function(){
	return 'Timer['+this.name+'] = <'+this.initialDate+'><'+this.finalDate+'>'
}
