var win = Ti.UI.currentWindow;


/** TODO
 * 
 * usar o vertical_layout_table no sentido da TABLE
 * 
 * Modificar esse arquivo referindo a janela classe usando current window + url
 *   http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object
 * 
 */ 


Ti.API.info( 1 );

// Temos que fazer uma classe Task com uma interface pré-estabelecida pra usarmos
function time_diff_in_percent_from_now(d1, d2) {
	Ti.API.info( "time diff debug" );
	Ti.API.info( "d1 "+d1); 
	Ti.API.info( "d2 "+d2 );
	
	
	//Time in ms
	var period = d2-d1;
	Ti.API.info( "period  "+period );
	
	// se (elapsed < 0 ) -- não começou ainda
	var elapsed = new Date() - d1 - 1
	Ti.API.info( "elapsed "+elapsed );
	
	// regra de 3
	// (100*elapsed/period )/100.0 
	//simplificando pra ficar um número esperado entre 0.0 e 100.0
	var percent_elapsed = elapsed/period*100
	
	Ti.API.info( "% da tarefa decorrida até o momento: "+percent_elapsed );
	 
	return percent_elapsed
}




Ti.API.info( 2 );



// func responsável por criar a row da TASK
function taskViewBuilder( task ){
	
	var row = Ti.UI.createTableViewRow({
		height:'auto',
		className:"row"
	});
	
	var taskView = Ti.UI.createView({
		className : 'taskViewBox' 
	});
	
	var taskLabel = Ti.UI.createLabel({
		className : 'taskViewBoxLabel',
		text:task.title
	});
	
	taskView.add( taskLabel );
	
	
	var progressBar = Titanium.UI.createProgressBar({
	    width:'100%',
	    min:0,
	    max:100,
	    value:0,
	    color:'#fff',
	    //message:'',
	    font:{ fontSize:14, fontWeight:'bold' },
	    style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN, // Não consigo alterar??????? https://developer.appcelerator.com/apidoc/mobile/1.0/Titanium.UI.iPhone.StatusBar
	});
	
	/*
	var lazyBar = Ti.UI.createView({
		backgroundColor:'orange',
		className: 'lazyBar',
	});
	*/
	
	if( task.state() == 'before'){
		// barra invisivel :P lazyBar.backgroundColor = 'blue'
		
		
	} else if( task.state() == 'current' ){
		//lazyBar.backgroundColor = 'orange';
		//lazyBar.width = time_diff_in_percent_from_now(task.begin, task.end)+'%';
		progressBar.value = time_diff_in_percent_from_now(task.begin, task.end);
		
		
	} else if( task.state() == 'expired' ){
		//lazyBar.backgroundColor = 'gray';
		//lazyBar.width = '100%';
		progressBar.value = 100;
	}
	
	row.add( taskView );
	
	
	//row.add( lazyBar );
	row.add( progressBar );
	
	return row;
}



Ti.API.info( 3 );




var tv = Ti.UI.createTableView({minRowHeight:50});

var data = [];


/**
 * from vertical_layout_basic.js
 */



// HEADER

var header_row = Ti.UI.createTableViewRow({
	height:'auto',
	className:"row"
});

var header = Ti.UI.createView({
	height:30,
	borderWidth:1,
	borderColor:'#999',
	backgroundColor:'white'
});

var headerLabel = Ti.UI.createLabel({
	color:'#777', 
	top:10,
	textAlign:'center', 
	height:'auto', 
	text:'All Current Tasks'
});

header.add( headerLabel );

header_row.add( header );

data.push( header_row );







Ti.API.info( 4 );

// BODY
//var body = Ti.UI.createView({height:'auto', layout:'vertical', backgroundColor:'#fff'});

// TODO loop here, all tasks.
	var task = {
		// FUCKING JS, months begin at 0 .. 11 AFF!
		begin: new Date(2011, 3, 2, 15, 05, 10),
		end:   new Date(2011, 3, 2, 15, 10, 10),
		title: "Algo terminando e curto: Miojo", // Limitar a 40 char
		// este é um mock de função, é esperado que retorne: 'before' | 'current' | 'expired' dependendo da tituação relativa a new Date().
		state: function(){ return 'expired' }
	};
	data.push( taskViewBuilder(task) );
Ti.API.info( 5 );
	
	
	var task = {
		begin: new Date(2011, 3, 10, 15, 10, 10),
		end:   new Date(),
		title: "Algo MUITO prox de terminar!", // Limitar a 40 char
		state: function(){ return 'current' }
	};
	data.push( taskViewBuilder(task) );
Ti.API.info( 6 );
	
	
	var task = {
		begin: new Date(2011, 3, 8, 15, 10, 10),
		end:   new Date(2011, 4, 14, 15, 10, 10),
		title: "Ola Mundo Ola Mundo Ola Mundo Ola Mundo ", // Limitar a 40 char
		state: function(){ return 'current' }
	};
	data.push( taskViewBuilder(task) );
Ti.API.info( 7 );
	
	
	var task = {
		begin: new Date(2011, 8, 14, 15, 10, 10),
		end:   new Date(2011, 8, 15, 15, 10, 10),
		title: "Algo futuro", // Limitar a 40 char
		state: function(){ return 'before' }
	};
	data.push( taskViewBuilder(task) );
	
	data.push( taskViewBuilder(task) );
	data.push( taskViewBuilder(task) );
	data.push( taskViewBuilder(task) );
	data.push( taskViewBuilder(task) );
	data.push( taskViewBuilder(task) );
	data.push( taskViewBuilder(task) );
	data.push( taskViewBuilder(task) );
	data.push( taskViewBuilder(task) );


// Add rows to TableView 
tv.setData(data);

Ti.API.info( 8 );

// add TableView to the Window
win.add(tv);

Ti.API.info( 9 );

//win.add(body);
