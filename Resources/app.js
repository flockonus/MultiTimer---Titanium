// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//Titanium.UI.setBackgroundColor('#000');

Ti.API.info("Iniciando Aplicação agora.." + (new Date()) )

Titanium.UI.setBackgroundColor('#fff');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({id:'mainGroup1'});


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title: 'MultiTimer : MAIN', // Parece ser invisível
    backgroundColor: '#fff',
    url: '/screens/timers_list.js'
});

var tab1 = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Timers',
    window: win1
});

// bad pratice. // Assemble first window
//Ti.include('/screens/timers_list.js');

/*
var label1 = Titanium.UI.createLabel({
	color:'#888',
	text:'I should has stuff here, profress barz',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
*/

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Add+',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Add+',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Here you can add new Timer',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);


// open tab group
tabGroup.open();
