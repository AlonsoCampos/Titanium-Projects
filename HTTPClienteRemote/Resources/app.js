var tabGroup = Titanium.UI.createTabGroup();
// https://www.youtube.com/watch?v=7NmJwrfC0vM
var win1 = Titanium.UI.createWindow({
	title:"Tab 1",
	backgoundColor:"White",
	url:"http.js"
});

var tab1 = Titanium.UI.createTab({
	title:"Tab 1",
	window:win1
});



var win2 = Titanium.UI.createWindow({
	title:"Tab 2",
	backgoundColor:"#FFF"
});

var tab2 = Titanium.UI.createTab({
	title:"Tab 2",
	window:win2
});

tabGroup.addTab(tab1); 
tabGroup.addTab(tab2); 
tabGroup.open();