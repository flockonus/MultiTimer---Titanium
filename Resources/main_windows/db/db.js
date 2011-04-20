Ti.include("../helpers/utils.js");

// Database constructor
function Db(){	
	this.db = Titanium.Database.open("timersdb");
	this.db.execute('CREATE TABLE IF NOT EXISTS timers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, intial_date DATE, final_date DATE)');
}

// Basic CRUD operations
Db.prototype.save = function(timer){
	var sql = "INSERT INTO timers(name, initial_date, final_date) VALUES('{timer.name}', '{timer.initialDate}', '{timer.finalDate}')".supplant(timer);
	this.db.execute(sql);
}

Db.prototype.remove = function(id){
	var sql = "DELETE FROM timers WHERE id = {id}".supplant({'id': id});
	this.db.execute(sql);
}

Db.prototype.update = function(timer){
	var sql = "UPDATE timers SET name = '{name}', initial_date = '{initialDate}', final_date = '{finalDate}' where id = {id}".supplant(timer);
	this.db.execute(sql);	
}

Db.prototype.list = function(){
	var sql = 'SELECT * FROM timers';
	var cursor = this.db.execute(sql);
	var timers = [];
	while(cursor.isValidRow()){
		var timer = populateTimerObject(cursor);
	}
	cursor.close();
	return timers;
}

Db.prototype.get = function(id){
	var sql = "SELECT * FROM timers WHERE id = {id}".supplant({'id':id});
	var cursor = this.db.execute(sql);
	var timer = null;
	if(cursor.isValidRow()){
		timer = populateTimerObject(cursor);
	}
	cursor.close();
	return timer;
}

// Helper function to populate a new Timer object from a database cursor
function populateTimerObject(cursor){
	var timer = new Timer(cursor.fieldByName('name'), cursor.fieldByName('initial_date'), cursor.fielByName('final_date'));
	timer.id = cursor.field(0);
	return timer;
}
