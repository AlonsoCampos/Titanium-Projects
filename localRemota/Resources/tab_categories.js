var categoryArray = [];
var catRows = [];

// populate category array from database
// only called on first rendering of the tab, after that the array is filled
if (categoryArray.length == 0) {
	var db = Titanium.Database.open('contentDB');
	var dbrows = db.execute('select category_id, category_name from categories order by category_name asc');
	while (dbrows.isValidRow()) {
	    categoryArray.push({
	    	catid:dbrows.fieldByName('category_id'),
	    	title:dbrows.fieldByName('category_name')
	    }); 
	    Ti.API.info("Found category: "+dbrows.fieldByName('category_name')+" ["+dbrows.fieldByName('category_id')+"]");
	    dbrows.next();
	}
	dbrows.close();
	db.close();
}

// category table view
for (var c=0;c<categoryArray.length;c++) {
	var row = Ti.UI.createTableViewRow({height:40,backgroundColor:'#ffffff',selectedBackgroundColor:'#eeee33',hasChild:true}); 
	var item = categoryArray[c];
	
	row.catname = item.title;
	row.catid = item.catid;
						
	var catName = Ti.UI.createLabel({
		text: item.title,
		color: '#334499',
		textAlign:'left',
		left:4,
		top:8,
		height:'auto',
		font:{fontWeight:'bold',fontSize:20}
	});
	row.add(catName);	
	catRows[c] = row;
}
var categoryTableView = Titanium.UI.createTableView({data:catRows});

// a helper function to make the code cleaner below
function composeItemHTML(id, desc) {
	var currentSize = Ti.App.Properties.getInt("fontSize");
	
	var retval = '<html><head>';
	retval += '<style>BODY {color: black;font-family: Arial, Helvetica, Sans-Serif;text-align:center;font-size:'+currentSize+'pt}';
	retval += '</style>';
	retval += '</head><body bgcolor="#660000"><div style="padding: 26px; background-color: white; border: 1px solid; -webkit-border-radius: 5px;text-align:left">';
	retval += desc;
	retval += '</div>';
	retval += '</body></html>';
	return retval;
}

function showItemsInCategory(cid,cname) {
		var itemArray = [];
		Ti.API.info("-> "+cname+" <- clicked");
		
		// populate item array from database
		// called every time a category row is clicked
		var db = Titanium.Database.open('contentDB');
		var dbrows = db.execute('select item_id,item_name,item_description from items where category_id=? order by item_name asc',cid);
		while (dbrows.isValidRow()) {
		    itemArray.push({
		    	item_id:dbrows.fieldByName('item_id'),
		    	title:dbrows.fieldByName('item_name'),
		    	item_description:dbrows.fieldByName('item_description')
		    }); 
		    Ti.API.info("Found item: "+dbrows.fieldByName('item_name')+" ["+dbrows.fieldByName('item_id')+"]");
		    dbrows.next();
		}
		dbrows.close();
		db.close();
				
		// create item table view
		itemRows = [];
		for (var c=0;c<itemArray.length;c++)
		{
			var row2 = Ti.UI.createTableViewRow({height:'40',backgroundColor:'#ffffff',selectedBackgroundColor:'#eeee33',hasChild:true});
			var item = itemArray[c];
		
			// assign custom row values
			row2.item_id = item.item_id;
			row2.heading = item.title;
			row2.item_description = item.item_description;

			// the label for the item name in tableview row
			var itemTitle = Ti.UI.createLabel({
				text: item.title,
				color: '#334499',
				textAlign:'left',
				left:4,
				top:8,
				height:'auto',
				font:{fontWeight:'bold',fontSize:20}
			});
			row2.add(itemTitle);
			
			itemRows[c] = row2;
		}
		var itemTableView = Titanium.UI.createTableView({data:itemRows});
		var subWindow = Titanium.UI.createWindow({  
		    title:cname,
		    backgroundColor:'#000000'
		});
		subWindow.add(itemTableView);
		subWindow.barColor = '#993333';
		Titanium.UI.currentTab.open(subWindow,{animated:true});
		
		// called when user clicks on an item
		itemTableView.addEventListener('click',function(e)
		{			
			var w3 = Ti.UI.createWindow({title:e.row.heading});
			var wb3 = Ti.UI.createWebView();
			wb3.html = composeItemHTML(e.row.item_id,e.row.item_description);
			w3.add(wb3);
			var b3 = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w3.setLeftNavButton(b3);
			w3.barColor = '#993333';
			b3.addEventListener('click',function()
			{
				w3.close();
			});			
			w3.open({modal:true});
		});
};

// called when use clicks on a category to see items in that category
function handleCategoryClick(e) {				
	showItemsInCategory(e.row.catid,e.row.catname);
}

// category view event listener
categoryTableView.addEventListener('click', handleCategoryClick);


// add category table view to the window
Titanium.UI.currentWindow.add(categoryTableView);