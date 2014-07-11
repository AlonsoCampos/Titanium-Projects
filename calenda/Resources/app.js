// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

	for (var x=0;x < 31; x++){
		
		var frame = Ti.UI.createView({
			width:columnWidth,
			height:columnWidth,
			backgroundColor:options.gridColor || '#eee',
			top:0,
			left:0,
			right:space,
			bottom:space
		});
		
		var overlay = Ti.UI.createView({
			width:Ti.UI.FILL,
			height:Ti.UI.FILL,
			backgroundColor:'transparent',
			zIndex:1,
			strImage:data[x].image
		});
		frame.add(overlay);
		 var label = Ti.UI.createLabel({
			text:x+1,
			width:Ti.UI.SIZE,
			height:Ti.UI.SIZE,
			color:'black'
		});
		
		
		frame.add(label);
		
win1.add(frame);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
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



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
