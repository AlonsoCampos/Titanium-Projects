// create tab group
var tabGroup = Ti.UI.createTabGroup();

// create win1 window
var win1 = Ti.UI.createWindow({  
    title:'Local Read',
	url:'products/product_category.js'
});

// craete tab1
var tab1 = Ti.UI.createTab({  
    icon:'images/tabs/KS_nav_ui.png',
    title:'Local Read',
    window:win1
});

// create win2 window
var win2 = Ti.UI.createWindow({  
    title:'Local Insert',
	url:'products/products_write.js'
});

// craete tab2
var tab2 = Ti.UI.createTab({  
    icon:'images/tabs/KS_nav_ui.png',
    title:'Local Insert',
    window:win2
});

// create win3 window
var win3 = Ti.UI.createWindow({  
    title:'Remote Read',
	url:'remote_read.js'
});

// craete tab3
var tab3 = Ti.UI.createTab({  
    icon:'images/tabs/KS_nav_ui.png',
    title:'Remote Read',
    window:win3
});

// create win4 window
var win4 = Ti.UI.createWindow({  
    title:'Remote Insert',
	url:'remote_write.js'
});

// craete tab4
var tab4 = Ti.UI.createTab({  
    icon:'images/tabs/KS_nav_ui.png',
    title:'Remote Insert',
    window:win4
});

// add the tab to the tab group
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);


// open tab group
tabGroup.open();