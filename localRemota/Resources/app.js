//
// Sample Titanium mobile application
//
// For use with this tutorial:
// http://bit.ly/titaniumdbtutorial
//

// Initialize database
Titanium.Database.install('content.sqlite','contentDB');

// Restore long term application settings
var currentSize = Ti.App.Properties.getInt('fontSize');
if (currentSize == null || currentSize < 12 || currentSize > 20) {
	currentSize = 14;
	Ti.App.Properties.setInt('fontSize',14);
}

// this sets the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// Tab for categories
var win1 = Titanium.UI.createWindow({
    url:'tab_categories.js',
    title:'Categories'
});
win1.barColor = '#993333';
var tab1 = Titanium.UI.createTab({
    icon:'nav_categories.png',
    title:'Categories',
    window:win1
});

// Tab for settings
var win2 = Titanium.UI.createWindow({  
    url:'tab_config.js',
    title:'Settings'
});
win2.barColor = '#993333';
var tab2 = Titanium.UI.createTab({  
    icon:'nav_config.png',
    title:'Settings',
    window:win2
});

// Add tabs to tabgroup 
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

// Open tab group
tabGroup.open();
