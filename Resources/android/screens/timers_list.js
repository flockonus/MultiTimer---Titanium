var win1 = Ti.UI.currentWindow;


/**
 * 
 * GENERIC ALERT from alert.js
var a = Titanium.UI.createAlertDialog({
	title:'Alert Test',	message:'Hello World'
});
var button1 = Titanium.UI.createButton({
	title:'Basic Alert',	height:40,	width:200,	top:10
});
button1.addEventListener('click', function()
{
	a.buttonNames = null; 	a.message = 'One Button';	a.show();
});
win1.add(button1); /-> Avaliable in this context
 */


// Temos que fazer uma classe Task com uma interface pré-estabelecida pra usarmos
// Premio pior nome do mundo de função
function time_diff_in_percent_from_now(d1, d2) {
	Ti.API.info( "time diff debug" );
	Ti.API.info( "d1 "+d1);
	Ti.API.info( "d2 "+d2 );
	
	
	//Time in ms
	var period = d2-d1 
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


// func responsável por criar a 'linha' da TASK
function taskViewBuilder( task ){
	// space void between Blocks.
	//var top_gap = 5
	
	var taskView = Ti.UI.createView({ className : 'taskViewBox' });
	var taskLabel = Ti.UI.createLabel({ className : 'taskViewBoxLabel', text:task.title});
//
//Ti.API.info('Next info is: taskLabel.height');
//Ti.API.info( parseFloat(taskLabel.height)+"" );
//Ti.API.info(3+taskLabel.height+top_gap)
//
	
	var lazyBar = Ti.UI.createView({
		backgroundColor:'orange',
		className: 'lazyBar',
		//width: time_diff_in_percent_from_now(task.begin, task.end)+'%'
	});
	
	if( task.state() == 'before'){
		// barra invisivel :P lazyBar.backgroundColor = 'blue'
		
		
	} else if( task.state() == 'current' ){
		lazyBar.backgroundColor = 'orange'
		lazyBar.width = time_diff_in_percent_from_now(task.begin, task.end)+'%'
		
		
	} else if( task.state() == 'expired' ){
		lazyBar.backgroundColor = 'gray'
		lazyBar.width = '100%'
	}
	
	
	
	taskView.add(taskLabel);
	taskView.add(lazyBar);
	
	return taskView;
}



/**
 * from vertical_layout_basic.js
 */
win1.layout = 'vertical';

// HEADER
var header = Ti.UI.createView({height:30,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
var headerLabel = Ti.UI.createLabel({color:'#777', top:10,textAlign:'center', height:'auto', text:'All Current Tasks'});
header.add(headerLabel);

win1.add(header);

// BODY
var body = Ti.UI.createView({height:'auto', layout:'vertical', backgroundColor:'#fff'});

//TODO loop here, all tasks.
	
	var task = {
		// FUCKING JS, months begin at 0 .. 11 AFF!
		begin: new Date(2011, 3, 8, 15, 10, 10),
		end: new Date(2011, 4, 14, 15, 10, 10),
		title: "Ola Mundo Ola Mundo Ola Mundo Ola Mundo ", // Limitar a 40 char
		// este é um mock de função, é esperado que retorne: 'before' | 'current' | 'expired' dependendo da tituação relativa a new Date().
		state: function(){ return 'current' }
	};
	body.add( taskViewBuilder(task) );
	
	
	var task = {
		// FUCKING JS, months begin at 0 .. 11 AFF!
		begin: new Date(2011, 3, 2, 15, 05, 10),
		end:   new Date(2011, 3, 2, 15, 10, 10),
		title: "Algo terminando e curto: Miojo", // Limitar a 40 char
		// este é um mock de função, é esperado que retorne: 'before' | 'current' | 'expired' dependendo da tituação relativa a new Date().
		state: function(){ return 'expired' }
	};
	body.add( taskViewBuilder(task) );
	
	
	var task = {
		// FUCKING JS, months begin at 0 .. 11 AFF!
		begin: new Date(2011, 3, 10, 15, 10, 10),
		end:   new Date(),
		title: "Algo muito prox de terminar!", // Limitar a 40 char
		// este é um mock de função, é esperado que retorne: 'before' | 'current' | 'expired' dependendo da tituação relativa a new Date().
		state: function(){ return 'current' }
	};
	body.add( taskViewBuilder(task) );
	
	
	var task = {
		// FUCKING JS, months begin at 0 .. 11 AFF!
		begin: new Date(2011, 8, 14, 15, 10, 10),
		end:   new Date(2011, 8, 15, 15, 10, 10),
		title: "Algo futuro", // Limitar a 40 char
		// este é um mock de função, é esperado que retorne: 'before' | 'current' | 'expired' dependendo da tituação relativa a new Date().
		state: function(){ return 'before' }
	};
	body.add( taskViewBuilder(task) );
	
	body.add( taskViewBuilder(task) );
	
//var bodyView2 = Ti.UI.createView({backgroundColor:'#ff0000', height:50, left:10, right:10, top:10});
//var bodyView3 = Ti.UI.createView({backgroundColor:'orange', height:50, left:10, right:10, top:10});

win1.add(body);




// FOOTER
//var footer = Ti.UI.createView({height:50,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
//var footerLabel = Ti.UI.createLabel({color:'#777', textAlign:'center', height:'auto', text:'Footer'});
//footer.add(footerLabel);
//win1.add(footer);

