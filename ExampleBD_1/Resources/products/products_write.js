// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

function insertRows(dbData) {

	var db = Ti.Database.install('../products.sqlite','products');

	var theData = db.execute('INSERT INTO products (category, name, pwidth, pheight, pcolor, qty) VALUES("'+category.value+'","'+name.value+'", "'+pwidth.value+'", "'+pheight.value+'", "'+pcolor.value+'", "'+qty.value+'")');

	theData;
	
	alert("Rows Inserted");
	
};

var category = Ti.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:300,
	height:40,
	hintText:'Category',
	keyboardType:Ti.UI.KEYBOARD_DEFAULT,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

currentWin.add(category);

var name = Ti.UI.createTextField({
	color:'#336699',
	top:60,
	left:10,
	width:300,
	height:40,
	hintText:'Name',
	keyboardType:Ti.UI.KEYBOARD_DEFAULT,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

currentWin.add(name);

var pwidth = Ti.UI.createTextField({
	color:'#336699',
	top:110,
	left:10,
	width:300,
	height:40,
	hintText:'Width',
	keyboardType:Ti.UI.KEYBOARD_DEFAULT,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

currentWin.add(pwidth);

var pheight = Ti.UI.createTextField({
	color:'#336699',
	top:160,
	left:10,
	width:300,
	height:40,
	hintText:'Height',
	keyboardType:Ti.UI.KEYBOARD_DEFAULT,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

currentWin.add(pheight);

var pcolor = Ti.UI.createTextField({
	color:'#336699',
	top:210,
	left:10,
	width:300,
	height:40,
	hintText:'Color',
	keyboardType:Ti.UI.KEYBOARD_DEFAULT,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

currentWin.add(pcolor);

var qty = Ti.UI.createTextField({
	color:'#336699',
	top:260,
	left:10,
	width:300,
	height:40,
	hintText:'Quantity',
	keyboardType:Ti.UI.KEYBOARD_DEFAULT,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

currentWin.add(qty);

var btn = Ti.UI.createButton({
	title:'Insert Record',
	top:310,
	width:130,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

currentWin.add(btn);

btn.addEventListener('click',function(e) {
	if (category.value != '' && name.value != '' && pwidth.value != '' && pheight.value != '' && pcolor.value != '' && qty.value != '') {
		var dbData = {
			category: category.value,
			name: name.value,
			pwidth: pwidth.value,
			pheight: pheight.value,
			pcolor: pcolor.value,
			qty: qty.value
		};
		insertRows(dbData);
	} else {
		alert("Please fill in all fields");
	};
});