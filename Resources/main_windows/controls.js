// create table view data object
var data = [
	{title:'Sair pra correr', hasChild:true, id:'Correr'},
];

// add iphone specific tests
if (Titanium.Platform.name == 'iPhone OS')
{
	data.push({title:'Button Bar', hasChild:true, test:'../examples/buttonbar.js'});
	data.push({title:'Tabbed Bar', hasChild:true, test:'../examples/tabbedbar.js'});
	data.push({title:'System Buttons', hasChild:true, test:'../examples/system_buttons.js'});
	data.push({title:'Toolbar', hasChild:true, test:'../examples/toolbar.js'});
}
data.push({title:'Picker', hasChild:true, test:'../examples/picker.js'});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
