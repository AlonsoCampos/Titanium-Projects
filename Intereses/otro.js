var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false,
  title: 'ScrollView Demo'
});

var scrollView = Ti.UI.createScrollView({
  //contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  //showHorizontalScrollIndicator: true,
  height: '80%',
  width: '80%'
});

Ti.UI.backgroundColor = '#99b2b7';
var win = Ti.UI.createWindow();
var dataArray = [];
var sectionFruit = Ti.UI.createTableViewSection({ headerTitle: 'Fruit' });
sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Apples' }));
sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Bananas' }));

var sectionVeg = Ti.UI.createTableViewSection({ headerTitle: 'Vegetables' });
sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Carrots' }));
sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Potatoes' }));

var row = Ti.UI.createTableViewRow({    					
	objName: 'row',
	height:110
});
							
var labelUserName = Ti.UI.createLabel({
    color:'black',
    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
	text:'FILA',
	objName: 'nombre',
	left:240, top: 6,
	width:360, height: 30
});
  	row.add(labelUserName);

dataArray.push(row);
var table = Ti.UI.createTableView({
	data:dataArray
});
var table2 = Ti.UI.createTableView({
  top:400,
  data: [sectionFruit, sectionVeg]
});
var table3 = Ti.UI.createTableView({
  top:800,
  data: [sectionFruit, sectionVeg]
});
var view = Ti.UI.createView({
  backgroundColor:'#336699',
  borderRadius: 10,
  top: 10,
  height: 1000,
  width: 500
});

view.add(table);
view.add(table2);
view.add(table3);
scrollView.add(view);
win.add(scrollView);
win.open();