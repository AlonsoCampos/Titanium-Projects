// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Evento',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Eventos',
    window:win1
});


var data = [
{title:"1",header:'Viktigt att tänka på'},
{title:"2",hasDetail:true ,header:'Dos'},
{title:"3", hasDetail:true,hasCheck:true, header:'Tres'},
{title:"4", hasDetail:true, header:'Cuatro', js:"external.js",dataToPass:"This is was passjhk hsdkjashkd"},
{title:"5"},
{title:"6"},
];

var table = Titanium.UI.createTableView({
	data:data
});

table.addEventListener('click', function(e)
{
	alert(""+e.rowData.title);
	//win2.title = e.rowData.header;
	if(e.source.dataToPass)
	{
		//Carga una nueva ventana
		if(e.source.js){
			var w = Titanium.UI.createWindow({
			title: e.source.title,
			backgroundColor:"white",
			dataToPass: e.source.dataToPass,
			url:e.source.js
			});
		}
	}else{
		var w = Titanium.UI.createWindow({
		title: e.source.title,
		backgroundColor:"white"
		});
		var label = Titanium.UI.createLabel({
			text:"Se ha abierto una nueva ventana de "+e.source.title,
			width:"auto",
			height:"auto",
			textAlin:"center"
			});
			w.add(label);
			}
		tab1.open(w,{animated:true});			
});
win1.add(table);
//
// create controls tab and root window
//
/*var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);
*/


//
//  add tabs
//
tabGroup.addTab(tab1);  
//tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
