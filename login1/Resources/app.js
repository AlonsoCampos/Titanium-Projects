// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');
var tabGroup = Titanium.UI.createTabGroup();

var login = Titanium.UI.createWindow({
	title:'User Authentication Demo',
	url:'main_windows/login.js'
});

var loginTab = Titanium.UI.createTab({
	title:"Login",
	window:login
});	

tabGroup.addTab(loginTab);
tabGroup.open();

