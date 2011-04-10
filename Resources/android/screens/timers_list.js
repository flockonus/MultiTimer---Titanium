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

//TODO include loop here.
	
	var task ={
		begin: new Date(2011, 4, 8, 15, 10, 10),
		end: new Date(2011, 4, 14, 15, 10, 10),
		title: "1º Ciclo de Dev"
	};
	
	var top_gap = 5
	
	var taskView = Ti.UI.createView({backgroundColor:'#336699', height:50, left:0, right:0, top: top_gap});
	var taskLabel = Ti.UI.createLabel({color:'#777', top:3, textAlign:'center', height:'auto', text:task.title});
//
Ti.API.info('Proxima informação é taskLabel.height, depois, a soma');
Ti.API.info(taskLabel.height);
Ti.API.info(3+taskLabel.height+top_gap)
//
	var lazyBar = Ti.UI.createView({
		backgroundColor:'orange', 
		height: 20,
		left: 10, 
		width: '50%',
		top: 3+taskLabel.height+top_gap
	});
	
	
	taskView.add(taskLabel);
	taskView.add(lazyBar);
	
	body.add(taskView);
	
//var bodyView2 = Ti.UI.createView({backgroundColor:'#ff0000', height:50, left:10, right:10, top:10});
//var bodyView3 = Ti.UI.createView({backgroundColor:'orange', height:50, left:10, right:10, top:10});

win1.add(body);


// FOOTER
//var footer = Ti.UI.createView({height:50,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
//var footerLabel = Ti.UI.createLabel({color:'#777', textAlign:'center', height:'auto', text:'Footer'});
//footer.add(footerLabel);
//win1.add(footer);

